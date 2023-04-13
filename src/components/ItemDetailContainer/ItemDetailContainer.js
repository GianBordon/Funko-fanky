import './ItemDetailContainer.css'
import { useState, useEffect } from 'react'
import { getProductosById } from '../asyncMock'
import ItemDetail from '../ItemDetail/ItemDetail'
import { useParams } from 'react-router-dom'

const ItemDetailContainer = () => {
    const [productos, setProductos] = useState(null)
    const {itemId} = useParams
    useEffect(() =>{
        getProductosById(itemId)
            .then(response =>{
                setProductos(response)
            })
            .catch(error =>{
                console.error(error)
            })
        }, [itemId])
        return(
            <div className='ItemDetailContainer'>
                <ItemDetail {...productos} />
            </div>
        )
}

export default ItemDetailContainer