import React from "react";
import style from "./home.module.css"
import { getimageUrl } from "../../utils";


export const Home = ()=>{

    return(
        <section className={style.container}>
            <div className={style.content}>
                <h1 className={style.title}>Hi, I'm Sandeep </h1>
                <p className={style.description}>I'm a Full Stack developer with 6 month experience using Recat, Express, NodeJS </p>
                <a href="mailto:ksand7398@gmail.com" className={style.contactbtn}>Contact Me</a>
                <a className={style.resume} href={getimageUrl("home/Resume.pdf")} title="" download>Resume</a>
            </div>
            <div>
                <img src={getimageUrl("home/homeimage.png")} alt="Image" className={style.img}/>
            </div>
            <div className={style.topblur}></div>
            <div className={style.bottomblur}></div>
        </section>
    )
}