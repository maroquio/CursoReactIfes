import React from 'react';

type BsInputProps = {
    id: string;
    type: string;
    label: string;
    className?: string;
    value?: string;
    onChange?: React.ChangeEventHandler<HTMLInputElement>;
};

function BsInput({
    type,
    id,
    label,
    className,
    value,
    onChange,
}: BsInputProps) {
    return (
        <div className={`form-floating mb-3 ${className || ''}`}>
            <input
                type={type}
                id={id}
                name={id}
                className="form-control"
                placeholder=" "
                value={value}
                onChange={onChange}
            />
            <label htmlFor={id}>{label}</label>
        </div>
    );
}

export default BsInput;