import React, { use, useRef, useState } from 'react';
import { useForm } from 'react-hook-form';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { Link, useLocation, useNavigate } from 'react-router';
import imageUpload from '@/assets/defaultAvatar.jpeg';
import { AuthContext } from '@/Provider/Authentication/AuthProvider';
import { toast } from 'react-toastify';
import { Loader } from '@/components/ui/Loader';
import axios from 'axios';
import { TypingAnimation } from '@/components/ui/typing-animation';

// -----------------Defined type to prevent TypeScript errors ------------------
type RegisterData = {
    avatar: any;
    username: string;
    email: string;
    password: string;
};

const registerLoadingMessages = [
    "Creating your BracKeT account...",
    "Setting up your profile...",
    "Uploading your avatar...",
    "Saving your profile...",
    "Getting your arena ready...",
];

const Register = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const { register, handleSubmit, formState: { errors } } = useForm<RegisterData>();
    const [eye, setEye] = useState(false);
    const [preview, setPreview] = useState<string>(imageUpload);
    const imageInputRef = useRef<HTMLInputElement>(null);
    const [loadingAction, setLoadingAction] = useState(false); // Global Loading State
    const { setUser, googleLogin, emailRegistration, updateUserProfile } = use(AuthContext)!;

    // ---------------- UI Handlers -------------------
    const handleUploadAvatar = () => {
        imageInputRef.current?.click();
    };

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (file) {
            setPreview(URL.createObjectURL(file));
        }
    };

    const handleEyeClick = (e: React.FormEvent) => {
        e.preventDefault();
        setEye(!eye);
    };

    // ---------------- Submit Handlers -------------------

    // ----------------- *** Email Register Handle ***------------------------
    const handleRegister = async (data: RegisterData) => {
        // console.log("Registration Data:", data);
        setLoadingAction(true);
        try {
            // ************** Uploading the image to imagebb.com *******************
            const profileImage = data.avatar[0];
            const profileImageData = new FormData();
            profileImageData.append('image', profileImage);
            const profileImageApiUrl = `https://api.imgbb.com/1/upload?key=${import.meta.env.VITE_IMAGE_UPLOAD_KEY}`;
            const res = await axios.post(profileImageApiUrl, profileImageData);
            const finalImageLink = res.data.data.url;

            // ********************* Email Registration Using Firebase **********************
            const result = await emailRegistration(data.email, data.password);
            const currentUser = result.user;
            await updateUserProfile({ displayName: data.username, photoURL: finalImageLink });
            setUser({...currentUser , displayName: data.username, photoURL: finalImageLink})

            // ---------- Template of the user so that when backend is conncted we can save user info via api 
            // const newUser = {
            //     displayName: data.username,
            //     email: data.email,
            //     photoURL: finalImageLink,
            //     role: "user"
            // };
            // console.log("new USer : " , newUser) ;

            setPreview(imageUpload) ;
            await new Promise((resolve) => setTimeout(resolve, 1500));
            toast.success("Account created successfully!") 
            navigate(location.state || "/") ;
        } catch (error: any) {
            toast.error(error.message.replace("Firebase:", "").trim());
            setLoadingAction(false);
        }
    };

    //----------------Handle Login with google --------------------------
    const handlegoogleLogin = async () => {
        setLoadingAction(true);
        try {
            const result = await googleLogin();
            const currentUser = result.user;
            setUser(currentUser);
            // console.log(currentUser);
            // ---------- Template of the user so that when backend is conncted we can save user info via api 
            // const newUser = {
            //     displayName: currentUser.displayName,
            //     email: currentUser.email,
            //     photoURL: currentUser.photoURL,
            //     role: "user" 
            // }
            await new Promise((resolve) => setTimeout(resolve, 1000));
            navigate(location.state || "/");
        } catch (error: any) {
            toast.error(error.message.replace("Firebase:", "").trim());
            setLoadingAction(false);
        }
    };


    return (
        <>
            {/* A full screen loading overaly while logging in */}
            {loadingAction && (
                <div className="fixed inset-0 z-50 flex items-center justify-center flex-col  backdrop-blur-sm bg-background/60">
                    <Loader></Loader>
                    <TypingAnimation words={registerLoadingMessages}  loop typeSpeed={40} className="mt-4 font-bold text-foreground"></TypingAnimation>
                </div>
            )}

            {/* Register form  */}

            <form onSubmit={handleSubmit(handleRegister)} className="w-full flex flex-col">

                {/*--------------------- Header -------------------------- */}
                <div className="mb-6 text-center md:text-left">
                    <h2 className="text-3xl font-bold tracking-tight text-gray-900">Create an Account</h2>
                    <p className="text-sm font-mono text-gray-500 mt-2">Register to step into the Arena</p>
                </div>

                {/* ---------------- Avatar Upload --------------------- */}
                <div className="mb-6 flex flex-col items-center gap-2">
                    <img
                        src={preview}
                        alt="Avatar Preview"
                        className="cursor-pointer h-20 w-20 rounded-full object-cover border-2 border-gray-200 hover:border-primary transition-colors shadow-sm"
                        onClick={handleUploadAvatar}
                    />
                    <p
                        className="text-gray-600 font-bold text-sm cursor-pointer hover:text-primary transition-colors"
                        onClick={handleUploadAvatar}
                    >
                        Upload Your Avatar
                    </p>

                    {/* Hidden Input */}
                    <input
                        type="file"
                        accept="image/*"
                        className="hidden"
                        {...register("avatar", { required: "Profile image is required" })}
                        ref={(e) => {
                            register("avatar").ref(e);
                            // @ts-ignore - merging refs safely
                            imageInputRef.current = e;
                        }}
                        onChange={(e) => {
                            register("avatar").onChange(e);
                            handleFileChange(e);
                        }}
                    />
                    {errors.avatar && (
                        <p className="text-red-500 text-xs mt-1 font-medium">{errors.avatar.message as string}</p>
                    )}
                </div>

                {/*------------------User Name Field ------------------------*/}
                <div className="mb-4">
                    <label className="block font-semibold text-gray-700 text-sm mb-2">Username</label>
                    <input
                        type="text"
                        className="w-full bg-transparent border border-gray-300 focus:border-black focus:ring-1 focus:ring-black transition-all py-3 px-4 rounded-lg outline-none text-gray-900"
                        placeholder="User Name"
                        {...register('username', { required: "Name is required" })}
                    />
                    {errors.username && (
                        <p className="text-red-500 text-xs mt-1 font-medium">{errors.username.message as string}</p>
                    )}
                </div>

                {/*-------------------- Email Field -----------------------*/}
                <div className="mb-4">
                    <label className="block font-semibold text-gray-700 text-sm mb-2">Email</label>
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

                {/*--------------------- Password Field ----------------------------*/}
                <div className="mb-6 relative">
                    <label className="block font-semibold text-gray-700 text-sm mb-2">Password</label>
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
                                },
                                validate: {
                                    hasUppercase: value => /[A-Z]/.test(value) || "At least one uppercase letter required",
                                    hasLowercase: value => /[a-z]/.test(value) || "At least one lowercase letter required",
                                    hasNumber: value => /\d/.test(value) || "At least one number required",
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

                {/*----------------------- Register Button ------------------------*/}
                <button
                    type="submit"
                    className="w-full bg-black text-white font-bold py-3.5 rounded-lg hover:opacity-90 transition-opacity active:scale-[0.98] cursor-pointer"
                >
                    Register
                </button>

                {/* Divider */}
                <div className="flex items-center gap-3 my-6">
                    <div className="h-px flex-1 bg-gray-200"></div>
                    <span className="text-xs font-bold text-gray-400 uppercase tracking-wider">OR</span>
                    <div className="h-px flex-1 bg-gray-200"></div>
                </div>

                {/*------------------------ Google Registration ----------------------------*/}
                <button
                    onClick={handlegoogleLogin}
                    type="button"
                    className="w-full flex items-center justify-center gap-3 bg-white border border-gray-300 text-gray-700 font-bold py-3.5 cursor-pointer rounded-lg hover:bg-gray-50 transition-colors active:scale-[0.98]"
                >
                    <svg width="20" height="20" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                        <path fill="#34a853" d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"></path>
                        <path fill="#4285f4" d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"></path>
                        <path fill="#fbbc02" d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"></path>
                        <path fill="#ea4335" d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"></path>
                    </svg>
                    Register with Google
                </button>

                {/* Login Link */}
                <p className="text-gray-500 text-center text-sm mt-8">
                    Already have an account?{' '}
                    <Link to="/login" className="font-bold text-black underline">
                        Login
                    </Link>
                </p>

            </form>
        </>

    );
};

export default Register;