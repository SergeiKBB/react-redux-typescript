export interface initialUser {
    name: {
        title: string,
        first: string,
        last: string
    },
    dob: {
        age: number
    },
    location: {
        city: string
    },
    picture: {
        thumbnail: string
    },
    login: {
        uuid: string
    }
}

export interface User {
    name: string,
    age: number,
    city: string,
    picture: string,
    id: string,
    status: number
}

export interface State {
    users: {
        list: initialUser[],
        isLoad: boolean
    }
}
