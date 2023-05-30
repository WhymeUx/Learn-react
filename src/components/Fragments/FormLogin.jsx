import InputForm from "../Elements/Input";
import Button from "../Elements/Button";
import { Link } from "react-router-dom";

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
            <p className="text-center">
                Dont have an account?
                <Link
                    className="font-bold ml-1 cursor-pointer text-blue-500"
                    to="/register">
                    Sign Up
                </Link>
            </p>
        </form>
    );
};

export default FormLogin;
