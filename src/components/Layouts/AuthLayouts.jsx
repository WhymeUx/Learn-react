const AuthLayouts = (props) => {
    const { title, subtitle, children } = props;
    return (
        <div className="flex justify-center min-h-screen items-center">
            <div className="border rounded-md w-full max-w-xs p-5">
                <h1 className="text-3xl font-bold mb-2 text-blue-600">
                    {title}
                </h1>
                <p className="font-medium text-slate-500">
                    Welcome, Please Enter To {subtitle}
                </p>
                {children}
            </div>
        </div>
    );
};

export default AuthLayouts;
