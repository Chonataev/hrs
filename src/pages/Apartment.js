import React, { useCallback, useEffect, useState } from 'react'
import {Cards} from '../components/cards'
import {useHttp} from '../hooks/http.hook'


export const Apartment = () =>{

    const [info, setInfo] = useState([])
    const request =useHttp()
    const fetchLinks =useCallback( async () => 
    {
       try{
        const data = await request('http://localhost/home_rent_system/apartment', 'GET', null)
        setInfo(data)
       }
       catch (e){
       }
       },[request])
       useEffect(() => {
        fetchLinks()
      }, [fetchLinks])

        return(
          <>
          <div className='apartments'>
            <h1 className='a_title'>Категория Квартиры</h1>
         </div> 
          {<Cards info={info} />}
          </>
            
        )
  }