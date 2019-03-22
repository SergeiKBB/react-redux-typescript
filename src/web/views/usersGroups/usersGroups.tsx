import React from "react";
import {IUsersGroupsProps} from "../../../interfaces/core";
import UserCard from "../../components/userCard/userCard";
import './usersGroups.css';


const usersGroups = (props: IUsersGroupsProps) => {
    const {onChangeStatus, groups} = props;
    const groupsArray = Object.keys(groups);
    return (<div className='row'>
        {groupsArray.map(
            (status, i) => (
                <div className='col' key={status}>
                    <h4 className='status'>{status}</h4>
                    {groups[status].map(user =>
                        <UserCard
                            changeStatus={onChangeStatus}
                            user={user}
                            key={user.id}
                            disableLeftBtn={i === 0}
                            disableRightBtn={i === groupsArray.length - 1}
                        />)}
                </div>
            )
        )}
    </div>)
};

export default usersGroups;
