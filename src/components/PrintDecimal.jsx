import React from 'react'

const PrintDecimal = ({prueba}) => {
    console.log(prueba)
    return (
        <div>
            3. <div className='mx-5 my-2 text-green-700 text-2xl'>3. {prueba.map((letter, index)=>(
                <span key={index}>{letter}</span>
             ))}</div>
        </div>
        
  )
}

export default PrintDecimal