import React, {ChangeEvent, Component} from 'react';
import UserList from "../views/usersList/userList";
import {filterUsers} from "../../helpers/core";
import {State, User} from '../../interfaces/core';
import Input from "../components/input/input";
import './home.css';
import {connect} from "react-redux";
import {Dispatch} from "redux";
import {getUsers} from "../../core/users/actions";
import {usersSelector} from "../../core/users/selectors";

export interface HomeProps {
    getUsers: () => any,
    users: any
}

class Home extends Component<HomeProps> {
    state = {
        name: '',
        city: ''
    };

    componentDidMount() {
        const { getUsers } = this.props;
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
        const { name, city } = this.state;
        const { users } = this.props;
        const filteredUsers = filterUsers(users, name, city);
        return (
            <div className='home'>
                <div className='filter'>
                    <Input label='Name' onChange={this.handleName} />
                    <Input label='City' onChange={this.handleCity} />
                </div>
                <UserList users={filteredUsers}/>
            </div>
        )
    }
}

const mapStateToProps = (state: State) => ({
    users: usersSelector(state)
});

const mapDispatchToProps = (dispatch: Dispatch<any>) => ({
    getUsers: () => dispatch(getUsers())
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);
