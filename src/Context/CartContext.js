import { createContext, useState } from "react";

export const CartContext = createContext({
    cart: []
});

export const CartProvider = ({children}) => {
    const [cart, setCart] = useState([])

    console.log(cart)

    const isInCart = (id) =>{
        return cart.some((item)=> item.id === id)
    }

    const addItem = (item, quantity) => {
        if(!isInCart(item.id)) {
            setCart(prev => [...prev, {...item, quantity}])
        }else{
            console.error('El producto ya fue agregado')
        }
    }


const removeItem = (itemId) => {
    const cartUpdated = cart.filter(prod => prod.id !== itemId)
    setCart(cartUpdated)
}

const clearCart = () => {
    setCart([])
}

const total = () =>{

    const resultado= cart.reduce((acc, el) => acc + el.price * el.quantity, 0)
    return resultado
    }
    
return(
    <CartContext.Provider value={{cart, addItem, removeItem, clearCart, total}}>
        {children}
    </CartContext.Provider>
)
}