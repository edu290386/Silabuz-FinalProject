import LoginNavbar from "../components/LoginNavbar"
import { Outlet } from 'react-router-dom'

const Dashboard = () => {
  return (
    <div>
        <LoginNavbar />
        <Outlet />
    </div>
    
  )
}

export default Dashboard