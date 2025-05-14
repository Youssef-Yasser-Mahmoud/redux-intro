import { combineReducers, createStore } from 'redux';
import accountReducer from './features/accounts/accountSlice';
import customerReducer from './features/customers/customerSlice';

const combinedReducer = combineReducers({
  account: accountReducer,
  customer: customerReducer,
});

const store = createStore(combinedReducer);

export default store;
