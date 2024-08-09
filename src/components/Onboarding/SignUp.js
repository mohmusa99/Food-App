import React, { useState } from 'react'
import { FaChevronLeft, FaFacebookF } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import Form from '../Form';
import InputField from '../InputField';
import Button from '../Button';
import { Link, useNavigate } from 'react-router-dom';

const SignUp = () => {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSignUp = () => {
    console.log("Sign Up", { fullName, email, password });
    navigate('/onboarding/verify-phone');
  };
  return (
    <div className='p-5'>
      <div className='relative mb-3'>
        <Link to="/onboarding/signin">
          <FaChevronLeft className='absolute left-0 top-1/2 transform -translate-y-1/2 cursor-pointer' />
        </Link>
        <h1 className='text-center yu-gothic font-bold text-base'>
          Sign Up
        </h1>
      </div>
      <div className='mb-8 w-[90%] '>
        <h2 className='yu-gothic font-normal text-3xl text-start'>
          Create Account
        </h2>
        <p className='yu-gothic font-normal text-base text-start'>
          Enter your Name, Email and Password for sign up. <Link to='../signin'><span className='ml-2 yu-gothic font-normal text-sm text-[#EF9920]'>Already have an account?</span></Link>
        </p>
      </div>
      <Form onSubmit={handleSignUp}>
        <InputField
          label="FULL NAME"
          type="text"
          value={fullName}
          onChange={(e) => setFullName(e.target.value)}
          placeholder="Enter your Fullname"
        />
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
        <Button type="submit">SIGN UP</Button>
      </Form>
      <div className="my-5">
        <p className="text-base font-normal yu-gothic text-center">By Signing up you agree to our Terms Conditions & Privacy Policy.</p>
      </div>
      <div className='flex flex-col gap-3 items-center'>
        <span className='text-base font-normal yu-gothic'>Or</span>
        <button
          className='py-3 px-4 rounded-lg bg-[#395998] yu-gothic text-[12px] font-semibold text-white relative w-full flex items-center'>
          <span className='flex items-center justify-center absolute left-4 bg-white rounded p-[7px]'><FaFacebookF className='fill-black' /></span>
          <div className='flex-1 text-center'>
            CONNECT WITH FACEBOOK
          </div>
        </button>
        <button className='py-3 px-4 rounded-lg bg-[#4285F4] yu-gothic text-[12px] font-semibold text-white relative w-full flex items-center'><span className='flex items-center justify-center absolute left-4 bg-white rounded p-[7px]'><FcGoogle /></span>
          <div className='flex-1 text-center'>
            CONNECT WITH GOOGLE
          </div>
        </button>
      </div>
    </div>
  )
}

export default SignUp