import React from "react"

export default function Basket(props){
   const {cartItems, onAdd, onRemove}=props;
   const itemsPrice=cartItems.reduce((a,c)=>a+c.price*c.qty,0);
   let discountPrice=0
   if (itemsPrice >= 3000){
      discountPrice= itemsPrice*0.03
   }
   const shippingPrice=itemsPrice>2000?0:50;
   const totalPrice=itemsPrice-discountPrice+shippingPrice
   return(
      <aside className="block col-1">
         <h2>Cart Items</h2>

         <div>{cartItems.length === 0 && <div>Cart is empty</div>}</div> 

         {cartItems.map((item)=>(

         <div key={item.id} className="row">

            <div className="col-2">{item.name}</div>

            <div className="col-2">
               <button onClick={()=>onAdd(item)} className="add">+</button>
               <button onClick={()=>onRemove(item)} className="remove">-</button>
            </div>

            <div className="col-2 text-right">
               {item.qty}x${item.price.toFixed(2)}
            </div>

         </div>
         ))}
         {cartItems.length!==0 &&(
            <>
               <hr></hr>
               <div className="row">
                  <div className="col-2">Items Price</div>
                  <div className="col-1 text-right">${itemsPrice.toFixed(2)}</div>
               </div>
               <div className="row">
                  <div className="col-2">Discount </div>
                  <div className="col-1 text-right">${discountPrice.toFixed(2)}</div>
               </div>
               <div className="row">
                  <div className="col-2">Shipping</div>
                  <div className="col-1 text-right">${shippingPrice.toFixed(2)}</div>
               </div>
               <div className="row">
                  <div className="col-2">Total</div>
                  <div className="col-1 text-right">${totalPrice.toFixed(2)}</div>
               </div>
               <hr/>
               <div className="row">
                  <button onClick={()=>alert('Implement Checkout')}>
                     Checkout
                  </button>
               </div>
            </>
         )}
      </aside>
   )
}