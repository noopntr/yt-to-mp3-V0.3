import React from "react";
import { BrowserRouter as Router, Switch, Route, Link, useLocation } from 'react-router-dom'
import "./App.css";
import Footer from "./Footer";
import HomePage from './HomePage'
import Faq from './Faq'
import About from './About'

function App() {

  const NoMatch = () => {
    const { pathname } = useLocation()

    return <h1 style={{display: 'flex', justifyContent: 'center', padding: '100px'}}>404 Page {'-->'} <code> {pathname} </code> Not Found</h1> 
  }

  return (
    <Router>
      <div className="app__navbar">
        <h1>Youtube Video/MP3 Convertor</h1>
      </div>

      <div className='navigation'>
        <div className='container-ul'>
          <ul>
            <li><Link to='/'>Home</Link></li>
            <li><Link to='/faq'>FAQ</Link></li>
            <li><Link to='/about'>About</Link></li>
          </ul>
        </div> 
      </div>
      <Switch>
      <Route path='/' exact component={HomePage}></Route>
      <Route path='/about' component={About}></Route>
      <Route path='/faq' component={Faq}></Route>
      
      <Route path='*'>
        <NoMatch />
      </Route> 
      </Switch>
      <Footer></Footer>
    </Router>
  );
}


export default App;
