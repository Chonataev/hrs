import React, { useContext, useState } from 'react'
import {useHttp} from '../hooks/http.hook'
import {AuthContext} from '../context/AuthContext'

   export const СreateProduct = () =>{
         const [modal, setModal] = useState(false)
         let auth = useContext(AuthContext)

         const getUserId = () =>{
            let userId = auth.key
            if(userId){
               return userId
            }
         }

         const [form, setForm] = useState({
            type:'',district:'',desc:'',price:'',rooms:'',level:'',image:'',userId: getUserId()
         })
      
         const request = useHttp()
      
         const changeHandler = event =>{
            setForm({ ...form, [event.target.name]: event.target.value })
         }

         const createHandler = async () => {
            try {
              const data = await request('http://localhost/home_rent_system/create', 'POST', {...form})
              console.log(data.message)
            } catch (e) {}
          }
          
            
      return (
         <React.Fragment>
            <button className='openModal' onClick = {() =>setModal(true)}>Создать обявление</button>
                  {modal === true && (
                  <div className='modal'>
                     <div className='modal-head'>
                        <h1 className = 'modalTitle'>Создать обявление</h1>
                        <button className = 'closeModal' onClick = {() =>setModal(false)}>&#10006;</button>
                     </div>
                     <div className = 'modal-body'>
                        <select name='type' onChange={changeHandler} value={form.type} className='selectModal'>
                           <option>none</option>
                           <option>Дом</option>
                           <option>Квартира</option>
                        </select>
                        <input name='desc' onChange={changeHandler} value={form.desc} className='selectModal' type='text' placeholder='Введите описание' />
                        <input className='location' name='district' onChange={changeHandler} value={form.district} type='text' placeholder='Введите район'/>
                        <input className='priceModal' name='price' onChange={changeHandler} value={form.price} type='text' placeholder='Введите цену'/>
                        <select className='selectModal' name='rooms' onChange={changeHandler} value={form.rooms}>
                           <option>none</option>
                           <option>1 комната</option>
                           <option>2 комнаты</option>
                           <option>3 комнаты</option>
                           <option>4+ комнат</option>
                        </select>
                         {/*
                         <input type='hidden' onChange={changeHandler} value={} /> */}
                        <input className='level' name='image' onChange={changeHandler} value={form.image} type='text' placeholder='Введите url картинки'/>
                        <input className='level' name='level' onChange={changeHandler} value={form.level} type='text' placeholder='Этаж'/>
                        <button className='getProduct' onClick={createHandler} >Создать</button>
                     </div>
                  </div>
                  )
            }
         </React.Fragment>
         
            )
   }