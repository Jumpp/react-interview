import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import JavascriptTimeAgo from 'javascript-time-ago';

// The desired locales.
import en from 'javascript-time-ago/locale/en';

// Initialize the desired locales.
JavascriptTimeAgo.locale(en);

ReactDOM.render(<App />, document.getElementById('root'));
