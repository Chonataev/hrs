import React, {useContext, useEffect, useState} from 'react'
import {useHttp} from '../hooks/http.hook'
import {AuthContext} from '../context/AuthContext'

export const Singin = () =>{
   const auth = useContext(AuthContext)

   const request = useHttp()

   const [form, setForm] = useState({
      email: '', pass: ''
    })

   const loginHandler = async () => {
      try {
        const data = await request('http://localhost/home_rent_system/auth', 'POST', {...form})
        auth.login(data.hesh, data.user_id)
        message(data.message)
      } catch (e) {}
    }

    const changeHandler = event => {
      setForm({ ...form, [event.target.name]: event.target.value })
    }

   return(
      <div class='auth'>
         <div className='auth_body'>
            <h5 class='h5'> Вход в личный кабинет </h5>
            <label>Email</label>
            <input className='email' type='email' name="email"  value={form.email}
                  onChange={changeHandler} placeholder='Введите Email' />
            <label>Password</label>
            <input className='pass' type='password' name="pass"  value={form.password}
                  onChange={changeHandler} placeholder='Введите пароль' />
            <button className='auth_btn'  onClick={loginHandler}>Авторизация</button>
         </div>
      </div>
   )
}