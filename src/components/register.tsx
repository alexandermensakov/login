import React from 'react'
import style from "../styles/home.module.css"

const Register = () => {
    return (<div className={style.main}>
        <h1 className={style.h1}>Register</h1>
        <div className={style.form} ><input className={style.input} type="text" placeholder='Name' /></div>
        <input className={style.input} type="text" placeholder='Password' />
        <button className={style.button}>Register</button>
    </div>
    )
}

export default Register