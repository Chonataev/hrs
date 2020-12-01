
import React, { useCallback, useEffect, useState } from 'react'
import {Cards} from '../components/cards'
import {useHttp} from '../hooks/http.hook'


export const Homes = () =>{

const [info, setInfo] = useState([])
const request =useHttp()
const fetchLinks =useCallback( async () => 
{
   try{
      const data = await request('http://localhost/home_rent_system/homes', 'GET', null)
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
         <h1 className='a_title'>Категория Дома</h1>
      </div> 
      {<Cards info={info} />}
      </>
         
      )
}