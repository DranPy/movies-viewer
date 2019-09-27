import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import MainPage from 'pages/MainPage'
import DetailsPage from 'pages/DetailsPage'

import 'assets/stylesheets/application.sass'

const App = () => (
  <Router>
    <Switch>
      <Route component={DetailsPage} exect path="/movie/:id" />
      <Route component={MainPage} exect path="/" />
    </Switch>
  </Router>
)

export default App
