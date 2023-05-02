import './ItemDetail.css'
import ItemCount from '../ItemCount/ItemCount'
import {useState} from 'react'
import {Link} from 'react-router-dom'

const ItemDetail = ({id, name, img, price, description, category, stock}) => {

    const[quantityAdded, setQuatityAdded] = useState (0)

    const handleOnAdd = (quantity) => {
        setQuatityAdded(quantity)

        const item = {
            id,name,price
        }

        addItem(item,quantity)
    }

    return(
        <article className='CardItem'>
            <header className='Header'>
                <h2 className='ItemHeader'>
                    {name}
                </h2>
            </header>
            <picture>
                <img src={img} alt={name} className="ItemImg"/>
            </picture>
            <section>
                <p className='Info'>
                    Descripcion: {description}
                </p>
                <p className='Info'>
                    Seccion: {category}
                </p>
                <p className='Info'>
                    Precio: ${price}
                </p>
            </section>
            <footer className='ItemFooter'>
            {
                quantityAdded > 0 ? (
                    <Link to='/cart' className='Option'> Terminar compra </Link>
                ) : (
                    <ItemCount initial={1} stock={stock} HandleonAdd={handleOnAdd}/>
                )
            }
            </footer>
        </article>
    )
}

export default ItemDetail