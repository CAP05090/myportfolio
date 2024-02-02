import React from "react";
import style from "./experience.module.css"
import skills from "../../data/skills.json"
import { getimageUrl } from "../../utils";

const Experience = ()=>{
    return (
        <section className={style.container} id="experience">
            <h2 className={style.title}>Skills</h2>
            <div className={style.content}>
                <div className={style.skills}>{
                    skills.map((skill, id)=>{
                        return <div key={id} className={style.skill}>
                            <div className={style.skillimage}>
                                <img src={getimageUrl(skill.imagesrc)} alt={skill.title}/>
                            </div>
                        </div>
                    })}
                </div>
            </div>
        </section>
    )
}

export default Experience;