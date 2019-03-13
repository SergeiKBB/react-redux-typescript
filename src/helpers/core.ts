import {initialUser, User} from "../interfaces/core";

export function filterUsersByName(users: User[], name: string) {
    return users.filter(user => ~user.name.indexOf(name))
}

export function filterUsersByCity(users: User[], city: string) {
    return users.filter(user => ~user.city.indexOf(city))
}

export function transformUser(user: initialUser) {
    return {
        name: `${user.name.title} ${user.name.first} ${user.name.last}`,
        age: user.dob.age,
        city: user.location.city,
        picture: user.picture.thumbnail
    }
}
