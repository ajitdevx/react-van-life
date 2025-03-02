
import { BrowserRouter, Routes, Route } from "react-router"
import Home from "./pages/Home/Home"
import About from "./pages/About/About"
import Vans from "./pages/Vans/Vans"
import VanDetail from "./pages/Vans/VanDetail"
import Layout from "./components/Layout/Layout"

import "./server"
import Dashboard from "./pages/Host/Dashboard"
import Income from "./pages/Host/Income"
import HostVans from "./pages/Host/Vans"
import HostLayout from "./components/Layout/HostLayout"

export default function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="vans" element={<Vans />} />
          <Route path="vans/:id" element={<VanDetail />} />


          <Route path="/host" element={<HostLayout />}>
            <Route index element={<Dashboard />} />
            <Route path="income" element={<Income />} />
            <Route path="vans" element={<HostVans />} />
          </Route>
        </Route>


      </Routes>
    </BrowserRouter>
  )
}
