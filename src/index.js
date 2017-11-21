import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
  // Better to call the app <RockPaperScissors />
  <App />, document.getElementById('root'));
registerServiceWorker();
