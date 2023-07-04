import { createContext, useState, useEffect } from "react"


export const ContextProvider = createContext()

const ContextApp = ({children}) => {
  const [ userList, setUserlist] = useState([])
  const url = `https://64a39ad4c3b509573b564f07.mockapi.io/pigame/users`
  
  const getUsers = async () => {
  try {
    const response = await fetch(url);
    const data = await response.json();
    setUserlist(data);
    return data;
  } catch (error) {
    console.log(error);
  }
};

  const createUser = async (body) => {
    try {
      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify(body),
      });
      const data = await response.json();
      return data;
    } catch (error) {
      console.log(error);
    }
  }

  console.log(userList)

useEffect(() => {
  getUsers()
},[])
  

  return (
    <ContextProvider.Provider value={{userList, createUser}}>
        {children}
    </ContextProvider.Provider>
  )
}

export default ContextApp