
const MenuItem = (props) => {
    const price = props.price;
    const itemName = props.itemName;
    const imagePath = props.imagePath;
    const isInCart = props.isInCart;
    const onAddToCart = props.onAddToCart;

    return (
        <li>
            <div class="plate">
                <img src={imagePath} alt="French Fries" class="plate" />
            </div>
            <div class="content">
                <p class="menu-item">{itemName}</p>
                <p class="price">{price}</p>

                {isInCart==="true"
                    ? (
                        <button class="in-cart">
                            <img src="images/check.svg" alt="Check" />
                            In Cart
                        </button>
                        )
                    : (<button class="add" onClick={onAddToCart}>Add to Cart</button>)
                }

            </div>
        </li>
    );
}



export default MenuItem;
