import cart from './assets/cart.png';
import './CartWidget.css'
import {useContext} from 'react'
import { CartContext } from '../../Context/CartContext';
import { Link } from 'react-router-dom';

const CartWidget = () => {
    const {totalQuantity} = useContext(CartContext)

    return (
        <Link to='/cart' className='CartWidget' style={{ display: totalQuantity > 0 ? 'block' : 'none'}}>
            <img className='CartImg' src={cart} alt='cart-wdiget'></img>
            {totalQuantity}
        </Link>
    )
}

export default CartWidget;