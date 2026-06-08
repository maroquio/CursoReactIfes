type BsTextareaProps = {
    id: string;
    label: string;
    className?: string;
    rows?: number;
    placeholder?: string;
}

function BsTextarea({ id, label, className, rows, placeholder }: BsTextareaProps) {
    return (
        <div className={`form-floating mb-3 ${className || ''}`}>
            <textarea
                id={id}
                className="form-control"
                rows={rows ?? 3}
                placeholder={placeholder}
            >
                <label htmlFor={id}>{label}</label>
            </textarea>
        </div>
    );
}
export default BsTextarea;