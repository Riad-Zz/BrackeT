import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { Link } from 'react-router';

const Login = () => {
    const [eye, setEye] = useState(false);
    const [forget, setforget] = useState(false);
    const [resetEmail, setResetEmail] = useState('');
    const { register, handleSubmit, formState: { errors },} = useForm<LoginData>();

    //---------- Login data type definition ----------------
    type LoginData = {
        email: string;
        password: string;
    };

    // ---------------- Password toggler eye function -------------------
    const handleEyeClick = (e: React.FormEvent) => {
        e.preventDefault();
        setEye(!eye);
    };

    // ------------- Handle Forget Password function -------------------
    const handleForgetPassword = () => {
        setforget(!forget);
    };

    //------------- Placeholder for sending reset email --------------------
    const paswordResetEmail = () => {
        console.log("Sending reset link to:", resetEmail);
    };

    //------------------- Handle Email Login function -------------------
    const handleEmailLogin = (data: LoginData) => {
        console.log(data);
    };

    return forget ? (
        // -------------- Forgot Password View --------------
        <div className="w-full flex flex-col">
            <div className="mb-8 text-center md:text-left">
                <h2 className="text-3xl font-bold tracking-tight text-gray-900">Forgot Password</h2>
                <p className="text-sm font-mono text-gray-500 mt-2">
                    Enter your email address and we’ll send you a reset link.
                </p>
            </div>

            <div className="mb-6">
                <label className="block font-semibold text-gray-700 text-sm mb-2">
                    Email
                </label>
                <input
                    type="email"
                    value={resetEmail}
                    onChange={(e) => setResetEmail(e.target.value)}
                    className="w-full bg-transparent border border-gray-300 focus:border-black focus:ring-1 focus:ring-black transition-all py-3 px-4 rounded-lg outline-none text-gray-900"
                    placeholder="name@example.com"
                />
            </div>

            <button 
                onClick={paswordResetEmail} 
                type="button" 
                className="w-full bg-primary text-white font-bold py-3.5 rounded-lg hover:opacity-90 transition-opacity active:scale-[0.98]"
            >
                Send Reset Link
            </button>

            <p className="text-gray-500 text-center text-sm mt-8">
                Remember your password?{' '}
                <span onClick={handleForgetPassword} className="font-bold text-primary/90 hover:underline cursor-pointer">
                    Login
                </span>
            </p>
        </div>
    ) : (
        // -------------- Login View --------------
        <form onSubmit={handleSubmit(handleEmailLogin)} className="w-full flex flex-col">
            
            {/* Header */}
            <div className="mb-8 text-center md:text-left">
                <h2 className="text-3xl font-bold tracking-tight text-gray-900">Welcome Back</h2>
                <p className="text-sm font-mono text-gray-500 mt-2">Enter your credentials to enter the Arena</p>
            </div>

            {/* Email Field */}
            <div className="mb-4">
                <label className="block font-semibold text-gray-700 text-sm mb-2">
                    Email
                </label>
                <input
                    type="email"
                    className="w-full bg-transparent border border-gray-300 focus:border-black focus:ring-1 focus:ring-black transition-all py-3 px-4 rounded-lg outline-none text-gray-900"
                    placeholder="name@example.com"
                    {...register('email', { required: "Email is required" })}
                />
                {errors.email && (
                    <p className="text-red-500 text-xs mt-1 font-medium">{errors.email.message as string}</p>
                )}
            </div>

            {/* Password Field */}
            <div className="mb-4 relative">
                <label className="block font-semibold text-gray-700 text-sm mb-2">
                    Password
                </label>
                <div className="relative">
                    <input
                        type={eye ? "text" : "password"}
                        className="w-full bg-transparent border border-gray-300 focus:border-black focus:ring-1 focus:ring-black transition-all py-3 pl-4 pr-12 rounded-lg outline-none text-gray-900"
                        placeholder="••••••••"
                        {...register('password', {
                            required: "Password is required",
                            minLength: {
                                value: 6,
                                message: "Password must be at least 6 characters"
                            }
                        })}
                    />
                    
                    {eye ? (
                        <FaEyeSlash 
                            onClick={handleEyeClick} 
                            className="z-10 absolute right-4 top-1/2 -translate-y-1/2 text-xl text-gray-500 hover:text-gray-800 cursor-pointer" 
                        />
                    ) : (
                        <FaEye 
                            onClick={handleEyeClick} 
                            className="z-10 absolute right-4 top-1/2 -translate-y-1/2 text-xl text-gray-500 hover:text-gray-800 cursor-pointer" 
                        />
                    )}
                </div>
                {errors.password && (
                    <p className="text-red-500 text-xs mt-1 font-medium">{errors.password.message as string}</p>
                )}
            </div>

            {/* Remember Me & Forgot Password */}
            <div className="flex items-center justify-between mb-8 mt-2">
                <label className="flex items-center gap-2 cursor-pointer">
                    <input 
                        type="checkbox" 
                        className="w-4 h-4 rounded border-gray-300 text-accent focus:ring-accent cursor-pointer" 
                    />
                    <span className="text-sm font-medium text-gray-600 ">Remember me</span>
                </label>
                
                {/*  onClick handler for Forget Password */}
                <p onClick={handleForgetPassword} className="text-sm font-bold text-primary/90 hover:underline cursor-pointer">
                    Forgot Password?
                </p>
            </div>

            {/* Login Button */}
            <button 
                type="submit" 
                className="w-full bg-primary text-white font-bold py-3.5 rounded-lg hover:opacity-90 transition-opacity active:scale-[0.98]"
            >
                Login
            </button>

            {/* Divider */}
            <div className="flex items-center gap-3 my-6">
                <div className="h-px flex-1 bg-gray-200"></div>
                <span className="text-xs font-bold text-gray-400 uppercase tracking-wider">OR</span>
                <div className="h-px flex-1 bg-gray-200"></div>
            </div>

            {/* Google Login */}
            <button 
                type="button" 
                className="w-full flex items-center justify-center gap-3 bg-white border border-gray-300 text-gray-700 font-bold py-3.5 rounded-lg hover:bg-gray-50 transition-colors active:scale-[0.98]"
            >
                <svg width="20" height="20" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                    <path fill="#34a853" d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"></path>
                    <path fill="#4285f4" d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"></path>
                    <path fill="#fbbc02" d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"></path>
                    <path fill="#ea4335" d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"></path>
                </svg>
                Continue with Google
            </button>

            {/* Register Link */}
            <p className="text-gray-500 text-center text-sm mt-8">
                Don't have an account?{' '}
                <Link to="/register" className="font-bold text-primary/90 hover:underline">
                    Register
                </Link>
            </p>

        </form>
    );
};

export default Login;