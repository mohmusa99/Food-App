import React, { useState } from 'react';
import { FaChevronLeft, FaFacebookF } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import Form from '../Form';
import InputField from '../InputField';
import Button from '../Button';
import { Link } from 'react-router-dom';
import { useGoogleLogin } from '@react-oauth/google';
import { jwtDecode } from "jwt-decode";
// import FacebookLogin from 'react-facebook-login';

const SignIn = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSignIn = () => {
        console.log("Sign In", { email, password });
    };

    const handleGoogleSuccess = (credentialResponse) => {
        const credentialResponseDecoded = jwtDecode(credentialResponse.credential);
        console.log('Google Sign In Success:', credentialResponseDecoded);
        // Implement your logic to handle the Google response here
    };

    const handleGoogleFailure = () => {
        console.log('Google Sign In Failure');
    };

    const login = useGoogleLogin({
        onSuccess: tokenResponse => console.log(tokenResponse),
    });

    // const handleFacebookResponse = (response) => {
    //     console.log('Facebook Sign In Success:', response);
    //     // Implement your logic to handle the Facebook response here
    // };

    // const handleFacebookFailure = (response) => {
    //     console.log('Facebook Sign In Failure', response);
    // };

    return (
        <div className='p-5'>
            <div className='relative mb-3'>
                <Link to="/onboarding/walkthrough">
                    <FaChevronLeft className='absolute left-0 top-1/2 transform -translate-y-1/2 cursor-pointer' />
                </Link>
                <h1 className='text-center yu-gothic font-bold text-base'>
                    Sign In
                </h1>
            </div>
            <div className='mb-6'>
                <h2 className='yu-gothic font-normal text-3xl text-start'>
                    Welcome to Tamang Food Services
                </h2>
                <p className='yu-gothic font-normal text-base text-start'>
                    Enter your Phone number or Email <br /> address for sign in. Enjoy your food :)
                </p>
            </div>
            <Form onSubmit={handleSignIn}>
                <InputField
                    label="EMAIL ADDRESS"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email"
                />
                <InputField
                    label="PASSWORD"
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Enter your password"
                />
                <p className='flex justify-center'>
                    <Link to="../forgot-password" className="text-[10px] font-light mb-6">Forgot password?</Link>
                </p>
                <Button type="submit">SIGN IN</Button>
            </Form>
            <div className="flex justify-around my-5">
                <p className="text-[10px] font-light">Don't have an account?</p>
                <Link to="../signup" className="text-[10px] font-light text-[#979797]">Create new account</Link>
            </div>
            <div className='flex flex-col gap-3 items-center'>
                <span className='text-base font-normal yu-gothic'>Or</span>
                {/* <FacebookLogin
                    appId="YOUR_FACEBOOK_APP_ID"
                    autoLoad={false}
                    fields="name,email,picture"
                    callback={handleFacebookResponse}
                    onFailure={handleFacebookFailure}
                    render={({ onClick, isDisabled }) => (
                        <button 
                            onClick={onClick} 
                            disabled={isDisabled}
                            className='py-3 px-4 rounded-lg bg-[#395998] yu-gothic text-[12px] font-semibold text-white relative w-full flex items-center'>
                            <span className='flex items-center justify-center absolute left-4 bg-white rounded p-[7px]'><FaFacebookF className='fill-black' /></span>
                            <div className='flex-1 text-center'>
                                CONNECT WITH FACEBOOK
                            </div>
                        </button>
                    )}
                /> */}
                <button 
                            // onClick={onClick} 
                            // disabled={isDisabled}
                            className='py-3 px-4 rounded-lg bg-[#395998] yu-gothic text-[12px] font-semibold text-white relative w-full flex items-center'>
                            <span className='flex items-center justify-center absolute left-4 bg-white rounded p-[7px]'><FaFacebookF className='fill-black' /></span>
                            <div className='flex-1 text-center'>
                                CONNECT WITH FACEBOOK
                            </div>
                        </button>
                <button className='py-3 px-4 rounded-lg bg-[#4285F4] yu-gothic text-[12px] font-semibold text-white relative w-full flex items-center' onClick={() => login()}><span className='flex items-center justify-center absolute left-4 bg-white rounded p-[7px]'><FcGoogle /></span>
                    <div className='flex-1 text-center'>
                        CONNECT WITH GOOGLE
                    </div>
                </button>
            </div>

        </div>
    )
}

export default SignIn;
