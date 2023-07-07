import { useState, useContext } from 'react'
import { ContextProvider } from '../context/ContextApp' 

const Login = () => {
  const [dataLogin, setDataLogin] = useState({})
  const { userList } = useContext(ContextProvider)

  const handleChange = (e) => {
    const { name, value} = e.target
    setDataLogin({...dataLogin, [name]:value})
  }    

  const userLogin = (e) => {
    e.preventDefault()
    const userFinded = userList.find((user) => user.username === edataLogin.username && user.password === edataLogin.password)
    if(userFinded){
      set
    }

  }
 
  return (
    <div>
        <h1>Colocar sus credenciales</h1>
        <form onSubmit={userLogin} className='flex gap-4 items-end'>
            <label className='flex flex-col'>
                <span>Usuario</span>
                <input onChange={handleChange} name="username" type="text" className='border-2 rounded-sm'/>
            </label>
            <label className="flex flex-col">
                <span>Password</span>
                <input onChange={handleChange} name="password" type="password" className='border-2 rounded-sm' />
            </label>
            <button className="bg-gray-200 rounded-sm px-2 py-0.5 w-max h-max">
                Iniciar sesión
            </button>
        </form>
    </div>
  )
}

export default Login