import React, { useState } from 'react'
import { FaChevronLeft } from "react-icons/fa";
import { Link, useNavigate } from 'react-router-dom';
import 'react-phone-number-input/style.css';
import PhoneInput from 'react-phone-number-input';
import Button from '../Button';
import Form from '../Form';
import styled from 'styled-components';
import { OtpInput } from 'reactjs-otp-input';


const StyledPhoneInput = styled(PhoneInput)`
  width: 100%;
  border-bottom: 1px solid #ccc;
  .PhoneInputInput {
    width: 100%;
    padding: 12px;
    font-family: 'Yu Gothic UI';
    font-size: 14px;
    outline: none;
  }
  .PhoneInputCountrySelect {
    padding: 12px;
    border: 1px solid #ccc;
    border-radius: 8px;
    background-color: #fff;
  }
`;

const StyledOtpInput = styled(OtpInput)`
  justify-content: center;
  gap: 8px;
  width: 100%;

  .otp-input {
    width: 3.125rem !important;
    height: 3.125rem;
    font-size: 1.5rem;
    text-align: center;
    border-bottom: 1px solid #868686;
    fill: #FFEFEF;
  }
  
  .
`;


const VerifyPhone = () => {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [otp, setOtp] = useState('');
  const [step, setStep] = useState(1);
  const navigate = useNavigate();

  const handlePhoneNumberSubmit = () => {
    if (!phoneNumber) {
      alert("Please enter a valid phone number");
      return;
    }
    console.log("Phone Number", { phoneNumber });
    setStep(2);
  };


  const handleOtpSubmit = () => {
    if (otp.length !== 4) {
      alert("Please enter a valid 4-digit OTP");
      return;
    }
    console.log("OTP", { otp });
    navigate('/next-step');
  };
  const handleOtpChange = (otp) => {
    if (/^\d*$/.test(otp)) {
      setOtp(otp);
    }
  };

  return (
    <div className='p-5'>
      <div className='relative mb-5'>
        {step === 1 ? (
          <Link to="/onboarding/signup">
            <FaChevronLeft className='absolute left-0 top-1/2 transform -translate-y-1/2 cursor-pointer' />
          </Link>
        ) : (
          <FaChevronLeft className='absolute left-0 top-1/2 transform -translate-y-1/2 cursor-pointer' onClick={() => setStep(1)} />
        )}
        <h1 className='text-center yu-gothic font-bold text-base'>
          Login to Tamang Food Services
        </h1>
      </div>
      {step === 1 ? (
        <>
          <div className="flex flex-col gap-3 mx-auto text-center mb-5">
            <h1 className='yu-gothic font-semibold text-2xl'>Get Started with Foodly</h1>
            <p className='yu-gothic font-normal text-base'>Enter your phone number to use foodly and enjoy your food :)</p>
          </div>

          <Form onSubmit={handlePhoneNumberSubmit}>

            <label className='text-[#868686] font-light text-[12px] yu-gothic'>PHONE NUMBER</label>
            <StyledPhoneInput
              placeholder="Enter phone number"
              value={phoneNumber}
              onChange={setPhoneNumber}
              defaultCountry="NG"
            />
            <div className="mt-10">
              <Button type="submit">SIGN UP</Button>
            </div>
          </Form>
        </>
      ) : (
        <>
          <div className="flex flex-col gap-3 mx-auto text-center mb-5">
            <h1 className='yu-gothic font-semibold text-2xl'>Verify Phone Number</h1>
            <p className='yu-gothic font-normal text-base'>Enter the 4-Digit code sent to you at {phoneNumber}</p>
          </div>
          <Form className='h-full' onSubmit={handleOtpSubmit}>
            <StyledOtpInput
              value={otp}
              onChange={handleOtpChange}
              numInputs={4}
              separator={<span></span>}
              isInputNum={true}
              inputStyle="otp-input"
            />
            <div className="mt-8">
              <Button type="submit">CONTINUE</Button>
            </div>
          </Form>
          <div className="flex justify-around mt-6 mb-8">
            <p className="text-[10px] font-light">Didn’t receive code?</p>
            <Link to="#" className="text-[10px] font-light text-[#EF9920] onClick={() => setStep(1)}">Resend Again.</Link>
          </div>
          <div className="text-center yu-gothic text-base font-normal">
            By Signing up you agree to our Terms Conditions & Privacy Policy.
          </div>
        </>
      )}
    </div>
  )
}

export default VerifyPhone