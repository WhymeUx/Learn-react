import InputForm from "../Elements/Input";
import Button from "../Elements/Button";

const FormLogin = () => {
    return (
        <form action="" className="space-y-4">
            <InputForm
                htmlFor="email"
                child="Email"
                idFor="email"
                type="email"
                placeholder="example@gmail.com"
            />
            <InputForm
                htmlFor="passsword"
                child="Password"
                idFor="passsword"
                type="passsword"
                placeholder="********"
            />
            <Button bg="bg-blue-600" title="Login" width="w-full"></Button>
        </form>
    );
}

export default FormLogin;