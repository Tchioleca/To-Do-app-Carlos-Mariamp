import './Home.css'

export default function Home() {
  return (
    <main className="home" role="main">
      <section className="hero">
        <h2>Welcome to your To-Do App</h2>
        <p>Simple, focused task management built with React + Vite.</p>
      </section>

      <section className="example-cards">
        <div className="card">Create tasks and track progress</div>
        <div className="card">Filter by Today and Upcoming</div>
        <div className="card">Mark tasks as completed</div>
      </section>
    </main>
  )
}
