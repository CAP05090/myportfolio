import React from "react";
import style from "./projectcard.module.css"
import { getimageUrl } from "../../utils";

export const ProjectCard = ({project: {title, imagesrc, description, skills, demo, source}})=>{
    return(
        <div className={style.container}>
            <img src={getimageUrl(imagesrc)} alt={` Image of ${title}`} className={style.image}/>
            <h3 className={style.title}>{title}</h3>
            <ul className={style.descriptions}>{
                description.map((desc, id)=>{
                    return <li key={id}>{desc}</li>
                })}
            </ul>
            <ul className={style.skills}>{
                skills.map((skill, id)=>{
                    return <li key={id} className={style.skill}>{skill}</li>
                })}
            </ul>
            <div className={style.links}>
                <a href={demo} className={style.link}>Website</a>
                <a href={source} className={style.link}>Source</a>
            </div>
        </div>
    )
}
