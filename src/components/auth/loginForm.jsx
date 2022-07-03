import { LogoIcon } from "../svgs";
import { useNavigate } from "react-router-dom";

const LoginForm = () => {
    const navigate = useNavigate();
    return (
        <div className="my-20 px-8">
            <p className="w-max mx-auto mb-6">
                <LogoIcon />
            </p>
            <div className="mx-auto min-w-64 w-full max-w-screen-sm border border-black rounded-lg px-8 py-7">
                <h3 className="text-center font-bold text-2xl mb-8">
                    Log into your report account
                </h3>
                <form action="" className="flex flex-col items-start">
                    <label htmlFor="">
                        Email Address
                        <input
                            type="email"
                            name=""
                            id=""
                            placeholder="Johndoe@report.crime"
                        />
                    </label>
                    <label htmlFor="">
                        Password
                        <input
                            type="password"
                            name=""
                            id=""
                            placeholder="Create password"
                        />
                    </label>
                    <label htmlFor="">
                        <input type="checkbox" name="" id="" />
                        Remember Me
                    </label>
                    <div className="w-full mb-4">
                        <input type="submit" value="Create account" />
                    </div>
                    <div className="w-full text-center">
                        Don't have an account yet?{" "}
                        <span
                            onClick={() => {
                                console.log(navigate);
                                navigate("../auth/signup");
                            }}
                            className="cursor-pointer"
                        >
                            Sign Up
                        </span>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default LoginForm;
