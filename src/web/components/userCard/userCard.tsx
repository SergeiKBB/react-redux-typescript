import React, {Component} from 'react';
import './userCard.css';
import {IUser} from "../../../interfaces/core";
import {STATUS} from "../../../helpers/constants";



interface UserCardProps {
    user: IUser,
    disableLeftBtn: boolean
    disableRightBtn: boolean,
    changeStatus: (status: string, id: string) => void,
}

class UserCard extends Component<UserCardProps> {

    moveTo = (status: string, action: number): string => {
      const indexCurrentStatus = STATUS.indexOf(status);
      return STATUS[indexCurrentStatus + action];
    };

    render() {
        const {user: {name, age, city, picture, id, status}, disableLeftBtn, disableRightBtn, changeStatus} = this.props;
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
                    {disableLeftBtn
                        ?  <button type="button" className="btn btn-secondary">{null}</button>
                        : <button type="button" className="btn btn-secondary" onClick={() => changeStatus(this.moveTo(status,-1), id)}><i className="fas fa-caret-left" /></button>}
                    {disableRightBtn
                        ? <button type="button" className="btn btn-secondary">{null}</button>
                        : <button type="button" className="btn btn-secondary" onClick={() => changeStatus(this.moveTo(status,1), id)}>{disableRightBtn ? null : <i className="fas fa-caret-right" />}</button>}
                </div>
            </div>
        )
    }
}

export default UserCard
