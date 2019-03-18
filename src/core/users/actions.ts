import {createAction} from "redux-actions";

export const  getUsers = createAction('GET_USERS');
export const  getUsersBegin = createAction('GET_USERS_BEGIN');
export const  getUsersSuccessful = createAction('GET_USERS_SUCCESSFUL');
export const  getUsersError = createAction('GET_USERS_ERROR');

export const changeStatus = createAction('CHANGE_STATUS');
