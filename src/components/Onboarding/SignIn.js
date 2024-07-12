import React, { useState } from 'react';
import { FaChevronLeft } from "react-icons/fa";
import Form from '../Form';
import InputField from '../InputField';
import Button from '../Button';
import { Link } from 'react-router-dom'; 

const SignIn = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSignIn = () => {
        console.log("Sign In", { email, password });
    };


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
                    <Link to="/forgot-password" className="text-[10px] font-light mb-6">Forgot password?</Link>
                </p>
                <Button type="submit">Sign In</Button>
            </Form>
            <div className="flex justify-around my-5">
                <p className="text-[10px] font-light">Don't have an account?</p>
                <Link to="/signup" className="text-[10px] font-light text-[#979797]">Create new account</Link>
            </div>
            <div className='flex flex-col gap-3 items-center'>
                <span>or</span>
                <button>CONNECT WITH FACEBOOK</button>
                <button>CONNECT WITH GOOGLE</button>
            </div>

        </div>
    )
}

export default SignIn;
