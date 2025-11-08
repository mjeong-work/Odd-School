import './PostCard.css'

type PostCardProps = {
  title: string
  author: string
  excerpt: string
  timestamp: string
}

function PostCard({ title, author, excerpt, timestamp }: PostCardProps) {
  return (
    <article className="post-card">
      <header className="post-card__header">
        <h2 className="post-card__title">{title}</h2>
        <span className="post-card__timestamp">{timestamp}</span>
      </header>
      <p className="post-card__meta">Posted by {author}</p>
      <p className="post-card__excerpt">{excerpt}</p>
    </article>
  )
}

export default PostCard
