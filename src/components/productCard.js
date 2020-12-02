import React from 'react'

export const ProductCard =  ({card}) => {
  return (
   <div className='det'>
         {card.map((inf) => {
            return(
               <div className='detail_card'>
                  <div >
                     <img className='card_image' src={inf.image}></img>
                  </div>
                  <div className='detail-body'>
                     <p className='detail-title'>район : {inf.district}</p>
                     <p className='detail-location'>цена : {inf.price}</p>
                     <p className='detail'>описание : {inf.descrip}</p>
                     <p className='detail'>этаж : {inf.level}</p>
                     <p className='detail'>Количество комнат : {inf.rooms}</p>
                     <p className='detail'>Дата публикации : {inf.created}</p>
                  </div>
               </div>
          )
        }) }
        </div>)
}