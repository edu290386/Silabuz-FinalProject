import { useState, useContext } from 'react'
import { ContextProvider } from '../context/ContextApp' 
import { getUsers } from '../services/Services'
import useSWR from 'swr'
import Swal from 'sweetalert2'
import { useNavigate } from 'react-router-dom'
import LoadingBar from '../commons/LoadingBar'

const Login = () => {
  const [dataLogin, setDataLogin] = useState({})
  const {setUserData} = useContext(ContextProvider)
  const navigate = useNavigate()
  const userList = useSWR("ApiUsersLogin", getUsers, { refreshInterval: 1000 } )
  if(userList.error) return <div>error</div>;
  if(userList.isLoading) return (
  <div className="flex justify-center h-screen items-center">
    <LoadingBar/>
  </div>
  );

  
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
      navigate("/dashboard", {state: {logged: true}})
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
    <div className="relative flex flex-col justify-center min-h-screen overflow-hidden">
        <div className="w-full p-6 m-auto bg-white rounded-md shadow-xl lg:max-w-xl">
            <h1 className="text-3xl font-semibold text-center text-green-400 uppercase">
                Iniciar sesión
            </h1>
            <form onSubmit={userLogin} className="mt-6">
                <div className="mb-2">
                    <label
                        htmlFor="user"
                        className="block text-sm font-semibold text-gray-800"
                    >
                        Usuario
                    </label>
                    <input
                        type="user"
                        onChange={handleChange}
                        name="username"
                        className="block w-full px-4 py-2 mt-2 text-green-400 bg-white border rounded-md focus:border-green-400 focus:ring-green-300 focus:outline-none focus:ring focus:ring-opacity-40"
                    />
                </div>
                <div className="mb-2">
                    <label
                        htmlFor="password"
                        className="block text-sm font-semibold text-gray-800"
                    >
                        Constraseña
                    </label>
                    <input
                        type="password"
                        name="password"
                        onChange={handleChange}
                        className="block w-full px-4 py-2 mt-2 text-green-400 bg-white border rounded-md focus:border-green-400 focus:ring-green-300 focus:outline-none focus:ring focus:ring-opacity-40"
                    />
                </div>
                <a
                    href="#"
                    className="text-xs text-green-600 hover:underline"
                >
                    ¿Olvidaste tu contraseña?
                </a>
                <div className="mt-6 flex justify-center">
                    <button className="w-1/2 px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-green-400 rounded-full hover:bg-green-600 focus:outline-none focus:bg-green-600">
                        Entrar
                    </button>
                </div>
            </form>
            <div className="relative flex items-center justify-center w-full mt-6 border border-t">
                <div className="absolute px-5 bg-white"></div>
            </div>

            <p className="mt-8 text-xs font-light text-center text-gray-700">
                {" "}
                ¿No tienes una cuenta?{" "}
                <a
                    href="/register"
                    className="font-medium text-green-400 hover:underline"
                >
                    Regístrate
                </a>
            </p>
        </div>
    </div>
  )
}

export default Login