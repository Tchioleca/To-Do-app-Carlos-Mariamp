import { useParams } from "react-router-dom"
import "./Itemdetails.css"

export default function Itemdetails({ tasks }) {
  const { id } = useParams()
  const task = tasks.find(t => t.id === id)

  if (!task) return <p className="task-not-found">Task not found</p>

  return (
    <>
      <h1>Task Details</h1>
      <div className="task-detail">
        <div className="task-detail-item">
          <div className="task-detail-label">Title</div>
          <div className="task-detail-value">{task.title}</div>
        </div>
        <div className="task-detail-item">
          <div className="task-detail-label">Status</div>
          <div className="task-detail-value">
            {task.completed ? "✓ Done" : "◯ Pending"}
          </div>
        </div>
      </div>
    </>
  )
}
