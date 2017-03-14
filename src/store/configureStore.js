import { createStore, compose, applyMiddleware } from 'redux';
import { reduxReactRouter } from 'redux-router';
import { createHashHistory as createHistory } from 'history';
import { config } from '../config/config';
import thunk from 'redux-thunk';
import routes from '../config/routes';
import rootReducer from '../reducers/rootReducer';

export default function configureStore(initialState) {
  const finalCreateStore = compose(
      applyMiddleware(
        thunk
      ),
      reduxReactRouter({
        routes,
        createHistory
      }),
      (window.devToolsExtension && config().devTool) ? window.devToolsExtension() : f => f
  )(createStore);

  const store = finalCreateStore(rootReducer, initialState);

  return store;
}
