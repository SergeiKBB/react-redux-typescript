import React, {ChangeEvent, Component} from 'react';
import axios from "axios";
import UserList from "../views/usersList/userList";
import {filterUsersByCity, filterUsersByName, transformUser} from "../../helpers/core";
import Input from "../components/input/input";
import './home.css';

class Home extends Component {
    state = {
        users: [],
        filteredUsers: []
    };

    componentDidMount() {
        axios.get('https://randomuser.me/api/?nat=gb&results=5')
            .then(({data: {results}}) => {
                this.setState({
                    users: results.map(transformUser),
                    filteredUsers: results.map(transformUser)
                })
            })
    };

    filterByName = (event: ChangeEvent<HTMLInputElement>) => {
        const name = event.target.value;
        const { users } = this.state;

        this.setState({
            filteredUsers: filterUsersByName(users, name)
        })
    };

    filterByCity = (event: ChangeEvent<HTMLInputElement>) => {
        const city = event.target.value;
        const { users } = this.state;

        this.setState({
            filteredUsers: filterUsersByCity(users, city)
        })
    };

    render() {
        const { filteredUsers } = this.state;
        return (
            <div className='home'>
                <div className='filter'>
                    <Input label='Name' onChange={this.filterByName} />
                    <Input label='City' onChange={this.filterByCity} />
                </div>
                <UserList users={filteredUsers}/>
            </div>
        )
    }
}

export default Home;
