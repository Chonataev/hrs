import React from 'react'
import { Link } from 'react-router-dom'
export const Cards = ({ info }) =>{
   if (!info.length) {
      return <p className="answer">Обявлений пока нет</p>
    }
        return(
      <div className='cards'>
         {info.map((inf) => {
           return(
            <div className='card'>
               <div className='card-image item'>
                  <img className='image' src={inf.image}></img>
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
        )
    }