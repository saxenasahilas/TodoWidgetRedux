import { legacy_createStore as createStore} from 'redux'
import { applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import todoReducer from './reducers/todoReducers';
import { loadState, saveState } from './reducers/todoReducers';

const persistedState = loadState();

const store = createStore(
  todoReducer,
  persistedState,
  composeWithDevTools(applyMiddleware(/* add middleware if needed */))
);

// Subscribe to changes and save the state to local storage
store.subscribe(() => {
  saveState(store.getState());
});

export default store;
