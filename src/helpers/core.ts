import {IInitialUserWithStatus, ISplitUsersToGroups, IUser} from "../interfaces/core";
import {STATUSES} from "./constants";

export function filterUsers(users: IUser[], name: string, city: string): IUser[] {
    return users
        ? users.filter(user => ((user.name).toLowerCase().includes(name.toLowerCase()) && (user.city).toLowerCase().includes(city.toLowerCase())))
        : []
}

export function transformUser(user: IInitialUserWithStatus): IUser {
    return {
        name: `${user.name.title} ${user.name.first} ${user.name.last}`,
        age: user.dob.age,
        city: user.location.city,
        picture: user.picture.thumbnail,
        id: user.login.uuid,
        status: user.status
    }
}

export function getRndStatus(): string {
    return STATUSES[Math.floor(Math.random() * Math.floor(STATUSES.length))];
}

export function splitUsersToGroups(users: IUser[]): ISplitUsersToGroups {
    const groups: { [index: string]: IUser[] } = {};
    STATUSES.forEach(item => {
        groups[item] = []
    });
    return users.reduce((prev: { [index: string]: IUser[] }, current: IUser): any => {
        return {...prev, [current.status]: [...prev[current.status], current]}
    }, groups);
}

export function changeStatusHelper(users: IInitialUserWithStatus[], id: string, status: string): IInitialUserWithStatus[] {
    return users.map(user => user.login.uuid === id ? { ...user, status } : user);
}
