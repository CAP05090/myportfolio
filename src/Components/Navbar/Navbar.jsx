import React, {useState} from "react";
import style from "./navbar.module.css"
import {getimageUrl} from "../../utils.js"

export const Navbar = ()=> {
    const [menu, setMenu] = useState(false);

    
    return (
        <nav className={style.navbar}>
            <a className={style.logo} href="/"><img src="https://cdn.vectorstock.com/i/preview-1x/77/79/s-letter-business-logo-vector-4187779.webp" alt="logo"/></a>
            <div className={style.menu}>
                <img 
                className={style.menubtn} 
                src={
                    menu 
                    ? getimageUrl("nav/closeIcon.png")
                    : getimageUrl("nav/menuIcon.png")
                } 
                alt="menu-btn"
                onClick={()=> setMenu(!menu)}
                />
                <ul 
                className={`${style.menuItems} ${menu && style.menu}`} 
                onClick={()=> setMenu(false)}
                >
                    <li><a href="/">Home</a></li>
                    <li><a href="#about">About</a></li>
                    <li><a href="#experience">Skills</a></li>
                    <li><a href="#projects">Projects</a></li>
                    <li><a href="#contact">Contact</a></li>
                </ul>
            </div>
        </nav>
    )
}
