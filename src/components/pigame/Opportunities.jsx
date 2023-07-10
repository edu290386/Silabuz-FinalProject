import { AiFillCheckCircle, AiFillCloseCircle } from "react-icons/ai";

const Opportunities = ({opportunities}) => {

    const WrongNumber = () => {
        let checks = []
        for ( let i=3; i-opportunities>0; i--){
            checks.push(<AiFillCheckCircle key={i} className=" text-2xl text-green-500"
             />)
        }
        for ( let i=0; i<opportunities;  i++){
            checks.push(<AiFillCloseCircle key={i} className=" text-2xl text-red-500"
             />)
        }
        return checks
    }
  
 return (
    <div>
        <div className='flex flex-col m-3 justify-center gap-x-5'>
            <div>Oportunidades: ({3-opportunities})</div> 
            <div className="flex justify-center flex-wrap gap-1">{WrongNumber()}</div>
        </div>
    </div>
  )
}

export default Opportunities