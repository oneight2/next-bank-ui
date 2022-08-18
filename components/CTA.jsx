import React from 'react'

const CTA = () => {
    return (
        <div className='flexCenter marginY padding sm:flex-row flex-col bg-black-gradient-2 rounded-[20px] box-shadow '>
            <div className='flex flex-1 flex-col'>
                <h2 className='heading2'>Let’s try our service now!</h2>
                <p className='paragraph max-w-[470px] mt-5'>Everything you need to accept card payments and grow your business anywhere on the planet.</p>
            </div>
            <div className='flexCenter sm:ml-10 ml-0 sm:mt-0 mt-10'>
                <button className='btn-primary rounded-full'>Get Started</button>
            </div>
        </div>
    )
}

export default CTA