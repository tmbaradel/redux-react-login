import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import { routerStateReducer as router } from 'redux-router';
import authReducer from './authReducer';


const rootReducer = combineReducers({
  router,
  authReducer,
  form: formReducer
});

export default rootReducer;
