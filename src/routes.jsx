import React from 'react'
import { Switch, Route, BrowserRouter, Redirect } from 'react-router-dom'
import Home from './pages/Home'
import CreationPage from './pages/CreationPage'
import EditPage from './pages/EditPage'

const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route
          exact path="/home"
          component={Home} />
        <Route
          exact path="/create"
          component={CreationPage} />
        <Route
          exact path="/edit"
          component={EditPage} />

        <Redirect to="/home" />
      </Switch>
    </BrowserRouter>
  )
}

export default Routes
