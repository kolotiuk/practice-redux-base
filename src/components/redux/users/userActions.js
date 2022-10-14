import { addUserType, delUserType } from './userType';

export const addUser = user => ({ type: addUserType, payload: user });
export const delUser = user => ({ type: delUserType, payload: user });
