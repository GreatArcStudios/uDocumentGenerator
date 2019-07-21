import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

window.RenderApp = (config, acknowledgments, description, userInformation, gettingStarted) => {
	ReactDOM.render(<App _config={config} _acknowledgements={acknowledgments} _description={description}
	                     _userInfo={userInformation}
	                     _gettingStarted={gettingStarted}/>, document.getElementById('root'));
};


// ReactDOM.render(<App/>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.register();
