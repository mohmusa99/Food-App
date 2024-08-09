import React from 'react'
import { Link } from 'react-router-dom';
import { Assets } from '../../assets/images/assets';
import Button from '../Button';

const Welcome = () => {
    return (
        <div className="bg-cover h-full p-5" style={{
            backgroundImage: `url('${Assets.BgCircle}')`,
            backgroundSize: '95%',
            backgroundRepeat: 'no-repeat',
        }}>
            <div className='mt-[60px] flex gap-1'>
                <div className='w-full flex items-center'>
                    <img src={Assets.Logo} alt="" />
                </div>
                <h1 className='font-bold text-4xl text-center'>Tamang FoodService</h1>
            </div>
            <div className="flex justify-center mt-6">
                <img src={Assets.IceCream} alt="" />
            </div>
            <div className="mt-5 mb-5 flex flex-col gap-3 text-center">
                <h3 className='font-bold text-[28px]'>
                    Welcome
                </h3>
                <p className='text-base font-normal'>It’s a pleasure to meet you. We are excited that you’re here so let’s get started!</p>
            </div>
            <Link to='/onboarding/walkthrough'>
                <Button>Get Started</Button>
            </Link>
        </div>
    )
}

export default Welcome