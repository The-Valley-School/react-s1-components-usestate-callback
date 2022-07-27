import Link from '../link/link';
import './header.css';

const Header = () => {
    return (
        <header>
            <h2>LOGO</h2>
            <nav>
                
                <Link name='Google' link='http://google.com'></Link>
                <Link name='The Valley' link='https://thevalley.es'></Link>
                <Link name='Digital The Valley' link='https://digital.thevalley.es'></Link>
                <Link name='Web Oficial React' link='https://es.reactjs.org/'></Link>

            </nav>
        </header>
    );
}

export default Header;