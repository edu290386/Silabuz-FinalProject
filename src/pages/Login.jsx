import { useState, useContext } from 'react'
import { ContextProvider } from '../context/ContextApp' 

const Login = () => {
  const { userList } = useContext(ContextProvider)


  return (
    <div>
      { userList ? 
        userList.map( (user) => (
          <div key={user.id}>{user.id} {user.username}</div>
        )) : <div>Cargando ... </div>
      }
    </div>
  )
}

export default Login