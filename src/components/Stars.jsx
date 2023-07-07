import React from 'react'
import {AiFillStar} from 'react-icons/ai'


const Stars = ({position}) => {
    const CorrectNumber = () => {
        let stars = []
        for( let i=0; i<position; i++){
            stars.push(<AiFillStar key={i} className=" text-2xl text-yellow-500" />)        
        }
        return stars
    }



  return (
    <div className='mx-5 my-2'>
        {position}
        <div className='flex'>
            {CorrectNumber()}
        </div>
        
    </div>
  )
}

export default Stars