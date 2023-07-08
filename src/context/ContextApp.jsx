import { createContext, useState, useEffect } from "react"
import { useNavigate } from "react-router-dom"

export const ContextProvider = createContext()

const ContextApp = ({children}) => {
  const [userData, setUserData] = useState({})
  const navigate = useNavigate()
  
  useEffect(() => {
    if (Object.values(userData).length > 0) {
        navigate('/dashboard', {state:{logged: true}, replace: true})
    }} , [userData] )

  return (
    <ContextProvider.Provider value={{userData, setUserData }}>
        {children}
    </ContextProvider.Provider>
  )
}

export default ContextApp