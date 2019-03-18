import React, {ChangeEvent, Component} from 'react';
import {Dispatch} from "redux";
import {connect} from "react-redux";
import {filterUsers, splitUsersToGroups} from "../../helpers/core";
import {IState, IUser} from '../../interfaces/core';
import Input from "../components/input/input";
import {changeStatus, getUsers} from "../../core/users/actions";
import {usersLoadingSelector, usersSelector} from "../../core/users/selectors";
import UsersGroups from "../views/usersGroups/usersGroups";
import './home.css';

export interface HomeProps {
    getUsers: () => void,
    users: IUser[],
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

    render() {
        const {name, city} = this.state;
        const {users, onChangeStatus} = this.props;
        const filteredUsers = filterUsers(users, name, city);
        const groups = splitUsersToGroups(filteredUsers);
        return (
            <div className='home'>
                <div className='filter'>
                    <Input label='Name' onChange={this.handleName}/>
                    <Input label='City' onChange={this.handleCity}/>
                </div>
                <UsersGroups groups={groups} onChangeStatus={onChangeStatus} />
            </div>
        )
    }
}

const mapStateToProps = (state: IState) => ({
    users: usersSelector(state),
    isLoad: usersLoadingSelector(state)
});

const mapDispatchToProps = (dispatch: Dispatch<any>) => ({
    getUsers: () => dispatch(getUsers()),
    onChangeStatus: (status: string, id: string) => dispatch(changeStatus({status, id}))
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);
