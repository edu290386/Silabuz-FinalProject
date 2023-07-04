import { Routes, Route } from 'react-router-dom'
import Home from '../pages/Home'
import HomeRouter from '../pages/HomeRouter'
import Login from '../pages/Login'
import Register from '../pages/Register'

const AppRouter = () => {
  return (
    <Routes>
            <Route path="/" element={<HomeRouter/>}>
                <Route index element={<Home/>} />
                <Route path="login" element={<Login/>} />
                <Route path="register" element={<Register/>} />
            </Route>
        </Routes>
  )
}

export default AppRouter