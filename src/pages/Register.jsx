
import { useState,  useContext } from 'react'
import { ContextProvider } from '../context/ContextApp' 
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

const options = [
  { value: Avatar1, label: 'Avatar 1' },
  { value: Avatar2, label: 'Avatar 2' },
  { value: Avatar3, label: 'Avatar 3' },
  { value: Avatar4, label: 'Avatar 4' },
  { value: Avatar5, label: 'Avatar 5' },
]

const Register = () => {
  const [dataRegister, setDataRegister] = useState({})
  const navigate = useNavigate()
  
  const {data, isLoading, error} = useSWR("ApiUsers", getUsers)
  if(error) return <div>error</div>;
  if(isLoading) return <div>Cargando</div>;
  console.log(data)
  
  const handleChange = (e) => {
        setDataRegister({...dataRegister, score:0, [e.target.name]: e.target.value
        })
  };

  const handleSelectChange = (e) => {
    console.log(e)
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
          <Select options={options} 
            onChange={handleSelectChange} name="avatar"/>
          <p className='my-6'>Tu avatar: </p>
            <div className='flex justify-center'>
                <img className=' rounded-lg my-3 w-[150px]' src={dataRegister.avatar} />
            </div>   
        </article>
        </div>
          
      </form>
    </div>
    </div>
  )
}

export default Register