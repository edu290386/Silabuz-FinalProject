import { getUsers } from '../services/Services'
import { Link } from 'react-router-dom'
import useSWR from 'swr'

const Ranking = () => {
  const userList = useSWR("ApiUsersLogin", getUsers)
  if(userList.error) return <div>error</div>;
  if(userList.isLoading) return <div>Cargando</div>;
  
  const ranking = [...userList.data].sort((a,b) => a.score < b.score ? 1 : -1)
  
  return (
    <div className='my-2' >
      <div className='flex justify-center flex-wrap gap-x-16 gap-y-7 '>{ranking.map( (user, index) => (
        <div key={user.id} className="text-center ">
          <Link state={{logged:true}} to={`/dashboard/ranking/${user.id}`}>
          <img
            src={user.avatar}
            className="mx-auto w-32 rounded-full object-contain"
            alt="Avatar" />
          </Link>
          <h5 className="text-xl font-medium leading-tight capitalize">{user.username}</h5>
          <p className="text-neutral-500 dark:text-neutral-400 text-xs font-semibold">Posición: {index+1}</p>
          <p className="text-neutral-500 dark:text-neutral-400 text-xs">Puntuación: {user.score} puntos</p>
          <Link state={{logged:true}} to={`/dashboard/ranking/${user.id}`}>
            <button
              type="button"
              className="inline-block rounded bg-[#3B71CA] mt-1 px-6 pb-2 pt-2 text-xs font-medium text-white ">
              Ver perfil
            </button>
          </Link>
        </div>
   ))}</div>
    </div>
  )
}

export default Ranking
