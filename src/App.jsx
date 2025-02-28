
import { BrowserRouter, Routes, Route, Link } from "react-router"
import Home from "./pages/Home"
import About from "./pages/About"

export default function App() {

  return (
    <BrowserRouter>
      <header>
        <Link to="/" className="site-logo">#VANLIFE</Link>
        <nav>
          <Link to="/" >Home</Link>
          <Link to="/about">About</Link>
        </nav>
      </header>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </BrowserRouter>
  )
}
