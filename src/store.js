import { combineReducers, createStore } from 'redux';

const initialStateAccount = {
  balance: 0,
  loan: 0,
  loanPurpose: '',
};

const initialStateCustomer = {
  fullName: '',
  nationalId: '',
  createdAt: '',
};

function accountReducer(state = initialStateAccount, action) {
  switch (action.type) {
    case 'account/deposit':
      return { ...state, balance: state.balance + action.payload };
    case 'account/withdraw':
      return { ...state, balance: state.balance - action.payload };
    case 'account/requestLoan':
      if (state.loan > 0) return;
      return {
        ...state,
        balance: state.balance + action.payload.amount,
        loan: action.payload.amount,
        loanPurpose: action.payload.purpose,
      };
    case 'account/payLoan':
      return { ...state, loan: 0, loanPurpose: '', balance: state.balance - state.loan };
    default:
      return state;
  }
}

function customerReducer(state = initialStateCustomer, action) {
  switch (action.type) {
    case 'customer/createCustomer':
      return {
        ...state,
        fullName: action.payload.fullName,
        nationalId: action.payload.nationalId,
        createdAt: new Date().toISOString(),
      };
    case 'customer/updateName':
      return { ...state, fullName: action.payload };

    default:
      return state;
  }
}

const combinedReducer = combineReducers({
  account: accountReducer,
  customer: customerReducer,
});

const store = createStore(combinedReducer);

// // without action creators --> and thats okay
// store.dispatch({ type: 'account/deposit', payload: 500 });
// console.log(store.getState());

// store.dispatch({ type: 'account/withdraw', payload: 300 });
// console.log(store.getState());

// store.dispatch({ type: 'account/requestLoan', payload: { amount: 1000, purpose: 'Buy a car' } });
// console.log(store.getState());

// store.dispatch({ type: 'account/payLoan' });
// console.log(store.getState());

// With action creators

function deposit(amount) {
  return { type: 'account/deposit', payload: amount };
}
function withdraw(amount) {
  return { type: 'account/withdraw', payload: amount };
}
function requestLoan(amount, purpose) {
  return { type: 'account/requestLoan', payload: { amount, purpose } };
}
function payLoan() {
  return { type: 'account/payLoan' };
}

store.dispatch(deposit(500));
console.log(store.getState());

store.dispatch(withdraw(300));
console.log(store.getState());

store.dispatch(requestLoan(1000, 'Buy a car'));
console.log(store.getState());

store.dispatch(payLoan());
console.log(store.getState());

// with action creators

function createCustomer(fullName, nationalId) {
  return { type: 'customer/createCustomer', payload: { fullName, nationalId } };
}

function updateName(fullName) {
  return { type: 'customer/updateName', payload: fullName };
}

store.dispatch(createCustomer('Youssef Yasser', '12345'));
console.log(store.getState());

store.dispatch(updateName('Ahmed Yasser'));
console.log(store.getState());
