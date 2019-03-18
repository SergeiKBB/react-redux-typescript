export interface IInitialUser {
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

export interface IInitialUserWithStatus extends IInitialUser{
    status: string
}

export interface IUser {
    name: string,
    age: number,
    city: string,
    picture: string,
    id: string,
    status: string
}

export interface IUsersState {
    list: IInitialUserWithStatus[],
    isLoad: boolean
}

export interface IState {
    users: IUsersState
}

export interface ISplitUsersToGroups {
    [index: string]: IUser[]
}

export interface IUsersGroupsProps {
    groups: { [index: string]: IUser[] },
    onChangeStatus: (status: string, id: string) => void
}
