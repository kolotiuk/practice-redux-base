import { createStore } from 'redux';
import { devToolsEnhancer } from '@redux-devtools/extension';
import reducer from './users/usersReducer';

// const initialState = {
//   users: [],
// };

// const addUserType = 'addUserType';
// payload це комірка в якій ми передаємо через action значення в reducer

// const reducer = (state = initialState, action) => {
//   if (action.type === addUserType) {
//     return { users: [...state.users, action.payload] };
//   }
//   return state;
// };

export const store = createStore(reducer, devToolsEnhancer());
