import React from 'react'
import style from "../styles/home.module.css"

const Login = () => {
    return (<div className={style.main}>
        <h1 className={style.h1}>Login</h1>
        <div className={style.form} ><input className={style.input} type="text" placeholder='Name' /></div>
        <input className={style.input} type="text" placeholder='Password' />
        <button className={style.button}>Log in</button>
    </div>
    )
}

export default Login