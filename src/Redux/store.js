import { createStore, compose, applyMiddleware } from 'redux';
import { pollsReducer, initialState } from './pollReducers';
import createRootReducer from './reducerIndex';
import thunk from 'redux-thunk';

export const configureStore = (initialState) => {
  const composeEnhancer =
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
  const store = createStore(
    createRootReducer,
    initialState,
    composeEnhancer(applyMiddleware(thunk))
  );
  return store;
};
