import React from 'react'
import { Route,Switch} from 'react-router-dom'
export const Content = () => {
  return (
    <Switch>
        <Route path='/range'>Range</Route>
        <Route path='/academy'>Academy</Route>
        <Route path='/drillclub'>Drillclub</Route>
        <Route path='/about'>about</Route>
        <Route path='/drillcut-tv'>drillcut-tv</Route>
        <Route path='/downloads'>Drillclub</Route>
        <Route path='/blog'>Blog</Route>
        <Route path='/contact'>Contact</Route>


    </Switch>   
  )
}
