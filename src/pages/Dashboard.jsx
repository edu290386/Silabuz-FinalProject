import LoginNavbar from "../components/LoginNavbar"
import { Outlet } from 'react-router-dom'
import NavBar from "../components/Navbar"
import SideBar from "../components/SideBar"

const Dashboard = () => {
  return (
    <div>
        <NavBar />
        <div className="flex">
          <SideBar />
          <Outlet />
        </div>
    </div>
  )
}

export default Dashboard