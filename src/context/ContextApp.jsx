import { createContext, useState, useEffect } from "react"


export const ContextProvider = createContext()

const ContextApp = ({children}) => {
  const [userData, setUserData] = useState({})
  

  return (
    <ContextProvider.Provider value={{}}>
        {children}
    </ContextProvider.Provider>
  )
}

export default ContextApp