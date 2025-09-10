import { useSelector } from "react-redux";
import FoodItemCard from "./FoodItemCard";

const Cart = () => {
    const cartItems = useSelector((store) => store.cart.items);
    console.log('cartItems in cart component', cartItems);
  return (
    <>
      <h1>This is sample cart page</h1>
      <div>
        {cartItems.map((item) => {
            return <p key={item.id}>{item.name}</p>
        })}
      </div>
    </>
  );
};

export default Cart;
