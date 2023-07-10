
import {AiFillStar} from 'react-icons/ai'


const Stars = ({position}) => {
    const CorrectNumber = () => {
        let stars = []
        for( let i=0; i<position; i++){
            stars.push(<AiFillStar key={i} className="text-2xl text-yellow-500"/>)        
        }
        return stars
    }

  return (
        <div>
            <div>Aciertos:   ({position})</div>
            <div className='flex flex-wrap justify-center'>{CorrectNumber()}</div>
        </div>
  )
}

export default Stars