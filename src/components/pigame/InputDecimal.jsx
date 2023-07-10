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
    
    const compareDecimal = (valor) => {
      if(valor === pi[position]) {
        setPosition(position+1)
        setGoodNumber([...goodNumber, valor])
        setDecimal("")
        } else {
          setBadNumber(badNumber+1)
          setDecimal("")
      }
    }
    
  return (
    <div className='mx-5 my-2'>
        <h1>Pi Game</h1>
        <input className="border-2 rounded-lg" onChange={detectNumber} type="text" value={decimal} name="decimal" placeholder="Escribir decimal de Pi" />
        <PrintDecimal prueba={goodNumber}/>
        <Stars position={position} />
        <Opportunities opportunities={badNumber}/>
        <Score newScore={position}/>
    </div>
    
  )
}

export default InputDecimal