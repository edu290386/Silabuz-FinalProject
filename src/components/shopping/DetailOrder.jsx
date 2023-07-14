
const DetailOrder = ({productsCart}) => {
    

  return (
    <div>
        <div className="h-full flex flex-col mx-auto mt-10">    
        <div className="relative overflow-x-auto ">
            <h1 className="w-full text-bold text-left dark:text-gray-600 mb-5">Detalle de Compra</h1>
            <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                <thead className="text-centertext-xs uppercase bg-gray-100 text-gray-700">
                    <tr>
                        <th scope="col" className="px-6 py-3">
                            Producto
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Cantidad
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Precio
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {productsCart.map(prod =>
                    <tr key={prod.id} className="bg-white border-b text-gray-900">
                        <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                            {prod.title}
                        </th>
                        <td className="px-6 py-4 text-center">
                            {prod.cantidad}
                        </td>
                        <td className="px-6 py-4 text-center">
                            ${prod.precio}
                        </td>
                    </tr> )}     
                </tbody>
            </table>
          </div>
        </div>

    </div>
  )
}

export default DetailOrder