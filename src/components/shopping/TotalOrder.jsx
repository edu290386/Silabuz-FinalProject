import { useContext } from 'react'
import { ContextProvider } from '../../context/ContextApp'
import { updateUsers } from "../../services/Services";

const TotalOrder = ({productsCart}) => {
    const {userData} = useContext(ContextProvider)
    const precioTotal = productsCart.map( prods => prods.cantidad * prods.precio ).reduce( (acc, prod) => acc+ prod, 0)
    const vidas = productsCart.map( prods => prods.cantidad * prods.lives).reduce( (acc, prod) => acc+ prod, 0)

    const buyProducts = () => {
        updateUsers(userData.id, {lives: vidas})
    }

  return (
    <div className="h-full flex mt-10">    
        <div className="flex flex-col justify-center overflow-x-auto ">
            <table className="w-auto text-sm text-left text-gray-500 dark:text-gray-400">
                <thead className="text-centertext-xs uppercase bg-gray-100 text-gray-700">
                    <tr>
                        <th scope="col" className="px-6 py-3">
                            Precio Total
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Vidas
                        </th>
                    </tr>
                </thead>
                <tbody>
                    <tr className="bg-white border-b">
                        <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap ">
                            ${precioTotal}
                        </th>
                        <td className="px-6 py-4 text-center">
                            {vidas}
                        </td>
                    </tr>     
                </tbody>
            </table>
            <button className="rounded w-auto bg-green-400 mt-1 mb-1 px-6 pb-2 pt-2 text-xs font-medium text-white w-[140px]" onClick={buyProducts} >Comprar</button>
          </div>
        </div> 
  )
}

export default TotalOrder