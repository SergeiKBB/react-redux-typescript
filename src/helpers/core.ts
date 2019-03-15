import {initialUser, User} from "../interfaces/core";
import {STATUS} from "./constants";

export function filterUsers(users: User[], name: string, city: string): User[] {
    return users
        ? users.filter(user => ((user.name).toLowerCase().includes(name.toLowerCase()) && (user.city).toLowerCase().includes(city.toLowerCase())))
        : []
}

export function transformUser(user: initialUser): User {
    return {
        name: `${user.name.title} ${user.name.first} ${user.name.last}`,
        age: user.dob.age,
        city: user.location.city,
        picture: user.picture.thumbnail,
        id: user.login.uuid,
        status: getRndStatus()
    }
}

function getRndStatus(): number {
    return Math.floor(Math.random() * Math.floor(STATUS.length));
}

export function splitUsersToGroups(users: User[]): { [index: string]: User[] } {
    const groups: { [index: string]: User[] } = {};
    STATUS.forEach(item => {
        groups[item] = []
    });
    users.forEach(user => {
        groups[STATUS[user.status]] = [...groups[STATUS[user.status]], user]
    });
    return groups;
}
