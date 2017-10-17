import { combineReducers } from 'redux';
import fakeAuthReducer from './fakeAuth';

export const makeRootReducer = asyncReducers => {
  return combineReducers({
    logged: fakeAuthReducer,
    ...asyncReducers
  });
};

export const injectReducer = (store, { key, reducer }) => {
  if (Object.hasOwnProperty.call(store.asyncReducers, key)) return;

  store.asyncReducers[key] = reducer;
  store.replaceReducer(makeRootReducer(store.asyncReducers));
};

export default makeRootReducer;
