import { updateUsers } from "../../services/Services";
import { useContext } from 'react'
import { ContextProvider } from '../../context/ContextApp'

const Score = ({newScore}) => {
    let total = newScore*100;
    const {userData} = useContext(ContextProvider)

    if (userData.score < total) {
        updateUsers(userData.id, {score: total})        
    }


  return (
    <div>
        {(newScore) ? <div>Puntuación: {total} puntos</div> : <div></div>}
    </div>
    
  )
}

export default Score