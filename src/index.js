import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import NavigationBar from './Components/NavigationBar';
import reportWebVitals from './reportWebVitals';
import Body from './Components/Body'
import Footer from './Components/Footer'

ReactDOM.render(
              <body>
                <NavigationBar />
                <Body />
                <Footer />
              </body>
              , document.getElementById('root'));

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
