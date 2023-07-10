import ConfettiCheck from "./Confetti"

const PrintDecimal = ({prueba , stateConfetti}) => {
    console.log(stateConfetti)
    
    return (
        <div>
            <div className='text-green-700 text-2xl mb-3'>3. {prueba.map((letter, index)=>(
                <span key={index}>{letter}</span>
             ))}</div>
            <div>
                { stateConfetti && <ConfettiCheck />}
            </div>
        </div>
  )
}

export default PrintDecimal