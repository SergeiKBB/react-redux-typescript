import React, {ChangeEvent} from 'react';
import './input.css';

export interface InputProps {
    label: string,
    onChange: (event: ChangeEvent<HTMLInputElement>) => void
}

const Input = (props: InputProps) => {
    const { label, onChange } = props;
    return (
        <div className="input-group mb-2 mt-2 pl-2 pr-2">
            <div className="input-group-prepend">
                <div className="input-group-text">{label}</div>
            </div>
            <input type="text" onChange={onChange} className="form-control" id="inlineFormInputGroup" />
        </div>
    )
};

export default Input
