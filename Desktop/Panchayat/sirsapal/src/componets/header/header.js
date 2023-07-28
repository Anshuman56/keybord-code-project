import './header.css';
import { useState } from 'react';
import NavBar from './navBar';

const Header = () => {

    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);

    };

    return (
        <header>
            <div className="header">
                <h1 className="header__top">ଆମ ପଂଚାୟତ ଶୀର୍ଷାପାଲ</h1>
                <div className='toggle-button' onClick={toggleMenu}>
                    <span className='bar'></span>
                    <span className='bar'></span>
                    <span className='bar'></span>
                </div>
                <div className={`header__bottom ${menuOpen ? "action" : ""}`}>
                    <NavBar />
                </div>

                {/* <nav className={`header__bottom ${menuOpen ? "action" : ""}`}>

                <ul className={`left__menu ${menuOpen ? "action" : ""}`}>
                    <li>Home</li>
                    <li>About Panchayat</li>
                    <li>Self Employment</li>
                    <li>Schemes</li>
                    <li>Culture & Sports</li>
                    <li>Health</li>
                    <li>Education</li>


                </ul>
                <ul className={`right__menu ${menuOpen ? "action" : ""}`}>
                    <li>RTI</li>
                    <li>LogIn</li>
                </ul>
            </nav> */}
            </div>
        </header>

    )
}
export default Header