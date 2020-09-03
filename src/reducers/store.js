import { composeWithDevTools } from 'redux-devtools-extension';
import {
  applyMiddleware,
  createStore,
} from 'redux';
import ReduxThunk from 'redux-thunk';
import reducers from './rootReducer'; //Import the root reducer

const middleware = [ReduxThunk];

const enhancer = composeWithDevTools(applyMiddleware(...middleware));

const store = createStore(
  reducers,
  enhancer
);

export default store;
