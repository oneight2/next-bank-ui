import React from 'react'

const CardDeal = () => {
    return (
        <div id='card-deal' className='section'>
            <div className="sectionInfo">
                <h2 className='heading2 mr-4'>Find a better card deal in few easy steps.</h2>
                <p className='text-dimWhite font-normal max-w-[470px] leading-relaxed'>
                    Arcu tortor, purus in mattis at sed integer faucibus. Aliquet quis aliquet eget mauris tortor.ç Aliquet ultrices ac, ametau.
                </p>
                <button className='btn-primary rounded-full mt-10'>Get Started</button>
            </div>
            <div className="sectionImg">
                <img src="./assets/card.png" alt="" className='w-[100%] h-[100%]' />
            </div>
        </div>
    )
}

export default CardDeal