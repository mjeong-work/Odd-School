import PostCard from '../../components/PostCard/PostCard'
import './FeedPage.css'

const MOCK_POSTS = [
  {
    id: '1',
    title: 'Welcome to the new community boards',
    author: 'Faculty Team',
    excerpt: 'We are excited to launch the refreshed space for sharing campus updates and wins.',
    timestamp: '2h ago',
  },
  {
    id: '2',
    title: 'Career fair prep session this Friday',
    author: 'Career Center',
    excerpt: 'Stop by the lab for resume reviews and mock interviews before next week\'s fair.',
    timestamp: '5h ago',
  },
  {
    id: '3',
    title: 'Alumni spotlight: STEM innovation panel recap',
    author: 'Alumni Relations',
    excerpt: 'Highlights and takeaways from last night\'s panel featuring recent grads in tech.',
    timestamp: '1d ago',
  },
]

function FeedPage() {
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
        {MOCK_POSTS.map((post) => (
          <PostCard
            key={post.id}
            title={post.title}
            author={post.author}
            excerpt={post.excerpt}
            timestamp={post.timestamp}
          />
        ))}
      </section>

      <div data-testid="smoke">FEED SCAFFOLD OK</div>
    </div>
  )
}

export default FeedPage
