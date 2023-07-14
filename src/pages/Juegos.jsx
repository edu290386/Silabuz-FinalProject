import InputDecimal from '../components/pigame/InputDecimal'

const Juegos = () => {
  return (
    <div className="flex items-center w-full justify-center">
      <div>
          <div className="bg-white w-[70vw] h-[60vh] shadow-xl rounded-lg items-middle justify-center pt-3">
            <img
                className="h-10 m-auto"
                src="/src/assets/Logo_memory_gaming.png"
                alt="Memory Gaming"
            />
            <div className="relative flex items-center mt-4 justify-center w-full border border-t border-green-300"></div>
            <InputDecimal />
        </div>
      </div>
    </div>
  )
}

export default Juegos