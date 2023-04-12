import CartWidget from "./CartWidget/CartWidget";


const NavBar = () => {
    return (
        <nav>
            <h3>Funko Funky</h3>
            <div>
                <button>Star Wars</button>
                <button>Marvel</button>
                <button>DC</button>
                <button>Disney</button>
            </div>
            <CartWidget/>
        </nav>
    )
}

export default NavBar;
