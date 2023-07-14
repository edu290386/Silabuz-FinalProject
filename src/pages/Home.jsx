import { useNavigate } from 'react-router-dom'

const Home = () => {
  const navigate = useNavigate()
  function initGame ()  {      
    if(localStorage.getItem("user") === null){
      navigate("/login")
    } else {
      navigate("/dashboard/juegos", {state: { logged: true }})
    }
  }
  return (
    <div>
      <div className="relative bg-[image:url(/src/assets/learn-playing.jpg)] mix-blend-difference bg-center h-[50vh] bg-cover">
        <div className="absolute bottom-40 left-20 w-1/3">
          <h2 className=" text-4xl font-bold text-green-500">Desafía tu mente</h2>
          <p className="text-l text-gray-500">
            Explora nuestros desafios interactivos diseñados para ejercitar y mejorar tu capacidad de retención y recuerdo de información
          </p>
        </div>
      </div>
      <div className="mb-20">
        <div className="mt-10 flex justify-center">
          <h2 className="text-3xl font-bold text-gray-600"> Nuestros juegos</h2>
        </div>
          <div className="grid grid-cols-2 gap-1 mt-20">
            <div className="flex justify-center align-middle">
              <img src="/src/assets/pi-logo.png" className="object-contain h-[200px]"></img>
            </div>
            <div className="w-[500px]">
              <h3 className="text-2xl font-bold text-gray-400">Pi Game</h3>
              <p className="text-l text-gray-400 mt-4">
                  En este emocionante juego de adivinanzas, pondrás a prueba tu conocimiento y 
                  habilidades numéricas tratando de adivinar las cifras del misterioso número pi, 
                  desafiando tus límites mentales mientras te sumerges en el fascinante mundo de 
                  los dígitos infinitos.
              </p>
              <button onClick={initGame} className="mt-10 bg-green-400 hover:bg-green-600 text-white font-bold py-2 px-4 rounded-full">
                Iniciar juego
              </button>
            </div>
          </div>
        </div>
      </div>
  )
}

export default Home