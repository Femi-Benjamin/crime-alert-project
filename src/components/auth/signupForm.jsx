import { useNavigate } from "react-router-dom";
import { LogoIcon } from "../svgs";

const SignupForm = () => {
    const navigate = useNavigate();

    return (
        <div className="my-20 px-8">
            <p className="w-max mx-auto mb-6">
                <LogoIcon />
            </p>
            <div className="mx-auto min-w-64 w-full max-w-screen-sm border border-black rounded-lg px-8 py-7">
                <h3 className="text-center font-bold text-2xl mb-8">
                    Create a new account
                </h3>
                <form action="" className="flex flex-col items-start">
                    <label htmlFor="">
                        Full Name
                        <input
                            type="text"
                            name=""
                            id=""
                            placeholder="John Doe"
                        />
                    </label>
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
                        Confirm Password
                        <input
                            type="password"
                            name=""
                            id=""
                            placeholder="Re-enter password"
                        />
                    </label>
                    <label htmlFor="">
                        <input type="checkbox" name="" id="" />I have read and
                        understood Report's Terms, Conditions and Policies.
                    </label>
                    <div className="w-full mb-4">
                        <input type="submit" value="Create account" />
                    </div>
                    <div className="w-full text-center">
                        Already have an account?{" "}
                        <span
                            onClick={() => {
                                navigate("../auth/login");
                            }}
                            className="cursor-pointer"
                        >
                            Log in
                        </span>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default SignupForm;
