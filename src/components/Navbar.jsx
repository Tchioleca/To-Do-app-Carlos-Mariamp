import { Link } from 'react-router-dom'
import './Navbar.css'

export default function Navbar({ tasks = [] }) {
  const incompleteTasks = tasks.filter(t => !t.completed)

  return (
    <header className="navbar" role="banner">
      <div className="nav-inner">
        <div className="brand">To-Do App</div>
        <nav className="nav-links" role="navigation">
          <Link to="/">Home</Link>
          <Link to="/dashboard">Tasks</Link>
          <Link to="/about">About</Link>
        </nav>
      </div>

      <div className="navbar-tasks">
        <h4>Pending Tasks ({incompleteTasks.length})</h4>
        <ul className="navbar-task-list">
          {incompleteTasks.map(task => (
            <li key={task.id}>
              <span className="task-indicator">•</span>
              {task.title}
            </li>
          ))}
        </ul>
      </div>
    </header>
  )
}
