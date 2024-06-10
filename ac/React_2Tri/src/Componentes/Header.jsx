import Navbar from './Navbar'
import { Link } from 'react-router-dom'

function Header() {
    return ( 
        <>
        <header className='navbarTroco flex bg-black text-white p-4 mb-4 text-lg'>
        <Link to="/"><h1 className='pe-5 text-vermelhoPT'>Filmes Total</h1> </Link>
            <Navbar/>
        </header>
        </>
     );
}

export default Header;