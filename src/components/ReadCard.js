import React from 'react'

export const ReadCards = ({ data }) =>{
   if (!data.length) {
      return <p className="answer">Обявлений пока нет</p>
    }
        return(
      <div className='cards'>
         {data.map((item) => {
            return(
               <div className='card'>
                  <div className='card-image item'>
                     <img className='image' src={item.image}></img>
                  </div>
                  <div className='card-body item'>
                     <p className='card-title'>район : {item.district}</p>
                     <p className='card-location'>цена : {item.price}</p>
                     <p className='description'>описание : {item.descrip}</p>
                  </div>
               </div>
          )
        }) }
        </div>
        )
    }