import React from 'react'
import { GetStarted } from '../components'

const Hero = () => {
    return (
        <div id='home' className={`flex md:flex-row flex-col paddingY`}>
            <div className={`flex-1 flex-col xl:px-0 sm:px-16 px-6 flexStart`}>
                <div className={`flex flex-row items-center py-[6px] px-4 bg-discount-gradient rounded-[10px] mb-2`}>
                    <img src="./assets/discount.svg" className='w-[32px] h-[32px]' alt="discount" />
                    <p className="text-white">
                        <span className='text-white font-bold'>20%</span> Discount For
                        <span className='text-white font-bold'> 1 Month</span> Account
                    </p>
                </div>
                <div className='flex flex-row justify-between items-center w-full'>
                    <h1 className='flex-1 font-poppins font-semibold ss:text-[72px] text-[52px] text-white ss:leading-[100px] leading-[75px]'>The Next <br className='sm:block hidden' />
                        <span className='text-gradient'>Generation</span>
                    </h1>
                    <div className='ss:flex hidden md:mr-4 mr-0'>
                        <GetStarted />
                    </div>
                </div>
                <h1 className='font-poppins font-semibold ss:text-[68px] text-[52px] text-white ss:leading-[100px] leading-[75px] w-full'>
                    Payment Method
                </h1>
                <p className='paragraph max-w-[470px] mt-5'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore dolorum consequatur sit, laborum cupiditate totam consectetur sint ullam voluptatem minus aspernatur dignissimos debitis distinctio doloremque modi ex reprehenderit.</p>
            </div>
            <div className='relative'>
                <img src="./assets/robot.png" alt="robot" className='w-[100%] h-[100%] z-[5] relative ' />
                <div className='z-[0] absolute w-[40%] h-[35%] top-0 pink__gradient' />
                <div className='z-[1] absolute w-[80%] h-[80%] bottom-40 rounded-full white__gradient' />
                <div className='z-[0] absolute w-[50%] h-[50%] right-20 bottom-20 rounded-full blue__gradient' />
            </div>
            <div className='ss:hidden flexCenter'>
                <GetStarted />
            </div>
        </div>
    )
}

export default Hero