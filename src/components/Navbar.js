import React, {useContext} from 'react'
import {NavLink, useHistory} from 'react-router-dom'
import {AuthContext} from '../context/AuthContext'

export const Navbar = () =>{

  const history = useHistory()
   let auth = useContext(AuthContext)

  const logoutHandler = event => {
    event.preventDefault()
    auth.logout()
    history.push('/')
  }
  if(!auth.isAuthenticated){
      return (
         <div className='navBar'>
            <nav className='nav'>
            <h1 className='h1'>
            DEEP HAUSE
            </h1>
                  <ul className='ul'>
                     <li className='li'>
                     <NavLink
                        to="/"
                        className='navLink home'
                     >
                        Главная
                     </NavLink>
                     </li>
                     <li className='li'>
                     <NavLink
                        to="/apartment"
                        className='navLink apartment'
                     >
                        Квартиры
                     </NavLink>
                     </li>
                     <li className='li'>
                     <NavLink
                        to="/homes"
                        className='navLink'
                     >
                     Дома
                     </NavLink>
                     </li>
                     <li className='li'>
                     <NavLink
                        to="/singin"
                        className='navLink apartment'
                     >
                     Войти
                     </NavLink>
                     </li>
                      <button className='btn'>
                        <NavLink  className='navLink singIn'
                           to="/singup"
                        >
                        Регистрация
                        </NavLink>
                     </button>
                     
                  </ul> 
            </nav>
         </div>
      )
  }
  else{
   return (
      <div className='navBar'>
         <nav className='nav'>
         <h1 className='h1'>
         DEEP HAUSE
         </h1>
         <ul className='ul'>
               <li className='li'>
               <NavLink
                  to="/"
                  className='navLink home'
               >
                  Главная
               </NavLink>
               </li>
               <li className='li'>
               <NavLink
                  to="/apartment"
                  className='navLink apartment'
               >
                  Квартиры
               </NavLink>
               </li>
               <li className='li'>
               <NavLink
                  to="/homes"
                  className='navLink'
               >
               Дома
               </NavLink>
               </li>
               <li className='li'>
               <NavLink
                  to="/office"
                  className='navLink apartment'
               >
                  Личный кабинет
               </NavLink>
               </li>
               <button className='btn'>
                  <NavLink  className='navLink singIn'
                     onClick={logoutHandler}
                     to="/"
                  >
                  Выйти
                  </NavLink>
               </button>
               
            </ul> 
         </nav>
      </div>
   )
  }
}
