import React, { useState } from 'react';

const CartItem = (props) => {
    const price = props.price;
    const imagePath = props.imagePath;
    const [quantity, setQuantity] = useState(props.quantity);
    const onSubtotalChange = props.onSubtotalChange;

    return (
        <>
            <div class="plate">
            <img src={imagePath} alt="French Fries" class="plate" />
                <div class="quantity">{quantity}</div>
            </div>
            <div class="content">
                <p class="menu-item">Fish Sticks and Fries</p>
                <p class="price">${price}</p>
            </div>

            <div class="quantity__wrapper">
              <button class="decrease"onClick={()=> { setQuantity(quantity-1); onSubtotalChange( (quantity-1) * price)}}>
                <img src="images/chevron.svg" />
              </button>
              <div class="quantity">{quantity}</div>
              <button class="increase" onClick={()=> { setQuantity(quantity+1); onSubtotalChange( (quantity+1) * price)}}>
                <img src="images/chevron.svg" />
              </button>
            </div>
            <div class="subtotal">
              ${(Math.round((quantity * price) * 100) / 100).toFixed(2)}
            </div>
        </>
    )

}

export default CartItem;