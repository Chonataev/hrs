
import React, { useContext } from 'react'
import {BrowserRouter as Router} from 'react-router-dom'
import {useAuth} from './hooks/auth.hook'
import {AuthContext} from './context/AuthContext'
import { Navbar } from './components/Navbar';
import {useRoutes} from './Routes'


function App() {
  const {key, login, logout, userId,} = useAuth()
  const isAuthenticated = !!key
  const Routes = useRoutes(isAuthenticated)

  return (
    <AuthContext.Provider value={{
      key, login, logout, userId, isAuthenticated
    }}>
      <Router>
      <div className="container1">
        <Navbar /> 
        {Routes}
        </div>
      </Router>
    </AuthContext.Provider>
  )
}

export default App