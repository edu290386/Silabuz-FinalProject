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
    console.log("existe", existentProduct)
    if (existentProduct) {
      const numberProduct = {...existentProduct, cantidad:existentProduct.cantidad++}
      const saveProducts = productsCart.map( prod => prod.id === existentProduct.productid ? numberProduct : prod)
      setProducstCart(saveProducts)

    } else {
      const numberProduct = {...product, cantidad:1}
      setProducstCart([... productsCart, numberProduct])
      
    }
   
  }
  console.log(productsCart)
    

  return (
    <div className='h-full flex items-center justify-center mt-20'>
      <article className="flex flex-wrap justify-center gap-10 mt-4 text-center">
        { productList.map((product, index) => (
            <div key={product.productid} className='grid grid-cols-1 grid-rows-2 border-2 rounded-lg w-64 max-w-[16rem] h-[20rem]'>
            <section className="mt-2 w-full h-full">
              <img src={product.img} alt="" className="w-full h-full object-contain" />
            </section>
            <section className="mt-2">
              <h1 className="mt-2 text-xl font-bold">{product.title}</h1>
              <div className='mt-2 flex text-lg justify-center'>{renderLives(product.lives)}</div>
              <p className="mt-2 text-lg">$ {product.precio}</p>
              {(productsCart.length !== 0) ? productsCart[index].cantidad : <div>Funciona</div> }
              <button onClick={() => addItems(product)}>Agregar carrito</button>
              <button>Eliminar</button>
            </section>
          </div>
        ))}
      </article>

    </div>
  )
}

export default Cart