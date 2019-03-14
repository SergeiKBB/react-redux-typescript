import {State} from "../../interfaces/core";
import {transformUser} from "../../helpers/core";

export const usersSelector = (state: State) => {
    const { users: { list } } = state;
    return list ? list.map(transformUser) : []
};
