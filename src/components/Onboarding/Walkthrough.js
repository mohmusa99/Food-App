import React, { useState } from 'react'
import { Assets } from '../../assets/images/assets'
import { useNavigate } from 'react-router-dom';
import Button from '../Button'

const steps = [
    { illustration: Assets.Favourites, title: 'All your favorites', sentence: 'Order from the best local restaurants with easy, on-demand delivery.', },
    { illustration: Assets.Delivery, title: 'Free delivery offers', sentence: 'Order from the best local restaurants with easy, on-demand delivery.' },
    { illustration: Assets.Menu, title: 'Choose your food', sentence: 'Easily find your type of food craving and you’ll get delivery in wide range.' }
];
const Walkthrough = () => {
    const [stepIndex, setStepIndex] = useState(0);
    const navigate = useNavigate();

    const nextStep = () => {
        if (stepIndex < steps.length - 1) {
            setStepIndex(stepIndex + 1);
        } else {
            navigate ("/onboarding/signin");
        }
    };
    return (
        <div className='p-5'>
            <div className='mt-5 flex gap-1'>
                <div className='w-full flex items-center'>
                    <img src={Assets.Logo} alt="" />
                </div>
                <h1 className='font-bold text-4xl text-center'>Tamang FoodService</h1>
            </div>
            <div className="w-full">
                <img className='mt-5' src={steps[stepIndex].illustration} alt={`Step ${stepIndex + 1}`} />
            </div>
            <div className="mt-5 mb-5 flex flex-col gap-3 text-center">
                <h3 className='yu-gothic font-bold text-[28px]'>
                {steps[stepIndex].title}
                </h3>
                <p className='text-base font-normal yu-gothic'>{steps[stepIndex].sentence}</p>
                <div className="step-indicator">
                    {/* Render the step indicators */}
                    {steps.map((_, index) => (
                        <div key={index} className={`step-dot ${index === stepIndex ? 'active' : ''}`} />
                    ))}
                </div>
            </div>
            <Button onClick={nextStep}>
                {stepIndex === steps.length - 1 ? 'Continue' : 'Get Started'}
            </Button>
        </div>
    )
}

export default Walkthrough