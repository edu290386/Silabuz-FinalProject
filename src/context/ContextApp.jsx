import { createContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export const ContextProvider = createContext();

const ContextApp = ({ children }) => {
  const [userData, setUserData] = useState({});
  const navigate = useNavigate();
  const token = localStorage.getItem("user");
  console.log(token);

  const [activeTime, setActiveTime] = useState(null)

  useEffect(() => {
    if (token) {
      setUserData(JSON.parse(token));
      navigate("/dashboard", { state: { logged: true }, replace: true });
    } else {
      navigate("/login", { state: { logged: false } });
    }
  }, [token]);

  useEffect(() => {})


  return (
    <ContextProvider.Provider value={{ userData, setUserData }}>
      {children}
    </ContextProvider.Provider>
  );
};

export default ContextApp;
