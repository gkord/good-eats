import React from 'react';
import ReactDOM from 'react-dom';
import App from './containers/App';
import RestaurantList from './components/RestaurantList/RestaurantList';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store/store';
import GlobalStyles from './GlobalStyles';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <Route exact path='/' component={App} />
        <Route path='/results' component={RestaurantList} />
        <GlobalStyles />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

serviceWorker.unregister();
