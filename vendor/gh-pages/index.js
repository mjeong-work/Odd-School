#!/usr/bin/env node
import { execSync } from 'node:child_process'
import { cpSync, existsSync, mkdtempSync, readdirSync, rmSync } from 'node:fs'
import { join, resolve } from 'node:path'
import os from 'node:os'

function parseArgs(argv) {
  const result = { dir: null, branch: 'gh-pages', message: 'chore: deploy to GitHub Pages' }
  for (let i = 0; i < argv.length; i += 1) {
    const arg = argv[i]
    if ((arg === '-d' || arg === '--dir') && argv[i + 1]) {
      result.dir = argv[i + 1]
      i += 1
    } else if ((arg === '-b' || arg === '--branch') && argv[i + 1]) {
      result.branch = argv[i + 1]
      i += 1
    } else if ((arg === '-m' || arg === '--message') && argv[i + 1]) {
      result.message = argv[i + 1]
      i += 1
    }
  }
  return result
}

function safeExec(command, options = {}) {
  try {
    return execSync(command, { stdio: 'inherit', ...options })
  } catch (error) {
    throw error
  }
}

function execSilent(command) {
  try {
    return execSync(command, { stdio: 'pipe' }).toString().trim()
  } catch (error) {
    return null
  }
}

function emptyDirectory(target) {
  for (const entry of readdirSync(target)) {
    if (entry === '.git') continue
    rmSync(join(target, entry), { recursive: true, force: true })
  }
}

function main() {
  const { dir, branch, message } = parseArgs(process.argv.slice(2))

  if (!dir) {
    console.error('Usage: gh-pages -d <dir> [-b branch]')
    process.exit(1)
  }

  if (!existsSync(dir)) {
    console.error(`Directory not found: ${dir}`)
    process.exit(1)
  }

  const resolvedDir = resolve(dir)
  const branchRef = `refs/heads/${branch}`
  const branchExists = Boolean(execSilent(`git show-ref --verify ${branchRef}`))

  if (!branchExists) {
    safeExec(`git branch ${branch}`)
  }

  const worktree = mkdtempSync(join(os.tmpdir(), `gh-pages-${branch}-`))

  let worktreeReady = false
  try {
    safeExec(`git worktree add --force ${worktree} ${branch}`)
    worktreeReady = true
    emptyDirectory(worktree)
    cpSync(resolvedDir, worktree, { recursive: true })
    safeExec(`git -C ${worktree} add --all`)
    try {
      safeExec(`git -C ${worktree} commit -m "${message}"`)
    } catch (error) {
      // ignore empty commit
    }
    const remote = execSilent('git config --get remote.origin.url')
    if (remote) {
      try {
        safeExec(`git -C ${worktree} push origin ${branch}`)
      } catch (error) {
        console.warn('Warning: failed to push to remote. Continuing without push.')
      }
    }
  } finally {
    if (worktreeReady) {
      try {
        safeExec(`git worktree remove ${worktree} --force`)
      } catch (error) {
        console.warn('Warning: failed to remove temporary worktree.')
      }
    } else {
      rmSync(worktree, { recursive: true, force: true })
    }
  }
}

main()
