import './Footer.css'

export default function Footer() {
  return (
    <footer className="footer" role="contentinfo">
      <div className="footer-inner">© {new Date().getFullYear()} <a href="https://github.com/Tchioleca/To-Do-app-Carlos-Mariamp.git">To-Do App Made by Carlos & Mariam</a></div>
    </footer>
  )
}
