import React, { useState } from "react"
import Basket from "./components/Basket";
import Header from "./components/Header";
import Main from "./components/Main";
import data from "./components/data";


function App(){
   const {products} = data;
   const [cartItems,setCartItems]=useState([]);

   function onAdd(product){
      const exist=cartItems.find((x)=>x.id===product.id);
      if(exist) {
         setCartItems(
            cartItems.map(x=>x.id===product.id ? {...exist,qty:exist.qty+1}:x)
         )
      } else{
         setCartItems([...cartItems,{...product,qty: 1}])
      }
   }
   
   function onRemove(product){
      const exist=cartItems.find((x)=>x.id===product.id)
      if(exist.qty===1){
         setCartItems(cartItems.filter((x)=>x.id!==product.id))
      } else{
         setCartItems(
            cartItems.map((x)=>x.id===product.id ? {...exist,qty:exist.qty-1}:x)
         )
      }
   }

   return(
      <div className="App">
         <Header countCartItems={cartItems.length}/>
         <div className="row">
            <Main onAdd={onAdd} products={products}/>
            <Basket onAdd={onAdd} onRemove={onRemove} cartItems={cartItems}/>
         </div>
      </div>
   )
}

export default App;