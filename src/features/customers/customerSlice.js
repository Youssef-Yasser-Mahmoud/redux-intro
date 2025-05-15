import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  fullName: '',
  nationalId: '',
  createdAt: '',
};

const customerSlice = createSlice({
  name: 'customer',
  initialState,
  reducers: {
    createCustomer: {
      prepare(fullName, nationalId) {
        return {
          payload: { fullName, nationalId},
        };
      },
      reducer(state, action) {
        state.fullName = action.payload.fullName;
        state.nationalId = action.payload.nationalId;
        state.createdAt = new Date().toISOString();
      },
    },
    updateName(state, action) {
      state.fullName = action.payload;
    },
  },
});

export default customerSlice.reducer;
export const { createCustomer, updateName } = customerSlice.actions;

// OLD syntax of using REDUX

/* export default function customerReducer(state = initialState, action) {
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

export function createCustomer(fullName, nationalId) {
  return { type: 'customer/createCustomer', payload: { fullName, nationalId } };
}

export function updateName(fullName) {
  return { type: 'customer/updateName', payload: fullName };
} */
