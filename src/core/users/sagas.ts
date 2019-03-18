import { put, takeLatest, call } from 'redux-saga/effects';
import {getUsers, getUsersBegin, getUsersSuccessful, getUsersError} from './actions';
import { fetchUsers } from '../../helpers/api';
import { getRndStatus } from '../../helpers/core';
import {initialUserWithStatus} from "../../interfaces/core";

export function* getUsersAsync(): IterableIterator<any> {
    try {
        yield put(getUsersBegin());
        const { data } = yield call(fetchUsers);
        const users = data.results;
        const usersWithStatus = users.map( (user: initialUserWithStatus) => {
            user.status = getRndStatus();
            return user
        });
        yield put(getUsersSuccessful(usersWithStatus))
    } catch (e) {
        yield put(getUsersError(e));
    }
}

export function* watchGetUsers() {
    yield takeLatest([getUsers], getUsersAsync)
}
