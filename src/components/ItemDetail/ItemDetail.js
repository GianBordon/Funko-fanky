import './ItemDetail.css'
import ItemCount from '../ItemCount/ItemCount'

const ItemDetail = ({id, name, img, price, description, category}) => {

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
            <ItemCount initial={1} stock={10} onAdd={(quantity) => console.log('Cantidad de productos agregados :', quantity)}/>
            </footer>
        </article>
    )
}

export default ItemDetail