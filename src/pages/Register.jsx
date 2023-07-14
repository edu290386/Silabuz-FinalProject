
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Swal from 'sweetalert2'
import { getUsers, createUsers } from '../services/Services'
import useSWR from 'swr'
import Select from 'react-select'
import Avatar1 from '../assets/Avatar1.webp'
import Avatar2 from '../assets/Avatar2.webp'
import Avatar3 from '../assets/Avatar3.webp'
import Avatar4 from '../assets/Avatar4.webp'
import Avatar5 from '../assets/Avatar5.webp'
import LoadingBar from '../commons/LoadingBar'

const options = [
  { value:Avatar1, label:'Avatar 1' },
  { value:Avatar2, label:'Avatar 2' },
  { value:Avatar3, label:'Avatar 3' },
  { value:Avatar4, label:'Avatar 4' },
  { value:Avatar5, label:'Avatar 5' },
]

const Register = () => {
  const [dataRegister, setDataRegister] = useState({avatar: Avatar1, lives:0})
  const navigate = useNavigate()
  const userList = useSWR("ApiUsersLogin", getUsers, { refreshInterval: 1000 } )
  const {data, isLoading, error} = useSWR("ApiUsers", getUsers)
  if(error) return <div>error</div>;
  if(userList.isLoading) return (
    <div className="flex justify-center h-screen items-center">
      <LoadingBar/>
    </div>
    ); 
  
  const handleChange = (e) => {
        setDataRegister({...dataRegister, score:0, [e.target.name]: e.target.value
        })
  };

  const handleSelectChange = (e) => {
    setDataRegister({...dataRegister, 'avatar': e.value})
  }

  const userRegister = (e) => {
    e.preventDefault()
    const repeatedUser = data.find( (user) => user.username == dataRegister.username)
    if (!repeatedUser) {
      createUsers(dataRegister)
      navigate('/login')
    } else {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Usuario existente!',
        footer: '<a href="">Por favor ingrese otro usuario</a>'
      })
    }
};

console.log(Avatar2)

  return (
    <div className="relative flex flex-col justify-center min-h-screen overflow-hidden">
        <div className="w-full p-6 m-auto bg-white rounded-md shadow-xl lg:max-w-xl">
            <h1 className="text-3xl font-semibold text-center text-green-400 uppercase">
                Nuevo usuario
            </h1>
            <form onSubmit={userRegister} className="mt-6">
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
                <div className="relative flex items-center justify-center w-full mt-6 border border-t">
                    <div className="absolute px-5 bg-white"></div>
                </div>

                <div className="mb-2">
                    <label
                        htmlFor="name"
                        className="block text-sm font-semibold text-gray-800"
                    >
                        Nombre
                    </label>
                    <input
                        type="text"
                        name="name"
                        onChange={handleChange}
                        className="block w-full px-4 py-2 mt-2 text-green-400 bg-white border rounded-md focus:border-green-400 focus:ring-green-300 focus:outline-none focus:ring focus:ring-opacity-40"
                    />
                </div>
                <div className="mb-2">
                    <label
                        htmlFor="last_name"
                        className="block text-sm font-semibold text-gray-800"
                    >
                        Apellidos
                    </label>
                    <input
                        type="text"
                        name="last_name"
                        onChange={handleChange}
                        className="block w-full px-4 py-2 mt-2 text-green-400 bg-white border rounded-md focus:border-green-400 focus:ring-green-300 focus:outline-none focus:ring focus:ring-opacity-40"
                    />
                </div>
                <div className="mb-2">
                    <label
                        htmlFor="email"
                        className="block text-sm font-semibold text-gray-800"
                    >
                        Email
                    </label>
                    <input
                        type="email"
                        name="email"
                        onChange={handleChange}
                        className="block w-full px-4 py-2 mt-2 text-green-400 bg-white border rounded-md focus:border-green-400 focus:ring-green-300 focus:outline-none focus:ring focus:ring-opacity-40"
                    />
                </div>
                <div className="mt-6 flex justify-center">
                    <button className="w-1/2 px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-green-400 rounded-full hover:bg-green-600 focus:outline-none focus:bg-green-600">
                        Registrarse
                    </button>
                </div>
            </form>
        </div>
    </div>
  )
}

export default Register