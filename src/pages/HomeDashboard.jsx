import {  useContext } from 'react'
import { ContextProvider } from '../context/ContextApp' 

const HomeDashboard = () => {
  const {userData} = useContext(ContextProvider)
  console.log(userData)
    return (          
    <div className="flex items-center h-[90vh] w-full justify-center">
      <div>
          <div className="bg-white w-[60vw] shadow-xl rounded-lg items-middle justify-center pt-3">
            <img
                className="h-10 m-auto"
                src="/src/assets/Logo_memory_gaming.png"
                alt="Memory Gaming"
            />
            <div className="relative flex items-center mt-4 justify-center w-full border border-t border-green-300"></div>
            <div className="grid grid-cols-2 gap-1">
               <div>
                  <table className="text-l my-3 mx-3">
                      <tbody><tr>
                          <td className="px-2 py-2 text-gray-500 font-semibold">Username</td>
                          <td className="px-2 py-2">{userData.username}</td>
                      </tr>
                      <tr>
                          <td className="px-2 py-2 text-gray-500 font-semibold">Nombre</td>
                          <td className="px-2 py-2">{userData.name}</td>
                      </tr>
                      <tr>
                          <td className="px-2 py-2 text-gray-500 font-semibold">Apellidos</td>
                          <td className="px-2 py-2">{userData.lastname}</td>
                      </tr>
                      <tr>
                          <td className="px-2 py-2 text-gray-500 font-semibold">Score</td>
                          <td className="px-2 py-2">{userData.score}</td>
                      </tr>
                      <tr>
                          <td className="px-2 py-2 text-gray-500 font-semibold">Email</td>
                          <td className="px-2 py-2">{userData.email}</td>
                      </tr>
                  </tbody></table>
              </div>
              <div className="bg-gray-50 py-3">
                <div className="photo-wrapper p-2">
                    <img className="w-52 h-52 rounded-full mx-auto" src={userData.avatar} alt="John Doe"></img>
                </div>
                <div className="p-2">
                    <h3 className="text-center text-xl text-gray-900 font-medium leading-8">{userData.username}</h3>
                    <div className="text-center text-gray-400 text-xs font-semibold">
                        <p>Plata</p>
                    </div>
                </div>
              </div>
            </div>
          </div>
      </div>
    </div>

    )
  }
  
  export default HomeDashboard