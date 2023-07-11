import { Routes, Route } from 'react-router-dom'
import Home from '../pages/Home'
import HomeRouter from '../pages/HomeRouter'
import Login from '../pages/Login'
import Register from '../pages/Register'
import PrivateRouter from './PrivateRouter'
import Dashboard from '../pages/Dashboard'
import HomeDashboard from '../pages/HomeDashboard'
import Juegos from '../pages/Juegos'
import Ranking from '../pages/Ranking'
import Cart from '../pages/Cart'
import UserRanking from '../pages/UserRanking'

const AppRouter = () => {
  return (
    <Routes>
            <Route path="/" element={<HomeRouter/>}>
                <Route index element={<Home/>} />
                <Route path="login" element={<Login/>} />
                <Route path="register" element={<Register/>} />
            </Route>
            <Route path="/dashboard" element={<PrivateRouter><Dashboard/></PrivateRouter>}>
                <Route index element={<HomeDashboard />} />
                <Route path="juegos" element={<Juegos />}/>
                <Route path="ranking" element={<Ranking />}/>
                <Route path='ranking/:idUser' element={<UserRanking />}/>
                <Route path="Cart" element={<Cart />}/>
            </Route>
        </Routes>
  )
}

export default AppRouter