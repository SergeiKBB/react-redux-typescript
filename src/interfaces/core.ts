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
    }
}

export interface User {
    name: string,
    age: number,
    city: string,
    picture: string
}


