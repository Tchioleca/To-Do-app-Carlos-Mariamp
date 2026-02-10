import { useState } from "react"
import "./Home.css"

export default function Home({ tasks = [], deleteTask = () => {} }) {
  const [boilerplateTasks, setBoilerplateTasks] = useState([
    "Read the Project brief",
    "Create a project repository",
    "Create React application using Vite",
    "Finish Day 1 Development Tasks",
    "Finish Day 1 Research Tasks",
    "Finish Day 2 Development Tasks",
    "Finish Day 2 Research Tasks"
  ])

  const [completedTasks, setCompletedTasks] = useState(new Set())

  function deleteBoilerplateTask(index) {
    setBoilerplateTasks(prev => prev.filter((_, i) => i !== index))
  }

  function toggleComplete(taskId) {
    setCompletedTasks(prev => {
      const newSet = new Set(prev)
      if (newSet.has(taskId)) {
        newSet.delete(taskId)
      } else {
        newSet.add(taskId)
      }
      return newSet
    })
  }

  // Combine boilerplate tasks with actual app tasks
  const allTasks = [
    ...boilerplateTasks.map(task => ({ id: `boilerplate-${task}`, title: task, isBoilerplate: true })),
    ...tasks.map(task => ({ id: task.id, title: task.title, isBoilerplate: false }))
  ]

  function handleDeleteTask(taskId, isBoilerplate, index) {
    if (isBoilerplate) {
      deleteBoilerplateTask(index)
    } else {
      deleteTask(taskId)
    }
  }

  return (
    <div className="home">
      <section id="home" className="hero">
        <h2>Welcome to your To-Do App</h2>
        <p>Simple, focused task management built with React + Vite.</p>
      </section>

      <section id="tasks" className="tasks">
        <h3>Your Tasks ({allTasks.length})</h3>
        {allTasks.length === 0 ? (
          <p className="no-tasks">No tasks yet. Go to Dashboard to create one!</p>
        ) : (
          <ul className="task-list">
            {allTasks.map((task, index) => (
              <li key={task.id} className={`task-item ${completedTasks.has(task.id) ? 'completed' : ''}`}>
                <button
                  className={`task-checkbox ${completedTasks.has(task.id) ? 'checked' : ''}`}
                  onClick={() => toggleComplete(task.id)}
                  title={completedTasks.has(task.id) ? 'Mark incomplete' : 'Mark complete'}
                >
                  {completedTasks.has(task.id) && '✓'}
                </button>
                <span className="task">{task.title}</span>
                <button 
                  className="task-delete-btn"
                  onClick={() => handleDeleteTask(task.id, task.isBoilerplate, index)}
                  title="Delete task"
                >
                  ✕
                </button>
              </li>
            ))}
          </ul>
        )}
      </section>

      <section id="about" className="about">
        <h3>About</h3>
        <p>This app is a minimal starter built with Vite + React.</p>
      </section>

      <section className="example-cards">
        <div className="card">Create tasks and track progress</div>
        <div className="card">Filter by Today and Upcoming</div>
        <div className="card">Mark tasks as completed</div>
      </section>
    </div>
  )
}
