import { Routes, Route, Navigate } from 'react-router-dom'
import FeedPage from './pages/FeedPage/FeedPage'
import EventPage from './pages/EventPage'
import Header from './components/Header'
import './App.css'

function App() {
  return (
    <div className="app-shell">
      <Header />
      <div className="app-shell__content">
        <Routes>
          <Route path="/" element={<Navigate to="/feed" replace />} />
          <Route path="/feed" element={<FeedPage />} />
          <Route path="/events" element={<EventPage />} />
          <Route path="*" element={<Navigate to="/feed" replace />} />
        </Routes>
      </div>
    </div>
  )
}

export default App
