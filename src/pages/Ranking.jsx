import { getUsers } from '../services/Services'
import useSWR from 'swr'

const Ranking = () => {
  const userList = useSWR("ApiUsersLogin", getUsers)
  if(userList.error) return <div>error</div>;
  if(userList.isLoading) return <div>Cargando</div>;
  
  const ranking = [...userList.data].sort((a,b) => a.score < b.score ? 1 : -1)
  console.log(userList.data)
  return (
    <div className='my-6' >
      <div className='flex justify-center flex-wrap gap-x-16 gap-y-7'>{ranking.map( (user, index) => (
        <div key={user.id} className="text-center">
          <img
            src={user.avatar}
            className="mx-auto mb-2 w-40 rounded-lg object-cover"
            alt="Avatar" />
          <p className="text-neutral-500 dark:text-neutral-400">Posición: {index+1}</p>
          <h5 className="text-xl font-medium leading-tight capitalize">{user.username}</h5>
          <p className="text-neutral-500 dark:text-neutral-400">Puntuación: {user.score} puntos</p>
          <button
            type="button"
            className="inline-block rounded bg-[#3B71CA] mt-2 px-6 pb-2 pt-2 text-xs font-medium leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]">
            Ver perfil
          </button>
        </div>
   ))}</div>
    </div>
  )
}

export default Ranking
