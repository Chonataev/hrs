import React, {useState } from 'react'
import { Link } from 'react-router-dom'
import {useHttp} from '../hooks/http.hook'

export const Main = () => {
   const [info, setInfo] = useState([])
   
   const request = useHttp()
   const [form,setForm] = useState({
      search: '', type: '', rooms: '', price_1: '',price_2: ''
   })
   const changeHandler = event => {
      setForm({ ...form, [event.target.name]: event.target.value })
    }
   
   const searchHandler =  async () => {
     try{
         const data = await request(`http://localhost/home_rent_system/search`, 'POST', form )
         setInfo(data)
     }
     catch (e){
     }
   }


   return(
      <div className='mainPage'>
         <div className='form'>
            <input className='form_item' name='search' value={form.search} type="text" onChange={changeHandler} placeholder='Искать'/>
            <select className='form_item' name='type' value={form.type} onChange={changeHandler}>
               <option className='option' hidden disabled selected>Выберите тип жилья</option>
               <option  className='option'>Дом</option>
               <option  className='option'>Квартира</option>
               <option  className='option'>Офис</option>
            </select>
            <select className='form_item' onChange={changeHandler}  value={form.rooms} name='rooms'>
               <option className='option' hidden disabled selected>Комнаты</option>
               <option  className='option'>1</option>
               <option  className='option'>2</option>
               <option  className='option'>3</option>
               <option  className='option'>4+</option>
            </select>
            <input className='price form_item' onChange={changeHandler} name='price_1' value={form.price_1} placeholder='цена от' type="text"/>
            <input className='price form_item' onChange={changeHandler} name='price_2' value={form.price_2} placeholder='цена до' type="text"/>
            <button className='submit form_item' onClick={searchHandler} name='getForm' type='submit'>Поиск</button>
         </div>
         <div className='apartments'>
            <h1 className='a_title'>Категория Дома</h1>
         </div> 
         <div className='cards'>
            {info.map((inf) => {
                  return(
                     <div className='card'>
                        <div className='card-image item'>
                           <img className='image' src={inf.image} alt=''></img>
                        </div>
                        <div className='card-body item'>
                           <p className='card-title'>район : {inf.district}</p>
                           <p className='card-location'>цена : {inf.price}</p>
                           <p className='description'>описание : {inf.descrip}</p>
                           <Link to={`/detail/${inf.id}`}>Открыть</Link>
                        </div>
                     </div>
                     )
                  }) }
            </div>
         </div>

   )
}