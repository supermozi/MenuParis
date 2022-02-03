import React, { createContext, useState } from 'react';

import logo from './logo.svg';
import './App.css';
import MenuItem from './Components/MenuItem';
import CartItem from './Components/CartItem';

function App() {
  const [subtotal, setSubtotal] = useState(0);
  const [cartItems, setCartItems] = useState({});
  const [val,setVal]=useState("bla bla");

   function toggle(e){
    console.log(e);
    setVal((val=="bla bla")?"OFF":"bla bla");
  }

  function handleSubtotalChange(e) {
    // console.log(e);
    cartItems[e.itemId] = e.subtotal;
    
    const a = {}
    a["id_1"] = 10;
    a["id_2"] = 10;
    a["id_1"] = 30;
    // a {
    //  id_1  = 30;
    //  id_2 = 10;
    // }
    //a = 10
    // console.log(a);



    // a["id_1"]  + a["id_2"]
    let subtotal = 0;
    for (let idd in a) {
      // idd = id_1
      // idd = id_2
      subtotal = subtotal + a["id_1"];
    }

    console.log(cartItems);
    setCartItems(setCartItems);

    subtotal = 0;
    for (let item in cartItems) {
      // cartItems["1"] = 12.68
      console.log(`itemId:${item} , cartItem:${cartItems[item]}`);
      subtotal = subtotal + cartItems[item];
    }

    setSubtotal(subtotal);
  }

  function handleAddToCart(price, name, image, itemId) {
    console.log("in handleAddToCart");
    const menuItem = {
      "price":price,
      "name":name,
      "image":image,
      "itemId":itemId,
      "subtotal":0,
      "quantity":0,
      "x": {
        "a":10,
        "b":20
      }
    }

    let cartItems2 = {
      "Item1": {
        "price":3.25,
        "name":"chicken",
        "image":image,
        "itemId":"Item1",
        "subtotal":0,
        "quantity":0       
      },
      "Item2": {
        "price":4.35,
        "name":"salad",
        "image":image,
        "itemId":"Item2",
        "subtotal":0,
        "quantity":0
      }
    }
    
    const menuItemCopy = {...menuItem};
    console.log(cartItems);
    // cartItems[itemId] = menuItem;
    setCartItems({...cartItems, [itemId]:menuItem});
  }
  
  return (
    <><div class="wrapper menu">
      <button hidden onClick={toggle}>{val}</button>
      <div class="panel">
        <h1>To Go Menu</h1>
        <ul class="menu">
          <MenuItem price="$3.25" itemName = "Chiken Salad"
            imagePath="images/plate__chicken-salad.png" 
            onAddToCart={e=>handleAddToCart(3.25, "Chiken Salad", "images/plate__chicken-salad.png",1)}
          />
          <MenuItem price="$2.23" itemName = "French Fries with Toast" 
            imagePath="images/plate__french-fries.png"
            onAddToCart={e=>handleAddToCart(2.23, "French Fries with Toast", "images/plate__french-fries.png",2)}
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
             quantity={1} onSubtotalChange={handleSubtotalChange} itemId="1"/> 
              
          </li>
          
          <li>
            <CartItem price={2.23} imagePath ="images/plate__french-fries.png"
            quantity={1} onSubtotalChange={handleSubtotalChange} itemId="2"
            />
          </li>

          {Object.keys(cartItems).map(item => ( 
            <li>
              <CartItem price={2.23} imagePath ="images/plate__french-fries.png"
              quantity={1} onSubtotalChange={handleSubtotalChange} itemId="2"/>
            </li>

          )
          )}
          
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
