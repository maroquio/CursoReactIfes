import React from 'react';

type BsTextareaProps = {
    id: string;
    label: string;
    className?: string;
    rows?: number;
    placeholder?: string;
    value?: string;
    onChange?: React.ChangeEventHandler<HTMLTextAreaElement>;
};

function BsTextarea({
    id,
    label,
    className,
    rows,
    placeholder,
    value,
    onChange,
}: BsTextareaProps) {
    return (
        <div className={`form-floating mb-3 ${className || ''}`}>
            <textarea
                id={id}
                className="form-control"
                rows={rows ?? 3}
                placeholder={placeholder}
                value={value}
                onChange={onChange}
            >
                <label htmlFor={id}>{label}</label>
            </textarea>
        </div>
    );
}

export default BsTextarea;