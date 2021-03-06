import React from 'react'
import { Route, Switch } from 'react-router-dom'
import Home from './Home'
import Login from './Login'
import Signup from './Signup'
import Restaurants from './Restaurants'
import  RestaurantInfo from './Restaurants components/RestaurantInfo'
import Cart from './Cart'
import Search  from './Search'


export default function Routes() {
    return (
        <div>
            <Switch>
            <Route path='/' exact render={() => <Home />} />
            <Route path='/login' exact render={(props) => <Login {...props}/>} />
            <Route path='/search' exact render={(props) => <Search {...props}/>} />
            <Route path='/signup' exact render={(props) => <Signup {...props} />} />
            <Route path='/restaurants' exact render={(props) => <Restaurants {...props} />} />
            <Route path='/restaurants/:name' exact render={(props) => <RestaurantInfo {...props} /> } />
            <Route path='/cart' exact render={(props) => <Cart {...props} /> } />
            </Switch>
        </div>
    )
}