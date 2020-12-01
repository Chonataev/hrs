import React, {useState} from 'react'
import {useHttp} from '../hooks/http.hook'
export const  SingUp = () =>{

   
   const request = useHttp()

   const [form, setForm] = useState({
      email: '', password: '',confirm:''
    })

   const changeHandler = event => {
      setForm({ ...form, [event.target.name]: event.target.value })
    }
  
    const registerHandler = async () => {
      try {
        const data = await request('http://localhost/home_rent_system/reg', 'POST', {...form})
        console.log(data.message)
      } catch (e) {}
    }
   

   return(
      <div class='registration'>
         <div className='reg_body'>
            <h5 class='h5'> Регистрация </h5>
            <label>Email</label>
            <input className='email' type='email' name='email'  value={form.email}
                  onChange={changeHandler} placeholder='Введите Email' />
            <label>Password</label>
            <input className='pass' type='password' value={form.password}  name="password"
                  onChange={changeHandler} placeholder='Введите пароль' />
            <label>Password confirm</label>
            <input className='pass' type='password' value={form.confirm}  name="confirm"
                  onChange={changeHandler} placeholder='Введите пароль' />
            <button className='reg_btn' onClick={registerHandler}>Зарегистриоваться</button>
         </div>
      </div>
   )
}
