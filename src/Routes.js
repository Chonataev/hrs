import React from 'react'
import {Switch,Route, Redirect} from 'react-router-dom'
import {Main} from './pages/Main'
import {Homes} from './pages/Homes'
import {Apartment} from './pages/Apartment'
import {SingUp} from './pages/SingUp'
import {Singin} from './pages/Singin'
import {Office} from './pages/Office'
import {DetailPage} from './pages/details'


export const useRoutes = isAuthenticated =>{
  if (isAuthenticated) {
   return (
      <Switch>
            <Route path="/" exact>
              <Main />
            </Route>

            <Route path="/homes" exact>
              <Homes />
            </Route>

            <Route path="/apartment" exact>
              <Apartment />
            </Route>

            <Route path="/office" exact>  
              <Office />
            </Route>

            <Route path="/detail/:id">
              <DetailPage />
            </Route>

            <Redirect to="/" />

      </Switch>
   )
  }
  return (
    <Switch>
          <Route path="/" exact>
            <Main />
          </Route>

          <Route path="/homes" exact>
            <Homes />
          </Route>

          <Route path="/apartment" exact>
            <Apartment />
          </Route>

          <Route path="/singup" exact>
            <SingUp />
          </Route>

          <Route path="/singin" exact>
            <Singin />
          </Route>
          <Route path="/singin" exact>
            <Singin />
          </Route>
          <Route path="/detail/:id">
          <DetailPage />
            </Route>
          <Redirect to="/singin" />
    </Switch>
 )
}