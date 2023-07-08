import {  useContext } from 'react'
import { ContextProvider } from '../context/ContextApp' 

const HomeDashboard = () => {
  const {userData} = useContext(ContextProvider)
  console.log(userData)
    return (
      <div>
          <div>Bievenido {userData.name}</div>
          <article>
            
          </article>
      </div>
      


    )
  }
  
  export default HomeDashboard