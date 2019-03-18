import {initialUser, initialUserWithStatus, User} from "../interfaces/core";
import {STATUS} from "./constants";

export function filterUsers(users: User[], name: string, city: string): User[] {
    return users
        ? users.filter(user => ((user.name).toLowerCase().includes(name.toLowerCase()) && (user.city).toLowerCase().includes(city.toLowerCase())))
        : []
}

export function transformUser(user: initialUserWithStatus): User {
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

export function splitUsersToGroups(users: User[]): { [index: string]: User[] } {
    const groups: { [index: string]: User[] } = {};
    STATUS.forEach(item => {
        groups[item] = []
    });
    users.forEach(user => {
        groups[user.status] = [...groups[user.status], user]
    });
    return groups;
}

export function changeStatusHelper(users: initialUserWithStatus[], id: string, status: string): initialUserWithStatus[] {
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