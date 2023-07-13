import { createContext, useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";


export const ContextProvider = createContext();

const ContextApp = ({ children }) => {
  const [userData, setUserData] = useState({});
  const navigate = useNavigate();
  const token = localStorage.getItem("user");
  console.log(token);

 const {pathname} = useLocation();
 console.log(pathname);
 

  useEffect(() => {
    if (token) {
      setUserData(JSON.parse(token));
      navigate(pathname, { state: { logged: true }, replace: true });
    } else {
      navigate(pathname, { state: { logged: false } });
    }
  }, []);


  // useEffect(() => {
  //   if (token !== null) {
  //     const eventList = [
  //       "mousemove",
  //       "mousedown",
  //       "onclick",
  //       "keydown",
  //       "scroll",
  //     ];

  //     let timeId
  //     const activeTime = () => {
  //       clearTimeout(timeId)
  //       timeId = setTimeout(() => {
  //         localStorage.removeItem("user")
  //         navigate("/login")
  //       }, 40000)
  //     }
      
  //     eventList.forEach((event) => {
  //       document.addEventListener(event, activeTime);
  //     });
  //     activeTime()
  //   }
  // }, [token]);



  return (
    <ContextProvider.Provider value={{ userData, setUserData }}>
      {children}
    </ContextProvider.Provider>
  );
};

export default ContextApp;
