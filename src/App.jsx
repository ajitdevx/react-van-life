
import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from "react-router"
import Home from "./pages/Home/Home"
import About from "./pages/About/About"
import Vans, { loader as vansLoader } from "./pages/Vans/Vans"
import VanDetail, { loader as vanDetailLoader } from "./pages/Vans/VanDetail"
import Layout from "./components/Layout/Layout"

import "./server"
import Dashboard from "./pages/Host/Dashboard"
import Income from "./pages/Host/Income"
import HostVans, { loader as hostVansLoader } from "./pages/Host/Vans"
import HostVanDetail, { loader as hostVanDetailLoader, HostVanInfo, HostVanPricing, HostVanPhoto } from "./pages/Host/VanDetail"
import HostLayout from "./components/Layout/HostLayout"
import Reviews from "./pages/Host/Reviews"
import NotFound from "./pages/NotFound/NotFound"
import Error from "./components/Error"
import Login, { loginLoader } from "./pages/Login/Login"
import { requireAuth } from "./utils"


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route index element={<Home />} />
      <Route path="about" element={<About />} />
      <Route path="vans" element={<Vans />} loader={vansLoader} />
      <Route path="vans/:id" element={<VanDetail />} loader={vanDetailLoader} />

      <Route path="/host" element={<HostLayout />} errorElement={<Error />} loader={requireAuth}>
        <Route index element={<Dashboard />} loader={requireAuth} />
        <Route path="income" element={<Income />} loader={requireAuth} />
        <Route path="vans" element={<HostVans />} loader={hostVansLoader} />

        <Route path="vans/:id" element={<HostVanDetail />} loader={hostVanDetailLoader}>
          <Route index element={<HostVanInfo />} loader={requireAuth} />
          <Route path="pricing" element={<HostVanPricing />} loader={requireAuth} />
          <Route path="photos" element={<HostVanPhoto />} loader={requireAuth} />
        </Route>
        <Route path="reviews" element={<Reviews />} loader={requireAuth} />
      </Route>
      <Route path="login" element={<Login />} loader={loginLoader} />
      <Route path="*" element={<NotFound />} />
    </Route>
  )
)

export default function App() {
  return (
    <RouterProvider router={router} />
  )
}
