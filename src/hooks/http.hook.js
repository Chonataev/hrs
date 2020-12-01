import {useCallback} from 'react'
export const useHttp = () =>{

   const request = useCallback(async (url, method = 'GET', body = null, headers = {}) => {
      try {
        if (body) {
          body = JSON.stringify(body)
          headers['Content-Type'] = 'application/json; charset=UTF-8'
          headers['Access-Control-Allow-Headers'] = 'Content-Type, X-Auth-Token, Origin'  
        }
  
        const response = await fetch(url, {method, body, headers})
        const data = await response.json()
  
        if (!response.ok) {
          throw new Error(data.message || 'Что-то пошло не так')
        }
        return data
      } catch (e) {
         console.log('ошибка',e.message)
        throw e
      }
    }, [])
    return request
   }