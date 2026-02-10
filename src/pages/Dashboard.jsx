import { Link } from "react-router-dom"
import NewItemForm from "../components/NewItemForm"
import "./Dashboard.css"

export default function Dashboard({ tasks, addTask, toggleTask, deleteTask }) {
  return (
    <>
      <h1>Tasks</h1>

      <NewItemForm onSubmit={addTask} />

      <ul>
        {tasks.map(task => (
          <li key={task.id}>
            <button
              className={`task-checkbox ${task.completed ? 'checked' : ''}`}
              onClick={() => toggleTask(task.id)}
              title={task.completed ? 'Mark incomplete' : 'Mark complete'}
            >
              {task.completed && '✓'}
            </button>

            <Link to={`/tasks/${task.id}`}>
              {task.title}
            </Link>

            <button
              onClick={() => deleteTask(task.id)}
              className="task-delete-btn"
              title="Delete task"
            >
              ✕
            </button>
          </li>
        ))}
      </ul>
    </>
  )
}
