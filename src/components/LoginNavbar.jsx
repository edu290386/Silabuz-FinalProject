import { Link, useNavigate } from 'react-router-dom'
import Logo from '../assets/math-pi.svg'
import { ContextProvider } from '../context/ContextApp'
import {  useContext } from 'react'


const DashboardNavbar = () => {
    const {userData} = useContext(ContextProvider)
    const navigate = useNavigate()
    
    const closeSession = () => {
        navigate("/")
        localStorage.removeItem("user")
    }

  return (

    <div className='max-w-[1200px] mx-auto'>
        <article className='max-w-[1200px] mx-auto flex justify-between py-4'>
            <span><img className='w-[25px]' src={Logo} alt="" /></span>
            <ul className='flex gap-4'>
                <li className='flex align-middle'>
                    <Link state={{logged: true}} to={'/dashboard'} className='mx-3 my-1 px-3 py-1 bg-lime-300 rounded-lg'>
                        Home
                    </Link>
                </li>
                <li className='flex align-middle'>
                    <Link state={{logged: true}} to={'/dashboard/juegos'} className='mx-3 my-1 px-3 py-1 bg-lime-300 rounded-lg'>
                        Juegos
                    </Link>
                </li>
                <li className='flex align-middle'>
                    <Link state={{logged: true}} to={'/dashboard/ranking'} className='mx-3 my-1 px-3 py-1 bg-lime-300 rounded-lg'>
                        Ranking
                    </Link>
                </li>
                <li className='flex align-middle'>
                    <Link state={{logged: true}} to={'/dashboard/cart'} className='mx-3 my-1 px-3 py-1 bg-lime-300 rounded-lg'>
                        Tienda
                    </Link>
                </li>
                <li className='flex align-middle'>
                        <img src={userData.avatar} className='w-[40px] rounded-full mx-3' alt="" />
                        <p className='pt-2 font-semibold'>{userData.username}</p>
                </li>
                <button onClick={closeSession} className='mx-3 my-1 px-3 py-1 bg-lime-300 rounded-lg'>Salir</button>
            </ul>
        </article>
    </div>

  )
}

export default DashboardNavbar