
const MenuItem = (props) => {
    return (
        <li>
            <div class="plate">
                <img src="images/plate__french-fries.png" alt="French Fries" class="plate" />
            </div>
            <div class="content">
                <p class="menu-item">French Fries with Ketchup</p>
                <p class="price">$2.24</p>
                <button class="in-cart">
                    <img src="images/check.svg" alt="Check" />
                    In Cart
                </button>
            </div>
        </li>
    );
}



export default MenuItem;
