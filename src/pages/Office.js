import React, { useState,useCallback, useEffect,useContext } from 'react'
import {СreateProduct} from '../components/createProduct'
import {ReadCards} from '../components/ReadCard'
import {useHttp} from '../hooks/http.hook'
import {AuthContext} from '../context/AuthContext'

export const Office = () => {
   let auth = useContext(AuthContext)
   const getUserId = () =>{
      let userId = auth.key
      if(userId){
         return userId
      }
      console.log(userId)
   }
   const [data, setData] = useState([])
   const request =useHttp()
   const fetchLinks =useCallback( async () => 
   {
      try{
       const response = await request(`http://localhost/home_rent_system/show?q_search=${getUserId()}`, 'GET', null)
       setData(response)
      }
      catch (e){
      }
      },[request])
      useEffect(() => {
       fetchLinks()
     }, [fetchLinks])

   return(
      <div> 
         <СreateProduct />
         {<ReadCards data={data}/>}
      </div>
   )
}