type BsSelectOption = {
    value: string;
    label: string;
}

type BsSelectProps = {
    id: string;
    label: string;
    className?: string;
    options: BsSelectOption[];
}

function BsSelect({ id, label, className, options }: BsSelectProps) {
    return (
        <div className={`form-floating mb-3 ${className || ''}`}>
            <select className="form-control" id={id} name={id}>
                {options.map(option => (
                    <option key={option.value} value={option.value}>
                        {option.label}
                    </option>
                ))}
            </select>
            <label htmlFor={id}>{label}</label>
        </div>
    );
}

export default BsSelect;