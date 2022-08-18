import React from 'react'
import { stats } from '../Constants'


const Stats = () => {
    return (
        <div className='flexCenter flex-row flex-wrap sm:mb-20 mb-6'>
            {stats.map((stat, index) => (
                <div key={stat.id} className='flex-1 flex justify-center items-center flex-row m-3'>
                    <h4 className='font-poppins text-white font-semibold xs:text-[40px] text-[30px] xs:leading-[53px] leading-[43px]'>{stat.value}</h4>
                    <p className='font-poppins font-normal text-gradient uppercase xs:text-[20px] text-[15px] xs:leading-[26px] leading-[21px]'>{stat.title}</p>
                </div>
            ))}
        </div>
    )
}

export default Stats