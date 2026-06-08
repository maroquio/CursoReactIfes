type BsInputProps = {
    id: string;
    type: string;
    label: string;
    className?: string;
}

function BsInput({ type, id, label, className }: BsInputProps) {
    return (
        <div className={`form-floating mb-3 ${className || ''}`}>
            <input type={type} className="form-control" id={id} name={id} placeholder=" ">
                <label htmlFor={id}>{label}</label>
            </input>
        </div>
    );
}

export default BsInput;