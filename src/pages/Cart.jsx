import { AiFillCheckCircle} from "react-icons/ai";
import goldcoin from '../assets/goldcoin.png'
import silvercoin from '../assets/silvercoin.png'
import coppercoin from '../assets/coppercoin.png'
import { useState } from "react";

const Cart = () => {
  const productList = [{productid:1, title:"Moneda de Oro", img:goldcoin, precio:7, lives:3},
                {productid:2, title:"Moneda de Plata", img:silvercoin, precio:5, lives:2},
                {productid:3, title:"Moneda de Cobre", img:coppercoin, precio:3, lives:1}]

  const renderLives = (live) => {
    let checks=[]
    for ( let i=0; i<live;  i++){
      checks.push(<AiFillCheckCircle key={i} className=" text-2xl text-green-500"
       />)
  }
   return checks
  }    
  
  const [productsCart, setProducstCart] = useState([])
  


  const addItems = (product) => {
  
    const existentProduct = productsCart.find(p => p.productid === product.productid)
    if (existentProduct) {
      const numberProduct = {...existentProduct, cantidad:existentProduct.cantidad++}
      const saveProducts = productsCart.map( prod => prod.id === existentProduct.productid ? numberProduct : prod)
      setProducstCart(saveProducts)

    } else {
      const numberProduct = {...product, cantidad:1}
      setProducstCart([... productsCart, numberProduct])
    }
  }
  
  
  const deleteItems = (product) => {
  
    const existentProduct = productsCart.find(p => p.productid === product.productid)
    if (existentProduct) {
      if( existentProduct.cantidad > 0) {
      const numberProduct = {...existentProduct, cantidad:existentProduct.cantidad--}
      const saveProducts = productsCart.map( prod => prod.id === existentProduct.productid ? numberProduct : prod)
      setProducstCart(saveProducts)
      }
      else {
        const filterProduct = productsCart.filter(prods => prods.id !== existentProduct.productid)
        setProducstCart(filterProduct)
      }
    } 
  }
  
  console.log(productsCart)
  const precioTotal = productsCart.map( prods => prods.cantidad * prods.precio ).reduce( (acc, prod) => acc+ prod, 0)
  const vidas = productsCart.map( prods => prods.cantidad * prods.lives).reduce( (acc, prod) => acc+ prod, 0)
 

  return (
    <div className="flex">
      <div className='h-full flex items-center justify-center mt-5'>
        <article className="flex flex-wrap justify-center gap-10 mt-4 text-center">
          { productList.map((product) => (
              <div key={product.productid} className='grid grid-cols-1 grid-rows-2 rounded-lg w-50 max-w-[12rem] h-[20rem]'>
              <section className="mt-2 w-full h-full">
                <img src={product.img} alt="" className="w-full h-full object-contain" />
              </section>
              <section className="mt-2">
                <h1 className="mt-2 text-xl font-bold">{product.title}</h1>
                <div className='mt-2 flex text-lg justify-center'>{renderLives(product.lives)}</div>
                <p className="mt-2 text-lg">$ {product.precio}</p>
                
                <button onClick={() => addItems(product)} className="rounded bg-[#3B71CA] mt-2 mb-2 px-6 pb-2 pt-2 text-xs font-medium text-white w-[140px]">Agregar carrito</button>
                <button className="rounded bg-[#3B71CA] mt-1 mb-1 px-6 pb-2 pt-2 text-xs font-medium text-white w-[140px]" onClick={() => deleteItems(product)} >Eliminar</button>
              </section>
            </div>
          ))}
        </article>
      </div>

    <div className="flex flex-col mx-auto">
      
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
        
    </div>
  )
}

export default Cart