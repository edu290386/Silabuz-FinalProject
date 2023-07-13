import { useState } from 'react'
import Stars from './Stars'
import PrintDecimal from './PrintDecimal'
import Score from './Score'
import Opportunities from './Opportunities'

const InputDecimal = () => {
    const [decimal, setDecimal] = useState("")
    const pi="1415926535897932384626433832795028841971693993751058209749445923078164062862089986280348253421170679821480865132823066470938446095505822317253594081284811174502841027019385211055596446229489549303819644288109"

    const detectNumber = (e) => {
            if (e.target.value == "Enter") return
            if (isNaN(e.target.value)) return
            if (e.target.value == "")return
            let variable = e.target.value
            setDecimal(variable)
            compareDecimal(variable)
    }

    const [ position, setPosition ] = useState(0)
    const [ goodNumber, setGoodNumber ] = useState([])
    const [ badNumber, setBadNumber ] = useState(0)
    const [ stateConfetti, setStateConfetti] = useState(false)
    const compareDecimal = (valor) => {
      if(valor === pi[position]) {
        setPosition(position+1)
        setGoodNumber([...goodNumber, valor])
        setDecimal("")
        setStateConfetti(true)
      } else {
        setBadNumber(badNumber+1)
        setDecimal("")
        setStateConfetti(false)
      }
    }

    const restartGame = () => {
      setPosition(0)
      setDecimal("")
      setBadNumber(0)
      setGoodNumber([])
    }


  return (
      <div className='mt-20 flex items-center justify-center'>
        <div className='rounded-xl border border-gray-200 w-[40%] flex flex-col text-center '>
          <h1 className='text-3xl mt-4'>Pi Game</h1>
          <div className='flex justify-center'>
            { (badNumber < 3) ? <input className="bg-white focus:outline-none  border border-gray-400 rounded-lg my-5 py-2 px-4 block w-[400px]" onChange={detectNumber} type="tel" value={decimal} name="decimal" placeholder="Escribir decimal de Pi" /> : <div className='my-2'></div>}
          </div>
          <PrintDecimal prueba={goodNumber} stateConfetti={stateConfetti}/>
          <div className='flex flex-col justify-center items-center'>
            <Stars position={position} />
            <Opportunities opportunities={badNumber} />
            <Score newScore={position}/>
            {(badNumber < 3) ? <div className='my-2'></div> : <button onClick={restartGame}
              type="button"
              className="rounded bg-[#3B71CA] mt-6 mb-6 px-6 pb-2 pt-2 text-xs font-medium text-white w-[200px]">
            Reiniciar juego
            </button>}
          </div>
          
          
        </div>
      </div>
  )
}

export default InputDecimal