import { AiFillCheckCircle} from "react-icons/ai";
import goldcoin from '../assets/goldcoin.png'
import silvercoin from '../assets/silvercoin.png'
import coppercoin from '../assets/coppercoin.png'
import { useState } from "react";
import DetailOrder from "../components/shopping/DetailOrder";
import TotalOrder from "../components/shopping/TotalOrder";

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
  
 

  return (
    <div className="flex w-full justify-center items-center flex-col">
      <div className='w-auto flex items-center justify-center mb-20'>
        <article className="flex flex-wrap justify-center gap-10 mt-4 text-center">
          { productList.map((product) => (
              <div key={product.productid} className='grid grid-cols-1 grid-rows-2 rounded-lg w-50 max-w-[12rem] h-[20rem]'>
              <section className="mt-2 w-full">
                <img src={product.img} alt="" className="w-full h-full object-contain" />
              </section>
              <section className="mt-2">
                <h1 className="mt-2 text-xl font-bold">{product.title}</h1>
                <div className='mt-2 flex text-lg justify-center'>{renderLives(product.lives)}</div>
                <p className="mt-2 text-lg">$ {product.precio}</p>
                <button onClick={() => addItems(product)} className="rounded bg-green-400 mt-2 mb-2 px-6 pb-2 pt-2 text-xs font-medium text-white w-[140px]">Agregar carrito</button>
                <button className="rounded bg-green-400 mt-1 mb-1 px-6 pb-2 pt-2 text-xs font-medium text-white w-[140px]" onClick={() => deleteItems(product)} >Eliminar</button>
              </section>
            </div>
          ))}
        </article>
      </div>

      <div className="flex flex-col grid grid-cols-2 gap-16 mx-auto">
        <DetailOrder productsCart={productsCart}/>    
        <TotalOrder productsCart={productsCart}/>
      </div> 

    </div>
  )
}

export default Cart