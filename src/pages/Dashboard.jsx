import LoginNavbar from "../components/LoginNavbar"
import { Outlet } from 'react-router-dom'

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