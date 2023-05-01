import React, { useState } from 'react'
import './Header.css'
// import { Route, Routes } from 'react-router-dom';
// import About from '../3.About/About';
// import Home from '../2.Home/Home';

const Header = () => {
    
    const[Toggle, showMenu] = useState(false);
    
    return (
    <header className="header">
        <nav className="nav container">
            <a href="index.html" className="nav__logo">TUSHAR VERMA</a>

            <div className={Toggle ? "nav__menu show-menu" : "nav__menu"}>
                <ul className="nav__list grid">


                    <li className="nav__item">
                        <a href="#home" className="nav__link active__link">
                            <i className="uil uil-estate nav__icon"></i> 
                            HOME 
                        </a>
                        
                        {/* <Routes>
                            <Route path="portfolio-website"  element={<Home />} />
                        </Routes> */}
                    </li>


                    <li className="nav__item">
                        <a href="#about" className="nav__link">
                            <i className="uil uil-user nav__icon"></i> ABOUT
                        </a>

                        {/* <Routes>
                            <Route path="portfolio-website/About" element={<About />} />
                        </Routes> */}
                    </li>


                    <li className="nav__item">
                        <a href="#skills" className="nav__link">
                            <i className="uil uil-file-alt nav__icon"></i>SKILLS
                        </a>
                    </li>


                    <li className="nav__item">
                        <a href="#services" className="nav__link">
                            <i className="uil uil-briefcase-alt nav__icon"></i> SERVICES
                        </a>
                    </li>


                    <li className="nav__item">
                        <a href="#portfolio" className="nav__link">
                            <i className="uil uil-scenery nav__icon"></i>PORTFOLIO
                        </a>
                    </li>


                    <li className="nav__item">
                        <a href="#contact" className="nav__link">
                            <i className="uil uil-message nav__icon"></i> CONTACT
                        </a>
                    </li>


                </ul>

                

                <i class="uil uil-times nav__close"  onClick={() => showMenu(!Toggle)}></i>
            </div>
            <div className="nav__toggle" onClick={() => showMenu(!Toggle)}>
                <i class="uil uil-apps"></i>
            </div>
        </nav>
    </header>
    )
}

export default Header