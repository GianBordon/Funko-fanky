import { useContext } from "react"
import { CartContext } from "../../Context/CartContext"
import { addDoc, collection, documentId, getDocs, query, writeBatch, where, Timestamp} from "firebase/firestore"
import db from '../../config/Firebase'
import { useState } from "react"
import CheckoutForm from '../CheckoutForm/CheckoutForm'

const Checkout = () => {
    const [loading, setLoading] = useState(false)
    const [orderId, setOrderId] = useState('')
    const [user, setUser] = useState('')

    const {cart,total,clearCart} = useContext(CartContext)

    const generarOrden =  (setUser, cart, total, setOrderId, clearCart,)
    const orden = {
        comprador: user,
        item: cart,
        total: total(),
        fyh: Timestamp.fromDate(new Date())
    }

    const batch = writeBatch(db)
    const orderRef = collection(db, 'orders')
    const productosRef = collection(db, 'productos')

    const q = query(productosRef, where(documentId(), 'in', cart.map((el) => el.id)))
    const productos =  getDocs(q)
    const outOfStock = []

    productos.docs.forEach((doc) => {
        const item = cart.find((el) => el.id === doc.id)

        if (doc.data().stock >= item.quantity) {
            batch.update(doc.ref, {
                stock: doc.data().stock - item.quantity
            })
        } else {
            outOfStock.push(item)
        }
    })

    if (outOfStock.length === 0) {
        addDoc(orderRef, orden)
            .then((doc) => {
                batch.commit()
                setOrderId(doc.id)
                clearCart()
            })
    } else {
        alert ("hay items sin stock")
    
    }

    if(loading){
        return <h1> Se esta generando tu orden...</h1>
    }
    if(orderId) {
        return <h1>El Id de su orden es: {orderId}</h1>
    }
    return (
        <div>
            <h1>Checkout</h1>
            <CheckoutForm onConfirm={generarOrden}></CheckoutForm>
        </div>
    )
}

export default Checkout