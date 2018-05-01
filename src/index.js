import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import {Router, Route, browserHistory } from 'react-router';
import LogIn from './loginScreen';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import reducers from 'reducers';
import { syncHistoryWithStore } from 'react-router-redux'
import thunk from 'redux-thunk'

const store = createStore(reducers, composeWithDevTools(
    applyMiddleware(thunk)
  ))

const history = syncHistoryWithStore(browserHistory, store)

ReactDOM.render(
    // <App />
    <Provider store={store} >
        <Router history={history} >
            {/* <Route component={Layout} /> */} */}
                <Route path='/' component={LogIn} />
                <Route path='/users/:userId' />
        </Router>
    </Provider>,
     document.getElementById('root')
);

registerServiceWorker();
