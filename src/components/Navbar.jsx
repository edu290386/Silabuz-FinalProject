import { Link } from 'react-router-dom'
import Logo from '../assets/math-pi.svg'

export const Navbar = () => {
  return (
    
        <div className='max-w-[1200px] mx-auto'>
            <article className='max-w-[1200px] mx-auto flex justify-between py-4'>
                <span><img className='w-[25px]' src={Logo} alt="" /></span>
                <ul className='flex gap-4'>
                    <li>
                        <Link to={'/'} className='m-2 px-3 py-1 bg-lime-300 rounded-lg'>
                            Home
                        </Link>
                    </li>
                    <li>
                        <Link to={'/login'} className='m-2 px-3 py-1 bg-lime-300 rounded-lg'>
                            Login
                        </Link>
                    </li>
                    <li>
                        <Link to={'/register'} className='m-2 px-3 py-1 bg-lime-300 rounded-lg'>
                            Register
                        </Link>
                    </li>
                </ul>
            </article>
        </div>
    
    
  )
}
