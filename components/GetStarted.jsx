import React from 'react'

const GetStarted = () => {
    return (
        <div className='flexCenter w-[140px] h-[140px] rounded-full bg-blue-gradient p-[2px]'>
            <div className='flexCenter flex-col bg-primary h-[100%] w-[100%] rounded-full'>
                <div className='flexStart flex-row'>
                    <p className='font-poppins text-gradient text-medium text-[18px] leading-[23px]'>
                        <span>Get</span>
                    </p>
                    <img src="./assets/arrow-up.svg" className='w-[23px] h-[23px] object-contain' alt="" />
                </div>
                <p className='font-poppins text-gradient text-medium text-[18px] leading-[23px]'>
                    <span>Started</span>
                </p>

            </div>
        </div>
    )
}

export default GetStarted