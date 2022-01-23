import React, { useState } from 'react';

import logo from './logo.svg';
import './App.css';
import MenuItem from './Components/MenuItem';
import CartItem from './Components/CartItem';

function App() {
  const [subtotal, setSubtotal] = useState(0);
  const cartItems = [];
  const [val,setVal]=useState("bla bla");

   function toggle(){
   setVal((val=="bla bla")?"OFF":"bla bla");
  }

  function handleSubtotalChange(newValue) {
    setSubtotal(newValue);
  }

  function handleAddToCart(menuItem) {
    cartItems.push(menuItem);
  }
  
  return (
    <><div class="wrapper menu">
      <button hidden onClick={toggle}>{val}</button>
      <div class="panel">
        <h1>To Go Menu</h1>
        <ul class="menu">
          <MenuItem price="$3.25" itemName = "Chiken Salad"
            imagePath="images/plate__chicken-salad.png" 
            onAddToCart={handleAddToCart}
          />
          <MenuItem price="$2.23" itemName = "French Fries with Toast" 
            imagePath="images/plate__french-fries.png"
          />
          <MenuItem price="$5.12" itemName = "Salmon and Vegetables"
          imagePath="images/plate__salmon-vegetables.png"
          />
          <MenuItem price="$7.82" itemName = "Spaghetti Meat Sauce"
          imagePath="images/plate__spaghetti-meat-sauce.png"
          />
          
          <MenuItem price="$6.98" itemName = "Chicken Salad with Parmesean"
          imagePath= "images/plate__chicken-salad.png"
          />
          
          <MenuItem price="$6.34" itemName = "Fish Sticks and Fries"
          imagePath= "images/plate__fish-sticks-fries.png"
          />
        
        </ul>
      </div>

      <div class="panel cart">
        <h1>Your Cart</h1>
      

        <ul class="cart-summary">

          <li>
             <CartItem price={6.34} imagePath= "images/plate__fish-sticks-fries.png"
             quantity={1} onSubtotalChange={handleSubtotalChange}/> 
              
          </li>
          
          <li>
            <CartItem price={2.23} imagePath ="images/plate__french-fries.png"
            quantity={1}  onSubtotalChange={handleSubtotalChange}
            />
            
          </li>
        </ul>

        <div class="totals">
          <div class="line-item">
            <div class="label">Subtotal:</div>
            <div class="amount price subtotal">${(Math.round((subtotal) * 100) / 100).toFixed(2)}</div>
          </div>
          <div class="line-item">
            <div class="label">Tax:</div>
            <div class="amount price tax">$1.05</div>
          </div>
          <div class="line-item total">
            <div class="label">Total:</div>
            <div class="amount price total">$11.85</div>
          </div>
        </div>
      </div>
    </div><script src="app.js"></script></>
  );
}

export default App;
