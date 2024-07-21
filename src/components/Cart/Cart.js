import { useContext } from 'react';
import Modal from '../UI/Modal';
import CartContext from '../../store/cart-context';
import classes from './Cart.module.css';

const Cart = (props) => {
  const cartCtx = useContext(CartContext);
  const cartItems = (
    <ul className={classes['cart-items']}>
      {cartCtx.items.map((item) => (
         <li key={item.id}>
         {item.name} x {item.amount} (${item.price})
       </li>
      ))}
    </ul>
  );

  return (
    <Modal onClose={props.onClose}>
      {cartItems}
      <div className={classes.total}>
        <span>Total Amount</span>
        <span>${cartCtx.totalAmount.toFixed(2)}</span>
      </div>
      <div className={classes.actions}>
        <button className={classes['button--alt']} onClick={props.onClose}>
          Close
        </button>
        <button className={classes.button}>Order</button>
      </div>
    </Modal>
  );
};

export default Cart;