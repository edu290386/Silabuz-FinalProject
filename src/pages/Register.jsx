
import { useState, useContext } from 'react'
import { ContextProvider } from '../context/ContextApp' 
import { useNavigate } from 'react-router-dom'
import Swal from 'sweetalert2'

const Register = () => {
  const [dataRegister, setDataRegister] = useState({})
  const { userList, createUser } = useContext(ContextProvider)
  const navigate = useNavigate()

  const handleChange = (e) => {
        setDataRegister({...dataRegister, score:0, [e.target.name]: e.target.value
        })
  };

  const userRegister = (event) => {
    event.preventDefault()
    const repeatedUser = userList.find( (user) => user.username == dataRegister.username)
    if (!repeatedUser) {
      createUser(dataRegister)
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

console.log(userList)

  return (
    <div >
      <h1 className='mt-10 m-5 text-center'>Bienvenido, registrar su nueva cuenta de usuario</h1>
      <div className='flex justify-center align-middle border'>
      <form onSubmit={userRegister} className='flex gap-4 items-end'>
        <div className='my-5'>
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
        </div> 
      </form>
    </div>
    </div>
  )
}

export default Register