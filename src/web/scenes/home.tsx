import React, {ChangeEvent, Component} from 'react';
import {filterUsers, splitUsersToGroups} from "../../helpers/core";
import {State, User} from '../../interfaces/core';
import Input from "../components/input/input";
import './home.css';
import {connect} from "react-redux";
import {Dispatch} from "redux";
import {changeStatus, getUsers} from "../../core/users/actions";
import {usersLoadingSelector, usersSelector} from "../../core/users/selectors";
import UserCard from "../components/userCard/userCard";

export interface HomeProps {
    getUsers: () => void,
    users: User[],
    isLoad: boolean,
    onChangeStatus: (status: string, id: string) => void
}

class Home extends Component<HomeProps> {
    state = {
        name: '',
        city: '',
        groups: {}
    };

    componentDidMount() {
        const {getUsers} = this.props;
        getUsers();
    };

    handleName = (event: ChangeEvent<HTMLInputElement>) => {
        const name = event.target.value;
        this.setState({name})
    };

    handleCity = (event: ChangeEvent<HTMLInputElement>) => {
        const city = event.target.value;
        this.setState({city})
    };

    renderGroups = (groups: { [index: string]: User[] }) => {
        const { onChangeStatus } = this.props;
        const groupsArray = Object.keys(groups);
        return (<div className='row'>
            {groupsArray.map(
                (status, i) => (
                    <div className='col' key={status}>
                        <h4>{status.toUpperCase()}</h4>
                        {groups[status].map(user =>
                            <UserCard
                                changeStatus={onChangeStatus}
                                user={user} key={user.id}
                                disableLeftBtn={i === 0}
                                disableRightBtn={i === groupsArray.length - 1}
                            />)}
                    </div>
                )
            )}
        </div>)
    };

    render() {
        const {name, city} = this.state;
        const {users} = this.props;
        const filteredUsers = filterUsers(users, name, city);
        const groups = splitUsersToGroups(filteredUsers);
        return (
            <div className='home'>
                <div className='filter'>
                    <Input label='Name' onChange={this.handleName}/>
                    <Input label='City' onChange={this.handleCity}/>
                </div>
                {this.renderGroups(groups)}
            </div>
        )
    }
}

const mapStateToProps = (state: State) => ({
    users: usersSelector(state),
    isLoad: usersLoadingSelector(state)
});

const mapDispatchToProps = (dispatch: Dispatch<any>) => ({
    getUsers: () => dispatch(getUsers()),
    onChangeStatus: (status: string, id: string) => dispatch(changeStatus({status, id}))
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);
