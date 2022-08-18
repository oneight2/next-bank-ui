import React from 'react'
import { feedback } from '../Constants'
import FeedbackCard from './FeedbackCard'

const Testimonials = () => {
    return (
        <div id='testimonials' className='paddingY flexCenter flex-col relative'>
            <div className='absolute z-[0] w-[60%] h-[60%] blue__gradient -right-[50%] buttom-[0]' />
            <div className='flex flex1 justify-between md:flex-row flex-col items-center '>
                <h4 className='heading2 max-w-xl'>What people are saying about us</h4>
                <p className='font-normal text-dimWhite leading-relaxed max-w-sm'>Everything you need to accept card payments and grow your business anywhere on the planet.</p>
            </div>
            <div className='flex flex-wrap justify-center w-full relative z-[1] feedback-container '>
                {feedback.map((feedback, index) => (
                    <FeedbackCard key={feedback.id} {...feedback} index={index} />
                ))}
            </div>
        </div>
    )
}

export default Testimonials