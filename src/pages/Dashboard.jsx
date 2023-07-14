import LoginNavbar from "../components/LoginNavbar"
import { Outlet } from 'react-router-dom'
import NavBar from "../components/Navbar"
import SideBar from "../components/SideBar"
import Footer from "../components/Footer"

const Dashboard = () => {
  return (
    <div>
        <NavBar />
        <div className="flex">
          <SideBar />
          <Outlet />
        </div>
        <Footer />
    </div>
  )
}

export default Dashboard