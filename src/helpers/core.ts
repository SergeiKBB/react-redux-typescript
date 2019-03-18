import {IInitialUserWithStatus, ISplitUsersToGroups, IUser} from "../interfaces/core";
import {STATUS} from "./constants";

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
    return STATUS[Math.floor(Math.random() * Math.floor(STATUS.length))];
}

export function splitUsersToGroups(users: IUser[]): ISplitUsersToGroups {
    const groups: { [index: string]: IUser[] } = {};
    STATUS.forEach(item => {
        groups[item] = []
    });
    users.forEach(user => {
        groups[user.status] = [...groups[user.status], user]
    });
    return groups;
}

export function changeStatusHelper(users: IInitialUserWithStatus[], id: string, status: string): IInitialUserWithStatus[] {
    return users.map(user => {
        if(user.login.uuid === id) {
            return {
                ...user,
                status
            }
        }
        return user
    })
}
