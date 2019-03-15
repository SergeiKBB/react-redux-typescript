import {handleActions} from "redux-actions";
import {getUsersBegin, getUsersError, getUsersSuccessful} from "./actions";

const initialState = {
    isLoad: false
};

export default handleActions({
        [getUsersBegin.toString()]: (state) => ({...state, isLoad: true}),
        [getUsersSuccessful.toString()]: (state, {payload}) => ({...state, list: payload, isLoad: false}),
        [getUsersError.toString()]: (state, {payload}) => ({...state, error: payload})
    },
    initialState)
