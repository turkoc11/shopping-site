import React from "react"

export default function Header(props){
   const {countCartItems}=props 
   return(
      <header className="row block center">
         <div>
            <a href="#/">
               <h1>inforce test site</h1>
            </a>
         </div>
         <div>
            <a href="#/cart">
               Cart{' '}</a>
               {countCartItems? (
                  <button className="badge">{countCartItems}</button>
               ):(' ')
               }
            
            <a href="#/signin">SignIn</a>
         </div>
      </header>
   )
}