import { useContext } from "react"
import { CartContext } from "../../Context/CartContext"
import { addDoc, collection, documentId, getDocs, query, writeBatch, where, Timestamp} from "firebase/firestore"
import db from '../../config/Firebase'
import { useState } from "react"
import CheckoutForm from '../CheckoutForm/CheckoutForm'

const Checkout = () => {
    const [loading, setLoading] = useState(false)
    const[orderId, setOrderId] = useState('')

    const {cart,total,clearCart} = useContext(CartContext)

    const createOrder = async ({name, phone, email}) => {
        setLoading(true)

        try{
            const objOrder = {
                buyer: {
                    name,phone,email
                },
                item: cart,
                total: total,
                date: Timestamp.fromDate(new Date())
            }

            const batch = writeBatch(db)

            const outOfStock = []
            
            const ids =cart.map(prod => prod.id)

            const productosRef = collection(db, 'productos')

            const productosAddedFromFirestore = await getDocs(query(productosRef, where(documentId(), 'in', ids)))

            const { docs } = productosAddedFromFirestore

            docs.forEach(doc => {
                const dataDoc = doc.data()
                const stockDb = dataDoc.stock

                const productosAddedToCart = cart.find(prod => prod.id === doc.id)
                const prodQuantity = productosAddedToCart?.quantity

                if(stockDb >= prodQuantity) {
                    batch.update(doc.ref, {stock: stockDb - prodQuantity})
                } else {
                    outOfStock.push({id: doc.id, ...dataDoc})
                }
            })

            if(outOfStock.length === 0) {
                await batch.commit()

                const orderRef = collection(db, 'orders')

                const orderAdd = await addDoc(orderRef, objOrder)

                setOrderId(orderAdd.id)
                clearCart()
            } else {
                console.error('Hay productos que estan fuera de stock')
            }
        } 
            catch (error) {
                console.log(error)
        }
            finally{
                setLoading(false)
        }

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
            <CheckoutForm onConfirm={createOrder}></CheckoutForm>
        </div>
    )
}

export default Checkout