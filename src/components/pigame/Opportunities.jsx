import { AiFillCheckCircle } from "react-icons/ai";

const Opportunities = ({opportunities}) => {
    console.log(opportunities)
    const WrongNumber = () => {
        let checks = []
        for ( let i=3; i-opportunities>0; i--){
            checks.push(<AiFillCheckCircle key={i} className=" text-2xl text-green-500"
             />)
        }
        return checks
    }
  
 return (
    <div>
        <div className='flex gap-x-5'>
            <div>Oportunidades: ({3-opportunities})</div> 
            <div className="flex">{WrongNumber()}</div>
        </div>
    </div>
  )
}

export default Opportunities