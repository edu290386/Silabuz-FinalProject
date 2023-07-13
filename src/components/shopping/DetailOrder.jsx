import React from 'react'

const DetailOrder = ({productsCart}) => {
    

  return (
    <div>
        <div className="h-full flex flex-col mx-auto mt-10">    
        <div className="relative overflow-x-auto ">
            <h1 className="w-full text-sm text-left dark:text-gray-400 mb-5">Detalle de Compra</h1>
            <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                <thead className="text-centertext-xs text-white uppercase bg-[#3B71CA] dark:bg-gray-700 dark:text-gray-400">
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
                    <tr key={prod.id} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                        <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
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