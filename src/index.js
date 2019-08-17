import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';

import 'tachyons';	// CSS file. OK to import once
import App from './App'

ReactDOM.render(<App />, document.getElementById('root'));	// robots is an array of objects

// If you want your app to work offline and load faster, you can change unregister() to register() below. Note this comes with some pitfalls. Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
