import CartWidget from "./CartWidget/CartWidget";
import { NavLink, Link } from 'react-router-dom';


const NavBar = () => {
    return (
        <nav className="NavBar">
            <Link to={'/'}> 
            <h3>Funko Funky</h3>
            </Link>
            <div className="Categories">
                <NavLink to={'/category/Star Wars'} className={({isActive})=> isActive ? 'ActiveOption' : 'Option'}>Star Wars</NavLink>
                <NavLink to={'/category/Marvel'} className={({isActive})=> isActive ? 'ActiveOption' : 'Option'}>Marvel</NavLink>
                <NavLink to={'/category/DC'} className={({isActive})=> isActive ? 'ActiveOption' : 'Option'}>DC</NavLink>
                <NavLink to={'/category/Disney'} className={({isActive})=> isActive ? 'ActiveOption' : 'Option'}>Disney</NavLink>
            </div>
            <CartWidget/>
        </nav>
    )
}

export default NavBar;
