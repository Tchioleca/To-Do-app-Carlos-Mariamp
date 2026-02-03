import './Footer.css'

export default function Footer() {
  return (
    <footer className="footer" role="contentinfo">
      <div className="footer-inner">© {new Date().getFullYear()} To-Do App Made by Carlos & Mariam</div>
    </footer>
  )
}
