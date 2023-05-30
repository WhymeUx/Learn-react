import { useRouteError } from "react-router-dom";

const ErrorPage = () => {
    const error = useRouteError();
    return (
        <div className="flex justify-center min-h-screen items-center">
            <div className="flex flex-col items-center">
                <h1 className="font-bold">Oops Erorrr</h1>
                <h1>Halaman Tidak Di temukan</h1>
                <h1>{error.statusText || error.message}</h1>
            </div>
        </div>
    );
};

export default ErrorPage;
