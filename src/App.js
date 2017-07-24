import React from 'react';
import ReactDOM from 'react-dom';
import Index from './app/components/index'
import registerServiceWorker from './registerServiceWorker';
import './app.css'

ReactDOM.render(<Index />, document.getElementById('root'));
registerServiceWorker();
