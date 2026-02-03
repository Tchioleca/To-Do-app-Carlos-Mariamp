import './App.css'
import Navbar from './components/Navbar'
import Sidebar from './components/Sidebar'
import Footer from './components/Footer'
import Home from './pages/Home'

function App() {
  return (
    <div className="app-root">
      <Navbar />

      <div className="app-container">
        <Sidebar />
        <Home />
      </div>

      <Footer />
    </div>
  )
}

export default App
