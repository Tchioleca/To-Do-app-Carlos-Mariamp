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
            <ul className="task-list">
          <li className="task">Read the Project brief</li>
          <li class="task">Create a project repository</li>
          <li class="task">Create React application using Vite</li>
          <li class="task">Finish Day 1 Development Tasks</li>
          <li class="task">Finish Day 1 Research Tasks</li>
          <li class="task">Finish Day 2 Development Tasks</li>
          <li class="task">Finish Day 2 Research Tasks</li>
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
