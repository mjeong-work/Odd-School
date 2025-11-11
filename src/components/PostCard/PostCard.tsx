import './PostCard.css'

type PostCardProps = {
  title: string
  content: string
  createdAt: string
  likeCount: number
  commentCount: number
  authorDisplay: string
  pinned?: boolean
  imageUrl?: string | null
}

function formatDate(value: string) {
  const date = new Date(value)

  if (Number.isNaN(date.getTime())) {
    return value
  }

  return new Intl.DateTimeFormat('ko-KR', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
  }).format(date)
}

function PostCard({
  title,
  content,
  createdAt,
  likeCount,
  commentCount,
  authorDisplay,
  pinned = false,
  imageUrl,
}: PostCardProps) {
  const formattedDate = formatDate(createdAt)

  return (
    <article className="post-card">
      <header className="post-card__header">
        <div className="post-card__title-group">
          {pinned && <span className="post-card__badge">Pinned</span>}
          <h2 className="post-card__title">{title}</h2>
        </div>
        <time className="post-card__timestamp" dateTime={createdAt}>
          {formattedDate}
        </time>
      </header>

      <p className="post-card__meta">게시자 {authorDisplay}</p>

      {imageUrl && (
        <div className="post-card__media">
          <img src={imageUrl} alt="" loading="lazy" />
        </div>
      )}

      <p className="post-card__content">{content}</p>

      <footer className="post-card__footer" aria-label="Post engagement">
        <span className="post-card__stat" aria-label={`좋아요 ${likeCount}개`}>
          ❤️ {likeCount}
        </span>
        <span className="post-card__stat" aria-label={`댓글 ${commentCount}개`}>
          💬 {commentCount}
        </span>
      </footer>
    </article>
  )
}

export default PostCard
