const Input = (props) => {
    const {idFor, type, placeholder} = props;
    return (
        <input
            id={idFor}
            type={type}
            className="text-sm border rounded w-full py-2 px-3 text-slate-700"
            placeholder={placeholder}
        />
    );
}

export default Input