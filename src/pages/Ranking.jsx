import {  useContext } from 'react'
import { ContextProvider } from '../context/ContextApp' 

const Ranking = () => {
  const {userData} = useContext(ContextProvider)
  console.log(userData)

  return (
    <div>Ranking</div>
  )
}

export default Ranking