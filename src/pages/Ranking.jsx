import { getUsers } from '../services/Services'
import { Link } from 'react-router-dom'
import useSWR from 'swr'
import LoadingBar from '../commons/LoadingBar'

const Ranking = () => {
  const userList = useSWR("ApiUsersLogin", getUsers)
  if(userList.error) return <div>error</div>;
  if(userList.isLoading) return (
    <div className="flex justify-center h-screen items-center">
      <LoadingBar/>
    </div>
    );  
  const ranking = [...userList.data].sort((a,b) => a.score < b.score ? 1 : -1)
  
  return (
    <div className="flex items-center w-full justify-center">
      <div className="bg-white w-[70vw] shadow-xl rounded-lg items-middle justify-center pt-3">
        <img
            className="h-10 m-auto"
            src="/src/assets/Logo_memory_gaming.png"
            alt="Memory Gaming"
        />
        <div className="relative flex items-center my-4 justify-center w-full border border-t border-green-300"></div>
        <table className="table-auto w-full align-middle">
          <tbody>
            {ranking.map( (user, index) => (
                <tr className="align-middle border-t border-gray-200 border-solid" key={user.id}>
                  <td className="w-48 text-xl p-5 text-gray-300">{index+1}</td>
                  <td className="w-20">                
                    <img
                      src={user.avatar}
                      className="w-14 rounded-lg "
                      alt="Avatar" />
                  </td>
                  <td className="w-14">
                    <p className="text-l text-gray-500 leading-tight capitalize">{user.username}</p>
                  </td>
                  <td className="px-5">
                  <p className="text-right text-l text-gray-800">{user.score} puntos</p>
                  </td>
                </tr>
            ))}
          </tbody>
        </table>
        {/* <div className='flex justify-center flex-wrap grid grid-cols-4 gap-20'>{ranking.map( (user, index) => (
            <div key={user.id} className="text-center">
              <img
                src={user.avatar}
                className="mx-auto mb-4 w-40 rounded-lg "
                alt="Avatar" />
              <p className="text-neutral-500 dark:text-neutral-400">Posición: {index+1}</p>
              <h5 className="text-xl font-medium leading-tight capitalize">{user.username}</h5>
              <p className="text-neutral-500 dark:text-neutral-400">Puntuación: {user.score} puntos</p>
            </div>
          ))}
        </div> */}
      </div>
    </div>
  )
}

export default Ranking
