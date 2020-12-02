import React, {useCallback, useEffect, useState} from 'react'
import {useParams} from 'react-router-dom'
import {useHttp} from '../hooks/http.hook'
import {ProductCard} from '../components/productCard'

export const DetailPage = () => {
  const request = useHttp()
  const [card, setCard] = useState([])
  const dataId = useParams().id

  const getData = useCallback( async () => 
  {
     try{
      const response = await request(`http://localhost/home_rent_system/detail?q_search=${dataId}`, 'GET', null)
      setCard(response)
     }
     catch (e){
     }
     },[request])

     useEffect(() => {
      getData()
    }, [getData])
  return (
    <>
      {<ProductCard card={card}/> }
    </>
  )
}