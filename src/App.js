import React, { Component } from 'react'
import { BrowserRouter, Route, Switch} from "react-router-dom"

import Navbar from "./components/Navbar"
import Home from './components/Home'
import About from './components/About'
import post1 from './components/post1'
import Post from './components/Post'




export class App extends Component {
  render() {
    return (
      <BrowserRouter >
      <div className="App">
      <Navbar />
      <Switch>
      <Route exact path='/' component={Home}/>
      <Route path='/about' component={About}/>
      <Route path='/post1' component={post1}/>
      <Route path="/posts/:post_id" component={Post} />
      </Switch>
      </div>
      </BrowserRouter>
    )
  }
}

export default App
