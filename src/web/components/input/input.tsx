import React, {ChangeEvent} from 'react';

export interface InputProps {
    label: string,
    onChange: (event: ChangeEvent<HTMLInputElement>) => void
}

const Input = ({label, onChange}: InputProps) => {
    return (
        <div className="input-group mb-2 mt-2 pl-2 pr-2">
            <div className="input-group-prepend">
                <div className="input-group-text">{label}</div>
            </div>
            <input type="text" onChange={onChange} className="form-control" />
        </div>
    )
};

export default Input
