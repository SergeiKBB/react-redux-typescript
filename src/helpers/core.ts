import {initialUser, User} from "../interfaces/core";

export function filterUsers(users: User[], name: string, city: string) {
    return users
        ? users.filter(user => ((user.name).toLowerCase().includes(name.toLowerCase()) && (user.city).toLowerCase().includes(city.toLowerCase())))
        :[]
}

export function transformUser(user: initialUser) {
    return {
        name: `${user.name.title} ${user.name.first} ${user.name.last}`,
        age: user.dob.age,
        city: user.location.city,
        picture: user.picture.thumbnail,
        id: user.login.uuid
    }
}
