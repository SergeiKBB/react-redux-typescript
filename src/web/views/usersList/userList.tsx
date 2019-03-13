import React from 'react';
import UserCard from "../../components/userCard/userCard";
import {User} from "../../../interfaces/core";

function UserList({users}: {users: User[]}) {
    return <React.Fragment>
        {users.map(user => <UserCard user={user} key={user.id}/>)}
    </React.Fragment>
}

export default UserList
