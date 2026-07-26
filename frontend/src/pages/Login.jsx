import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaGoogle, FaMotorcycle, FaArrowRight } from "react-icons/fa";

import styles from "./Login.module.css";
import { login, register } from "../api/auth";
import { useAuth } from "../context/AuthContext";

function Login() {

    const navigate = useNavigate();
    const { login: saveUser } = useAuth();

    const [isActive, setIsActive] = useState(false);

    // Login
    const [loginEmail, setLoginEmail] = useState("");
    const [loginPassword, setLoginPassword] = useState("");

    // Register
    const [fullName, setFullName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [password, setPassword] = useState("");

    const handleLogin = async (e) => {
        e.preventDefault();

        try {
            const data = await login(loginEmail, loginPassword);

            saveUser(data);

            if (data.role === "ADMIN") {
                navigate("/admin/dashboard");
            } else {
                navigate("/customer/dashboard");
            }
        } catch (err) {
            console.error(err);
            alert("Invalid Email or Password");
        }
    };

    const handleRegister = async (e) => {
        e.preventDefault();

        try {

            await register(
                fullName,
                email,
                phone,
                password
            );

            alert("Registration Successful!");

            setFullName("");
            setEmail("");
            setPhone("");
            setPassword("");

            setIsActive(false);

        } catch (err) {
            console.error(err);
            alert("Registration Failed");
        }
    };

    return (

        <div className={styles.wrapper}>

            <div
                className={`${styles.container} ${
                    isActive ? styles.containerActive : ""
                }`}
            >

                {/* SIGN UP */}

                <div className={`${styles.formContainer} ${styles.signUp}`}>

                    <form
                        className={styles.form}
                        onSubmit={handleRegister}
                    >

                        <h1>Create Account</h1>

                        <p className={styles.subtitle}>
                            Join EasyBike and start renting bikes today.
                        </p>

                        <button
                            type="button"
                            className={styles.googleButton}
                        >
                            <FaGoogle />
                        </button>

                        <input
                            type="text"
                            placeholder="Full Name"
                            value={fullName}
                            onChange={(e) =>
                                setFullName(e.target.value)
                            }
                        />

                        <input
                            type="email"
                            placeholder="Email Address"
                            value={email}
                            onChange={(e) =>
                                setEmail(e.target.value)
                            }
                        />

                        <input
                            type="text"
                            placeholder="Phone Number"
                            value={phone}
                            onChange={(e) =>
                                setPhone(e.target.value)
                            }
                        />

                        <input
                            type="password"
                            placeholder="Password"
                            value={password}
                            onChange={(e) =>
                                setPassword(e.target.value)
                            }
                        />

                        <button
                            type="submit"
                            className={styles.primaryButton}
                        >
                            Create Account
                        </button>

                    </form>

                </div>

                {/* SIGN IN */}

                <div className={`${styles.formContainer} ${styles.signIn}`}>

                    <form
                        className={styles.form}
                        onSubmit={handleLogin}
                    >

                        <h1>Welcome Back</h1>

                        <p className={styles.subtitle}>
                            Sign in to continue your journey.
                        </p>

                        <button
                            type="button"
                            className={styles.googleButton}
                        >
                            <FaGoogle />
                        </button>

                        <input
                            type="email"
                            placeholder="Email Address"
                            value={loginEmail}
                            onChange={(e) =>
                                setLoginEmail(e.target.value)
                            }
                        />

                        <input
                            type="password"
                            placeholder="Password"
                            value={loginPassword}
                            onChange={(e) =>
                                setLoginPassword(e.target.value)
                            }
                        />

                        <button
                            type="submit"
                            className={styles.primaryButton}
                        >
                            Login
                        </button>

                    </form>

                </div>

                {/* ANIMATED PANEL */}

                <div className={styles.toggleContainer}>

                    <div className={styles.toggle}>

                        <div
                            className={`${styles.togglePanel} ${styles.toggleLeft}`}
                        >

                            <div className={styles.logoCircle}>
                                <FaMotorcycle />
                            </div>

                            <h1>
                                Welcome
                                <br />
                                Back
                            </h1>

                            <p>
                                Already have an account?
                                <br />
                                Sign in and continue your ride.
                            </p>

                            <button
                                className={styles.secondaryButton}
                                onClick={() => setIsActive(false)}
                            >
                                Sign In
                                <FaArrowRight />
                            </button>

                        </div>

                        <div
                            className={`${styles.togglePanel} ${styles.toggleRight}`}
                        >

                            <div className={styles.logoCircle}>
                                <FaMotorcycle />
                            </div>

                            <h1>
                                New to
                                <br />
                                EasyBike?
                            </h1>

                            <p>
                                Rent. Ride. Repeat.
                                <br />
                                Join thousands of happy riders.
                            </p>

                            <button
                                className={styles.secondaryButton}
                                onClick={() => setIsActive(true)}
                            >
                                Sign Up
                                <FaArrowRight />
                            </button>
                            <div className={styles.floatingCircle1}></div>
                            <div className={styles.floatingCircle2}></div>
                            <div className={styles.floatingCircle3}></div>

                        </div>

                    </div>

                </div>

            </div>

        </div>

    );
}

export default Login;
