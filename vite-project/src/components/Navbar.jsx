import './Navbar.css'

export default function Navbar() {
  return (
    <header className="navbar" role="banner">
      <div className="nav-inner">
        <div className="brand">To-Do App</div>
        <nav className="nav-links" role="navigation">
          <a href="#">Home</a>
          <a href="#">Tasks</a>
          <a href="#">About</a>
        </nav>
      </div>
    </header>
  )
}
