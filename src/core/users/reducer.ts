import {handleActions} from "redux-actions";
import {getUsersBegin, getUsersSuccessful} from "./actions";

const initialState = {};

export default handleActions({
        [getUsersBegin.toString()]: (state) => state,
        [getUsersSuccessful.toString()]: (state, { payload }) => ({ ...state, list: payload})
    },
    initialState)
