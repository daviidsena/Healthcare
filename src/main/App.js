import React from 'react';
import './App.css';
import { BrowserRouter } from 'react-router-dom' 
import Router from './Routes'
import Nav from '../components/nav/Nav'
import Footer from '../components/template/Footer'

export default props => 
      <BrowserRouter>
            <div className="App">
                  <Nav/>
                  <Router/>
                  <Footer/>
            </div>
      </BrowserRouter>
