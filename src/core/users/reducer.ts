import {handleActions} from "redux-actions";
import {changeStatus, getUsersBegin, getUsersError, getUsersSuccessful} from "./actions";
import {changeStatusHelper} from "../../helpers/core";
import {UsersState} from "../../interfaces/core";



const initialState: UsersState = {
    list: [],
    isLoad: false
};

export default handleActions({
        [getUsersBegin.toString()]: (state) => ({...state, isLoad: true}),
        [getUsersSuccessful.toString()]: (state, {payload}) => ({...state, list: payload, isLoad: false}),
        [getUsersError.toString()]: (state, {payload}) => ({...state, error: payload}),
        [changeStatus.toString()]: (state, {payload}) => {
            const {id, status} = payload;
            const list = changeStatusHelper(state.list, payload.id, payload.status);
            return {
                ...state,
                list
            }
        }
    },
    initialState)
