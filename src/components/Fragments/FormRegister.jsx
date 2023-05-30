import InputForm from "../Elements/Input";
import Button from "../Elements/Button";
import { Link } from "react-router-dom";

const FormRegister = () => {
    return (
        <form action="" className="space-y-4">
            <InputForm
                htmlFor="name"
                child="Name"
                idFor="name"
                type="text"
                placeholder="John Smith"
            />
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
            <InputForm
                htmlFor="re-passsword"
                child="Same Password"
                idFor="re-passsword"
                type="password"
                placeholder="********"
            />
            <Button bg="bg-blue-600" title="Sign Up" width="w-full"></Button>
            <p className="text-center">
                have an account?
                <Link
                    className="font-bold ml-1 cursor-pointer text-blue-500"
                    to="/login">
                    Login
                </Link>
            </p>
        </form>
    );
};

export default FormRegister;
