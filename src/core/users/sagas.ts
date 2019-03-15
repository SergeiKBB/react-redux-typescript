import { put, takeLatest, call } from 'redux-saga/effects';
import {getUsers, getUsersBegin, getUsersSuccessful, getUsersError} from './actions';
import { fetchUsers } from '../../helpers/api';

export function* getUsersAsync(): IterableIterator<any> {
    try {
        yield put(getUsersBegin());
        const { data } = yield call(fetchUsers);
        const users = data.results;
        yield put(getUsersSuccessful(users))
    } catch (e) {
        yield put(getUsersError(e));
    }
}

export function* watchGetUsers() {
    yield takeLatest([getUsers], getUsersAsync)
}
