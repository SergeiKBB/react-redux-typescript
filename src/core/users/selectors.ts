import {IState, IUser} from "../../interfaces/core";
import {transformUser} from "../../helpers/core";

export const usersSelector = (state: IState): IUser[] => {
    const { users: { list } } = state;
    return list ? list.map(transformUser) : []
};

export const usersLoadingSelector = (state: IState): boolean => state.users.isLoad;
