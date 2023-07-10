

const PrintDecimal = ({prueba}) => {
    console.log(prueba)
    return (
        <div>
            <div className='text-green-700 text-2xl'>3. {prueba.map((letter, index)=>(
                <span key={index}>{letter}</span>
             ))}</div>
        </div>
  )
}

export default PrintDecimal