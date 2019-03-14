import { fork } from 'redux-saga/effects';
import {watchGetUsers} from "./core/users/sagas";


export default function* rootSaga(): IterableIterator<any> {
    yield fork(watchGetUsers)
}
