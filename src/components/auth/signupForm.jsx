import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { LogoIcon } from "../svgs";

const SignupForm = () => {
    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        fullName: "",
        email: "",
        password: "",
        confirmPassword: "",
    });

    const inputFunc = (ev, formDataObj, setFormDataObj) => {
        const name = ev.target.name;
        const newValue = ev.target.value;
        setFormDataObj({ ...formDataObj, [name]: newValue });
    };

    const handleInput = (ev) => inputFunc(ev, formData, setFormData);

    const submitFunc = (ev) => {
        ev.stopPropagation();
    };

    useEffect(() => {
        console.log(formData);
        if (formData.password === formData.confirmPassword) {
            
        }
    }, [formData]);

    return (
        <div className="my-20 px-8">
            <p className="w-max mx-auto mb-6">
                <LogoIcon />
            </p>
            <div className="mx-auto min-w-64 w-full max-w-screen-sm border border-black rounded-lg px-8 py-7">
                <h3 className="text-center font-bold text-2xl mb-8">
                    Create a new account
                </h3>
                <form
                    action=""
                    className="flex flex-col items-start"
                    onSubmit={submitFunc}
                >
                    <label htmlFor="">
                        Full Name
                        <input
                            type="text"
                            id=""
                            placeholder="John Doe"
                            name="fullName"
                            onChange={handleInput}
                            required
                        />
                    </label>
                    <label htmlFor="">
                        Email Address
                        <input
                            type="email"
                            name="email"
                            id=""
                            placeholder="Johndoe@report.crime"
                            onChange={handleInput}
                            required
                        />
                    </label>
                    <label htmlFor="">
                        Password
                        <input
                            type="password"
                            name="password"
                            id=""
                            placeholder="Create password"
                            onChange={handleInput}
                            required
                        />
                    </label>
                    <label htmlFor="">
                        Confirm Password
                        <input
                            type="password"
                            name="confirmPassword"
                            id=""
                            placeholder="Re-enter password"
                            onChange={handleInput}
                            required
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
