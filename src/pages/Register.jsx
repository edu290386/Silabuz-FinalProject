
import { useState,  useContext } from 'react'
import { ContextProvider } from '../context/ContextApp' 
import { useNavigate } from 'react-router-dom'
import Swal from 'sweetalert2'
import { getUsers, createUsers } from '../services/Services'
import useSWR from 'swr'
import { MyComponent } from '../components/SelectInput'

const Register = () => {
  const [dataRegister, setDataRegister] = useState({})
  const navigate = useNavigate()
  
  const {data, isLoading} = useSWR("ApiUsers", getUsers)
  // if(isLoading) return <div>Cargando</div>
  


  
  
  const handleChange = (e) => {
        setDataRegister({...dataRegister, score:0, [e.target.name]: e.target.value
        })
  };

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

  return (
    <div >
      <h1 className='mt-10 m-5 text-center'>Bienvenido, registrar su nueva cuenta de usuario</h1>
      <div className='flex justify-center align-middle border'>
      <form onSubmit={userRegister} className='flex gap-4 items-end'>
        <div className='flex gap-x-40'>
        <article className='w-[300px]'>
          <label className='flex flex-col mx-5'>
              <span>Usuario</span>
              <input onChange={handleChange} name="username" type="text" className='border-2 rounded-lg'/>
          </label>
          <label className="flex flex-col mx-5 my-2">
              <span>Password</span>
              <input onChange={handleChange} name="password" type="password" className='border-2 rounded-lg' />
          </label>
          <label className='flex flex-col mx-5 my-2'>
              <span>Nombre</span>
              <input onChange={handleChange} name="name" type="text" className='border-2 rounded-lg'/>
          </label>
          <label className="flex flex-col mx-5 my-2">
              <span>Apellido</span>
              <input onChange={handleChange} name="lastname" type="text" className='border-2 rounded-lg' />
          </label>
          <label className="flex flex-col mx-5 my-2">
              <span>Email</span>
              <input onChange={handleChange} name="email" type="text" className='border-2 rounded-lg' />
          </label>
          <button className="rounded-lg m-5 px-2 py-0.5 w-max h-max bg-lime-300 ">
            Registrar
          </button>
        </article>
        <article className='w-[250px] mx-5 my-6'>
          <MyComponent className="mx-5 my-6"/>
        </article>
        </div>
          
      </form>
    </div>
    </div>
  )
}

export default Register