import { useRouteError } from "react-router-dom";

const ErrorPage = () => {
    const error = useRouteError()
    return (
        <div className="flex justify-center min-h-screen items-center">
            <h1>Halaman Tidak Di temukan</h1>
            <h1>{error.statusText}</h1>
        </div>
    );
}

export default ErrorPage

