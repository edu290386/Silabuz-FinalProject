import { Navbar } from '../components/Navbar'
import { Outlet } from 'react-router-dom'

const HomeRouter = () => {
  return (
    <div>
        <Navbar/>
        <Outlet/>
    </div>
  )
}

export default HomeRouter