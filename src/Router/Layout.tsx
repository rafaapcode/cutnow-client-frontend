import { Outlet } from "react-router-dom"
import Header from "../components/Header/Header"

const Layout = () => {
  return (
    <div className="h-screen container mx-auto">
      <Header />
      <div className="w-full">
        <Outlet />
      </div>
    </div>
  )
}

export default Layout