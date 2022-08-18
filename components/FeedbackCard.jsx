import React from 'react'

const FeedbackCard = ({ content, name, title, img }) => {
    return (
        <div className='flex justify-between flex-col px-10 py-12 rounded-[20px] max-w-[370px] md:mr-10 sm:mr-5 mr-0 my-5 feedback-card'>
            <img src="./assets/quotes.svg" className='w-[42px] h-[27px] object-contain' alt="" />
            <p className='font-normal text-white leading-relaxed text-[18px] my-10'>{content}</p>
            <div className='flex flex-row'>
                <img src={`./assets/${img} `} className="w-[48px] h-[48px] rounded-full" alt="" />
                <div className='flex flex-col ml-4'>
                    <h4 className='font-poppins font-semibold text-white leading-[32px] text-[20px] '>{name}</h4>
                    <p className='font-normal text-dimWhite text-[16px] leading-[24px]'>{title}</p>
                </div>
            </div>
        </div>
    )
}

export default FeedbackCard