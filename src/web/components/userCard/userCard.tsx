import React, {Component} from 'react';
import './userCard.css';
import {User} from "../../../interfaces/core";



interface UserCardProps {
    user: User,
    disableLeftBtn: boolean
    disableRightBtn: boolean
}

class UserCard extends Component<UserCardProps> {
    render() {
        const {user: {name, age, city, picture, id}, disableLeftBtn, disableRightBtn} = this.props;
        return (
            <div className="card mb-3 card__wrapper">
                <div className="row no-gutters">
                    <div className="col-md-3">
                        <img src={picture} className="card-img img mt-4" alt="..."/>
                    </div>
                    <div className="col-md-9">
                        <div className="card-body">
                            <h5 className="card-title">{name}</h5>
                            <p className="card-text m-0">Age: {age}</p>
                            <p className="card-text m-0">City: {city}</p>
                        </div>
                    </div>
                </div>
                <div className="btn-group" role="group" aria-label="Basic example">
                    <button type="button" className="btn btn-secondary">{disableLeftBtn ? null : <i className="fas fa-caret-left" />}</button>
                    <button type="button" className="btn btn-secondary">{disableRightBtn ? null : <i className="fas fa-caret-right" />}</button>
                </div>
            </div>
        )
    }
}

export default UserCard
