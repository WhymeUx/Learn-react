import FormLogin from "../components/Fragments/FormLogin";
import AuthLayouts from "../components/Layouts/AuthLayouts";

const Login = () => {
    return (
        <AuthLayouts title="Login" subtitle="Login">
            <FormLogin></FormLogin>
        </AuthLayouts>
    );
};

export default Login;
