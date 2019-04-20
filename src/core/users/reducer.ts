import {handleActions, ReducerMap} from "redux-actions";
import {changeStatus, getUsersBegin, getUsersError, getUsersSuccessful} from "./actions";
import {changeStatusHelper} from "../../helpers/core";
import {IUsersState} from "../../interfaces/core";


const initialState: IUsersState = {
    list: [],
    isLoad: false
};

const reducer: ReducerMap<IUsersState, any> = {
    [getUsersBegin.toString()]: (state) => ({...state, isLoad: true}),
    [getUsersSuccessful.toString()]: (state, {payload}) => ({...state, list: payload, isLoad: false}),
    [getUsersError.toString()]: (state, {payload}) => ({...state, error: payload}),
    [changeStatus.toString()]: (state, {payload}) => {
        const {id, status} = payload;
        const list = changeStatusHelper(state.list, id, status);
        return {
            ...state,
            list
        }
    }
};

export default handleActions(reducer, initialState);
