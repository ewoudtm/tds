import { createStore, compose, applyMiddleware } from "redux";
import ReduxThunk from 'redux-thunk'
import rootReducer from './reducers'

const devTools = window.devToolsExtension ? window.devToolsExtension() : (f) => f

const enhancer = compose(
  applyMiddleware(ReduxThunk),
  devTools
)

const store = createStore(rootReducer, enhancer);
console.log(store.getState());
export default store;
