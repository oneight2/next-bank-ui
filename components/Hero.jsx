import React from 'react'

const Hero = () => (
    <section id='home' className={`flex md:flex-row flex-col paddingY`}>
        <div className={`flex-1 flex-col xl:px-0 sm:px-16 px-6 flexStart`}>
            <div className={`flex flex-row items-center py-[6px] px-4 bg-discount-gradient rounded-[10px] mb-2`}>
                <img src="./assets/discount.svg" className='w-[32px] h-[32px]' alt="discount" />
                <p className="text-white">
                    <span className='text-white font-bold'>20%</span> Discount For
                    <span className='text-white font-bold'> 1 Month</span> Account
                </p>
            </div>
            <div className='flex flex-row justify-between items-center w-full'>
                <h1 className='flex-1 font-poppins font-semibold ss:text-[72px] text-[52px] text-white'>The Next <br className='sm:block hidden' />
                    <span className='text-gradient'>Generation</span><br className='sm:block hidden' />
                    Payment Method
                </h1>
            </div>
        </div>
    </section>
)

export default Hero