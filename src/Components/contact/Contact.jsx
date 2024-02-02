import React from "react";
import style from "./contact.module.css"
import { getimageUrl } from "../../utils";

export const Contact = ()=>{
    return(
        <footer className={style.container} id="contact">
            <div className={style.text}>
                <h2>Contact</h2>
                <p>Feel free to react out!</p>
            </div>
            <ul className={style.links}>
                <li className={style.link}>
                    <img src={getimageUrl("contact/emailicon.png")} alt="email icon"/>
                    <a href="mailto:ksand7398@gmail.com">ksand7398@gmail.com</a>
                </li>
                <li className={style.link}>
                    <img src={getimageUrl("contact/linkedinicon.png")} alt="linkedin icon"/>
                    <a href="https://www.linkedin.com/in/sandeep-kumar-9b7885192">Linkedin</a>
                </li>
                <li className={style.link}>
                    <img src={getimageUrl("contact/githubicon.png")} alt="github icon"/>
                    <a href="https://https://github.com/CAP05090">GItHub</a>
                </li>
            </ul>
        </footer>
    )
}