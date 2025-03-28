import React from 'react';
import logoQnnf from '../../assets/img/logoQnnf.jpg';
import './NavBar.css';
import CartWidget from '../CartWidget/CartWidget';

function NavBar() {
    return (
        <header className="navbar">
            <img src={logoQnnf} alt="Logo Qnnf" />
            <nav>
                <ul>
                    <li>Verano 2025</li>
                    <li>Otoño & Invierno 2025</li>
                    <li>Descuentos</li>
                    <li>FAQs</li>
                </ul>

            </nav>
            <CartWidget/>
        </header>
    );
    
}

export default NavBar;