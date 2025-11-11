import { useEffect, useState } from 'react'
import PostCard from '../../components/PostCard/PostCard'
import './FeedPage.css'

type FeedPost = {
  id: number
  category: string
  title: string
  content: string
  images?: string[]
  likeCount: number
  commentCount: number
  createdAt: string
  authorDisplay: string
  pinned?: boolean
}

function FeedPage() {
  const [posts, setPosts] = useState<FeedPost[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    let isMounted = true

    const loadFeed = async () => {
      const feedUrl = `${import.meta.env.BASE_URL}mock/feedData.json`

      try {
        const response = await fetch(feedUrl)

        if (!response.ok) {
          throw new Error('Failed to fetch feed data')
        }

        const data: { posts?: FeedPost[] } = await response.json()

        if (isMounted) {
          setPosts(Array.isArray(data.posts) ? data.posts : [])
        }
      } catch (err) {
        if (isMounted) {
          setError('피드를 불러오지 못했습니다. 잠시 후 다시 시도해주세요.')
        }
      } finally {
        if (isMounted) {
          setIsLoading(false)
        }
      }
    }

    void loadFeed()

    return () => {
      isMounted = false
    }
  }, [])

  return (
    <div className="feed-page">
      <header className="feed-page__header">
        <h1>Community Boards</h1>
      </header>

      <div className="feed-page__tabs" role="tablist" aria-label="Feed filters">
        <button type="button" className="feed-page__tab">
          Current
        </button>
        <button type="button" className="feed-page__tab">
          Alumni
        </button>
        <button type="button" className="feed-page__tab">
          All School
        </button>
      </div>

      <div className="feed-page__search">
        <input type="search" placeholder="Search posts" aria-label="Search posts" />
      </div>

      <section className="feed-page__posts" aria-label="Latest posts">
        {isLoading && <p className="feed-page__status">게시글을 불러오는 중입니다...</p>}
        {error && !isLoading && <p className="feed-page__status feed-page__status--error">{error}</p>}
        {!isLoading && !error && posts.length === 0 && (
          <p className="feed-page__status">아직 게시글이 없습니다.</p>
        )}
        {!isLoading && !error &&
          posts.map((post) => (
            <PostCard
              key={post.id}
              title={post.title}
              content={post.content}
              createdAt={post.createdAt}
              likeCount={post.likeCount}
              commentCount={post.commentCount}
              authorDisplay={post.authorDisplay}
              pinned={post.pinned}
              imageUrl={post.images?.[0] ?? null}
            />
          ))}
      </section>

      <div data-testid="smoke">FEED SCAFFOLD OK</div>
    </div>
  )
}

export default FeedPage
