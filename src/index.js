import React from 'react';
import ReactDOM from 'react-dom';
import '../node_modules/reset-css/sass/_reset.scss';
import './index.scss';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
