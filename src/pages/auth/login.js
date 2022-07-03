import { LoginForm } from "../../components/auth";

const LoginPage = () => {
    return (
        <section className="min-h-screen md:grid md:grid-cols-2">
            <div className="bg-[#d9d9d9] hidden md:block"></div>
            <LoginForm />
        </section>
    );
};

export default LoginPage;
