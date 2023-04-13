import './ItemCount.css'
import { useState } from 'react'

const ItemCount = ({stock, initial, HandleonAdd}) => {
    const [quantity, setQuantity] = useState(initial)
    const increment = () => {
            if (quantity < stock){
            setQuantity(quantity+1)
        }
    }
    const decrement = () =>{
            if (quantity > 1) {
                setQuantity(quantity-1)
            }
    }
    return(
        <div className='Counter'>
            <div className='Controls'>
                <button className='Button' HandleonClick={decrement}>-</button>
                <h4 className='Number'>{quantity}</h4>
                <button className='Button' HandleonClick={increment}>+</button>
            </div>
            <div>
                <button className='Button' HandleonClick={() => HandleonAdd(quantity)} disabled={!stock}>
                    Agregar al carrito
                </button>
            </div>
        </div>
    )
}

export default ItemCount