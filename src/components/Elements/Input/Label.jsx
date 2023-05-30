const Label = (props) => {
    const { htmlFor, child} = props;
    return (
        <label
            htmlFor={htmlFor}
            className="block text-slate-700 text-sm font-bold my-2">
            {child}
        </label>
    );
}

export default Label;