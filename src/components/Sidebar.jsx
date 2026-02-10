import { Link } from "react-router-dom"
import "./Sidebar.css"

export default function Sidebar({ tasks = [] }) {
  return (
    <aside className="sidebar">
      <h3>Tasks</h3>
      <ul>
        {tasks.map(task => (
          <li key={task.id}>
            <Link to={`/tasks/${task.id}`}>
              {task.title}
            </Link>
          </li>
        ))}
      </ul>
    </aside>
  )
}
