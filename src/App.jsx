import { Routes, Route } from "react-router-dom"
import { useState } from "react"

import Navbar from "./components/Navbar"
import Sidebar from "./components/Sidebar"
import Footer from "./components/Footer"

import Home from "./pages/Home"
import Dashboard from "./pages/Dashboard"
import About from "./pages/About"
import Itemdetails from "./pages/Itemdetails"

import tasksData from "./data/task.json"

export default function App() {
  const [tasks, setTasks] = useState(tasksData)

  function addTask(title) {
    setTasks(prev => [
      ...prev,
      { id: crypto.randomUUID(), title, completed: false }
    ])
  }

  function toggleTask(id) {
    setTasks(prev =>
      prev.map(t =>
        t.id === id ? { ...t, completed: !t.completed } : t
      )
    )
  }

  function deleteTask(id) {
    setTasks(prev => prev.filter(t => t.id !== id))
  }

  return (
    <>
      <Navbar tasks={tasks} />

      <div className="layout">
        <Sidebar tasks={tasks} />

        <main>
          <Routes>
            <Route path="/" element={<Home tasks={tasks} deleteTask={deleteTask} />} />
            <Route
              path="/dashboard"
              element={
                <Dashboard
                  tasks={tasks}
                  addTask={addTask}
                  toggleTask={toggleTask}
                  deleteTask={deleteTask}
                />
              }
            />
            <Route path="/about" element={<About />} />
            <Route
              path="/tasks/:id"
              element={<Itemdetails tasks={tasks} />}
            />
          </Routes>
        </main>
      </div>

      <Footer />
    </>
  )
}
