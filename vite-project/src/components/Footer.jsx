import './Footer.css'

export default function Footer() {
  return (
    <footer className="footer" role="contentinfo">
      <div className="footer-inner">© {new Date().getFullYear()} To-Do App</div>
    </footer>
  )
}
