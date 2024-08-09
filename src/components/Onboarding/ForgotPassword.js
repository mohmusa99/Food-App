import React, { useState } from 'react'
import { FaChevronLeft } from "react-icons/fa";
import { Assets } from '../../assets/images/assets'
import { Link } from 'react-router-dom';
import Button from '../Button'
import InputField from '../InputField';
import Form from '../Form';

const ForgotPassword = () => {
    const [email, setEmail] = useState('');
    const [emailSent, setEmailSent] = useState(false);
    const [error, setError] = useState('');


    const handleResetPassword = () => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            setError('Please enter a valid email address');
            return;
        }
        console.log("Reset Password", { email });
        setEmailSent(true);
        setError('');
    };

    const handleResend = () => {
        console.log("Resend Email", { email });
    };

    const handleBack = () => {
        setEmailSent(false);
    };

    return (
        <div className='p-5'>
            <div className='relative mb-5'>
                {!emailSent ? (
                    <Link to="/onboarding/signin">
                        <FaChevronLeft className='absolute left-0 top-1/2 transform -translate-y-1/2 cursor-pointer' />
                    </Link>
                ) : (
                    <FaChevronLeft className='absolute left-0 top-1/2 transform -translate-y-1/2 cursor-pointer' onClick={handleBack} />
                )}
                <h1 className='text-center yu-gothic font-bold text-base'>
                    Forgot Password
                </h1>
            </div>
            {!emailSent ? (
                <>
                    <div className='mb-6'>
                        <h2 className='yu-gothic font-normal text-3xl text-start'>
                            Forgot Password
                        </h2>
                        <p className='yu-gothic font-normal text-base text-start'>
                            Enter your email address and we will send you a reset instructions.
                        </p>
                    </div>
                    <Form onSubmit={handleResetPassword}>
                        <InputField
                            label="EMAIL ADDRESS"
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="Enter your email"
                        />

                        {error && <p className='text-red-500 text-sm my-1'>{error}</p>}
                        <Button type="submit">Reset Password</Button>
                    </Form>
                </>
            ) : (
                <>
                    <div className='mb-6'>
                        <h2 className='yu-gothic font-normal text-3xl text-start'>
                            Reset Email sent
                        </h2>
                        <p className='yu-gothic font-normal text-sm text-start'>
                            We have sent reset instructions email to {email}. <Link to={'/'} className='yu-gothic font-normal text-sm text-[#EF9920]'>Having Problems?</Link>
                        </p>
                    </div>

                    <Button onClick={handleResend} type="submit">SEND AGAIN</Button>
                    <div className='h-full flex justify-center items-center'>
                        <img src={Assets.OpenDoodles} alt="Open Doodles" />
                    </div>
                </>
            )
            }
        </div>
    )
}

export default ForgotPassword