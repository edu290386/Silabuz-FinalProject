import { useParams } from 'react-router-dom'
import { useState, useEffect } from 'react'
import {AiOutlineMail} from 'react-icons/ai'

const UserRanking = () => {
  const {idUser} = useParams()
  const url = `https://64a39ad4c3b509573b564f07.mockapi.io/pigame/users/${idUser}`
  const [ userInfo, setUserInfo] = useState({})
  
  const getUser = async () => {
      const response = await fetch(url);
      const data = await response.json();
      setUserInfo(data);
    }

  useEffect(() => {
    getUser();
  }, [])

  return (
    <div className='my-20' >
      <div className='flex justify-center flex-wrap gap-x-16 gap-y-7 w-[300px] m-auto text-center'>
        <div key={userInfo.id} className="text-center">
          <div>
            <h5 className="text-xl font-medium leading-tight">{userInfo.username}</h5>
            <img
              src={userInfo.avatar}
              className="mx-auto mb-2 w-50 rounded-full object-cover"
              alt="Avatar" />
            </div>
            
            <h1 className="text-2xl font-medium leading-tight capitalize">{userInfo.name} {userInfo.lastname}</h1>
            <div className='flex justify-center'>
              <p className="mx-2 text-neutral-500 dark:text-neutral-400"><AiOutlineMail className="text-2xl text-yellow-500"/></p>
              <span className='mx-2'>{userInfo.email}</span>
            </div>
            <span className='mx-2'>{userInfo.score} points</span>
          <div>
          </div>
        </div>
      </div>
    </div>
    
  )
}

export default UserRanking