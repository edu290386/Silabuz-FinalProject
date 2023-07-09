
import { useState, useContext } from 'react'
import Stars from './Stars'
import PrintDecimal from './printDecimal'
import { ContextProvider } from '../context/ContextApp'
import { updateUsers } from '../services/Services'

const InputDecimal = () => {
    const [decimal, setDecimal] = useState("")
    const pi="1415926535897932384626433832795028841971693993751058209749445923078164062862089986280348253421170679821480865132823066470938446095505822317253594081284811174502841027019385211055596446229489549303819644288109"

    const {userData} = useContext(ContextProvider)

    const DetectNumber = (e) => {
            if (e.target.value == "Enter") return
            if (isNaN(e.target.value)) return
            if (e.target.value == "")return
            let variable = e.target.value
            setDecimal(variable)
            CompareDecimal(variable)
    }

    const [ position, setPosition ] = useState(0)
    const [ goodNumber, setGoodNumber ] = useState([])

    const CompareDecimal = (valor) => {
       if(valor === pi[position]) {
         setPosition(position+1)
         setGoodNumber([...goodNumber, valor])
         setDecimal("")
         console.log("correcto", position)
         const newscore = (position+1)*100
         if (userData.score < newscore) {
          updateUsers(userData.id, {score: newscore})        
        }
       } else {
            setDecimal("")
         console.log("incorrecto", position)
        }
    }
    
  return (
    <div>
        <h1 className='mx-5 my-2'>Pi Game</h1>
        <input className="border-2 rounded-lg mx-5 my-2" onChange={DetectNumber} type="text" value={decimal} name="decimal" placeholder="Escribir decimal de Pi" />
        <PrintDecimal prueba={goodNumber}/>
        <Stars position={position} />
    </div>
    
  )
}

export default InputDecimal