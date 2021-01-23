import React from 'react'
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';


import Navbar from './Components/Layouts/Navbar/Navbar'
import Users from './Components/Pages/User/User';
import AddUser from './Components/Pages/User/AddUser';
import UpdateUser from './Components/Pages/User/UpdateUser'
import PageNotFound from './Components/Pages/PageNotFound/PageNotFound'

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact path='/' component={Users} />
        <Route exact path='/adduser' component={AddUser} />
        <Route exact path='/updateuser/:id' component={UpdateUser} />
        <Route component={PageNotFound} />
      </Switch>
    </Router>
  )
}

export default App;
