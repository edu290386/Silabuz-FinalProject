import { useState, useContext } from 'react'
import { ContextProvider } from '../context/ContextApp' 
import { getUsers } from '../services/Services'
import useSWR from 'swr'
import Swal from 'sweetalert2'


const Login = () => {
  const [dataLogin, setDataLogin] = useState({})
  const {setUserData} = useContext(ContextProvider)
  const userList = useSWR("ApiUsersLogin", getUsers, { refreshInterval: 1000 } )
  if(userList.error) return <div>error</div>;
  if(userList.isLoading) return <div>Cargando</div>;

  
  const handleChange = (e) => {
    const { name, value} = e.target
    
    setDataLogin({...dataLogin, [name]:value})
  }    

const userLogin = (e) => {
    e.preventDefault()
    const userFind = userList.data.find((user) =>(
      user.username === dataLogin.username && user.password === dataLogin.password)
    )
   
    if (userFind) {
      setUserData({...userFind})
      localStorage.setItem("user", JSON.stringify(userFind))
    } else {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Usuario o password incorrecto  !',
        footer: '<a href="">Por favor vuelva a intentarlo</a>'
      })
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