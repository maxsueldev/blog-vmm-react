import { NavLink } from 'react-router-dom';
import { useState } from 'react';
import { GiHamburgerMenu } from 'react-icons/gi';
import './style.scss';

export default function Navbar() {
    const [openMenu, setOpenMenu] = useState(false);

    function showMenu() {
        if (!openMenu) setOpenMenu(true);
        else setOpenMenu(false);
    }

    return (
        <nav className='navbar'>
            <div className='navbar__container'>
                <div className="navbar__header">
                    <a href="/"><img className='image-logo' src="../../../public/assets/logo.png" alt="Lorem Ipsum" /></a>
                </div>

                <GiHamburgerMenu className='navbar__hamburgerMenu' onClick={() => showMenu()} />

                {openMenu &&
                    <div className="navbar__mobile__collapse">
                        <ul>
                            <li><NavLink to='/' className={({ isActive }) => (isActive ? 'active' : '')}>Início</NavLink></li>
                            <li><NavLink to='/sobre' className={({ isActive }) => (isActive ? 'active' : '')}>Sobre</NavLink></li>
                            <li><NavLink to='/contato' className={({ isActive }) => (isActive ? 'active' : '')}>Contato</NavLink></li>
                        </ul>
                    </div>
                }

                <div className="navbar__desktop__collapse">
                    <ul>
                        <li><NavLink to='/' className={({ isActive }) => (isActive ? 'active' : '')}>Início</NavLink></li>
                        <li><NavLink to='/sobre' className={({ isActive }) => (isActive ? 'active' : '')}>Sobre</NavLink></li>
                        <li><NavLink to='/contato' className={({ isActive }) => (isActive ? 'active' : '')}>Contato</NavLink></li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}