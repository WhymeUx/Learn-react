const Button = (props) => {
    const { title = "Default", bg = "bg-yellow-600", width } = props;
    return (
        <button
            className={`${bg} ${width} text-white border p-1 px-2 rounded-lg`}
            type="submit">
            {title}
        </button>
    );
};

export default Button;