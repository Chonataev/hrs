import React, {useCallback, useContext, useEffect, useState} from 'react'
import {useParams} from 'react-router-dom'
import {useHttp} from '../hooks/http.hook'
import {AuthContext} from '../context/AuthContext'
import {LinkCard} from '../components/LinkCard'

export const DetailPage = () => {
   let auth = useContext(AuthContext)
   const getUserId = () =>{
      let userId = auth.key
      if(userId){
         return userId
      }
      console.log(userId)
   }
  const request = useHttp()
  const [data, setData] = useState(null)
  const dataId = useParams().id
   console.log(dataId)
  const getLink = useCallback(async () => {
    try {
      const response = await request(`http://localhost/home_rent_system/show?q_search=${dataId}`, 'GET', null)
      setData(response)
    } catch (e) {}
  }, [linkId, request])

  useEffect(() => {
    getLink()
  }, [getLink])

  if (loading) {
    return <Loader />
  }

  return (
    <>
      { !loading && link && <LinkCard link={link} /> }
    </>
  )
}