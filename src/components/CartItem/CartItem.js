import { useContext } from 'react';
import { CartContext } from '../../Context/CartContext';
import './CartItem.css'


const CartItem = ({name, price, quantity, id,img}) => {
const {removeItem} = useContext(CartContext)
return(
<div className='carrito'>
<h1>{img}</h1>
<h1>{name} </h1>
<h1>{price} </h1>
<h1>cantidad:{quantity} </h1>
<button onClick={()=>removeItem(id)} className='Eliminar'>X</button>
</div>

)
};

export default CartItem

