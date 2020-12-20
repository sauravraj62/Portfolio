import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import NavigationBar from './Components/NavigationBar';
import reportWebVitals from './reportWebVitals';
import Body from './Components/Body'
import Tour from './Components/Tour'
import Footer from './Components/Footer'
import {Route, BrowserRouter as Router, Switch} from 'react-router-dom'

ReactDOM.render(
              <Router>
                <body>
                  <NavigationBar />
                  <Switch>
                    <Route path="/" exact component={Body} />
                    <Route path="/tour" exact component={Tour} />
                  </Switch>
                  <Footer />
                </body>
              </Router>
              , document.getElementById('root'));

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
