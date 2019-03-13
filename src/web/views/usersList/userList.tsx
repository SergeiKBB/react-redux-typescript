import React, {Component} from 'react';
import UserCard from "../../components/userCard/userCard";
import {User} from "../../../interfaces/core";


export interface UsersListProps {
    users: User[]
}

class UserList extends Component<UsersListProps> {
    render() {
        const {users} = this.props;
        return users.map(user => <UserCard user={user}/>)
    }
}

export default UserList
