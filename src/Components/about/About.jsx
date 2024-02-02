import React from "react";
import style from "./about.module.css"
import { getimageUrl } from "../../utils";

export const About = ()=>{

    return(
        <section className={style.container} id="about">
            <h2 className={style.title}>About</h2>
            <div className={style.content}>
                <ul className={style.aboutitems}>
                    <li className={style.aboutitem}>
                        <div className={style.aboutitemtext}>
                            <h3>Backend Developer</h3>
                            <p>Experienced Full Stack Web Developer proficient in MERN
                                stack (MongoDB, Express.js, React.js, Node.js).
                                Demonstrated expertise in designing and developing server side APIs using Node.js and Express.js. </p>
                        </div>
                    </li>
                    <li className={style.aboutitem}>
                        <div className={style.aboutitemtext}>
                        <h3>Frontend Developer</h3>
                            <p>Skilled in frontend
                                development using React.js. Strong problem-solving and
                                collaboration abilities, with a proactive and self-motivated
                                attitude.</p>
                        </div>
                    </li>
                </ul>
            </div>
        </section>
    )
}