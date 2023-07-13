

const TotalOrder = ({productsCart}) => {

    const precioTotal = productsCart.map( prods => prods.cantidad * prods.precio ).reduce( (acc, prod) => acc+ prod, 0)
    const vidas = productsCart.map( prods => prods.cantidad * prods.lives).reduce( (acc, prod) => acc+ prod, 0)

  return (
    <div className="h-full flex mt-10">    
        <div className="relative overflow-x-auto ">
            <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                <thead className="text-centertext-xs text-white uppercase bg-[#3B71CA] dark:bg-gray-700 dark:text-gray-400">
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
                    <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                        <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                            ${precioTotal}
                        </th>
                        <td className="px-6 py-4 text-center">
                            {vidas}
                        </td>
                    </tr>     
                </tbody>
            </table>
          </div>
        </div> 
  )
}

export default TotalOrder