import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';

import 'tachyons';	// CSS file. OK to import once
import Card from './Card';
import {robots} from './robots';	// non-default export

ReactDOM.render(<Card id={robots[0].id} name={robots[0].name} email={robots[0].email}/>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change unregister() to register() below. Note this comes with some pitfalls. Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
