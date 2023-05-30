import Input from "./Input";
import Label from "./Label";

const InputForm = (props) => {
    const { htmlFor, child, idFor, type, placeholder } = props;
    return (
        <div className="">
            <Label htmlFor={htmlFor} child={child}/>
            <Input idFor={idFor} type={type} placeholder={placeholder} />
        </div>
    );
};

export default InputForm;
