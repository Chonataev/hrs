import {useState, useCallback, useEffect} from 'react'

const storageName = 'userData'

export const useAuth = () => {

   const [userId, setUserId] = useState(null)
   const [key, setKey] = useState(null)

   const login = useCallback((hesh, id) => {
      setKey(hesh)
      setUserId(id)
  
      localStorage.setItem(storageName, JSON.stringify({
        userId: id, key: hesh
      }))
    }, [])  
  
  
    const logout = useCallback(() => {
      setKey(null)
      setUserId(null)
      localStorage.removeItem(storageName)
    }, [])
  
    useEffect(() => {
      const data = JSON.parse(localStorage.getItem(storageName))
  
      if (data && data.key) {
        login(data.key, data.userId)
      }
    }, [login])
  
  
    return { login, logout, key, userId }
  }