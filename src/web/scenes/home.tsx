import React, {ChangeEvent, Component} from 'react';
import axios from "axios";
import UserList from "../views/usersList/userList";
import {filterUsers, transformUser} from "../../helpers/core";
import Input from "../components/input/input";
import './home.css';

class Home extends Component {
    state = {
        users: [],
        name: '',
        city: ''
    };

    componentDidMount() {
        axios.get('https://randomuser.me/api/?nat=gb&results=5')
            .then(({data: {results}}) => {
                this.setState({
                    users: results.map(transformUser),
                    filteredUsers: results.map(transformUser)
                })
            })
            .catch(error => console.log(error))
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
        const { users, name, city } = this.state;
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

export default Home;
