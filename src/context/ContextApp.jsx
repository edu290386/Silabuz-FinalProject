import { createContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export const ContextProvider = createContext();

const ContextApp = ({ children }) => {
  const [userData, setUserData] = useState({});
  const navigate = useNavigate();
  const token = localStorage.getItem("user");
  console.log(token);

 

  useEffect(() => {
    if (token) {
      setUserData(JSON.parse(token));
      navigate("/dashboard", { state: { logged: true }, replace: true });
    } else {
      navigate("/login", { state: { logged: false } });
    }
  }, [token]);


  useEffect(() => {
    if (token !== null) {
      const eventList = [
        "mousemove",
        "mousedown",
        "onclick",
        "keydown",
        "scroll",
      ];

      let timeId
      const activeTime = () => {
        clearTimeout(timeId)
        timeId = setTimeout(() => {
          localStorage.removeItem("user")
          navigate("/login")
        }, 40000)
      }
      
      eventList.forEach((event) => {
        document.addEventListener(event, activeTime);
      });
      activeTime()
    }
  }, [token]);



  return (
    <ContextProvider.Provider value={{ userData, setUserData }}>
      {children}
    </ContextProvider.Provider>
  );
};

export default ContextApp;
