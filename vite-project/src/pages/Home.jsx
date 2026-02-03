// this is where the main structure of the HOME PAGE is coded(From here it is linked to main.jsx to keep thing readable...)
// cleaned the original boillerplate code
// this is where the main scruture of the page is coded (where the components are being loaded)
// test 22

import './Home.css'
import Navbar from '../components/Navbar'
import Sidebar from '../components/Sidebar'
import Footer from '../components/Footer'

export default function Home() {
  return (
    <div className="app-root">
      <Navbar />

      <div className="app-container">
        <Sidebar />

        <main className="home" role="main">
          <section id="home" className="hero">
            <h2>Welcome to your To-Do App</h2>
            <p>Simple, focused task management built with React + Vite.</p>
          </section>

          <section id="tasks" className="tasks">
            <h3>Your Tasks</h3>
            <p className="muted">No tasks yet — add one to get started.</p>
            <ul className="task-list">
              <li className="task">Example task — <em>click to edit</em></li>
            </ul>
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
        </main>
      </div>

      <Footer />
    </div>
  )
}
