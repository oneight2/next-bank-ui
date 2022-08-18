/* eslint-disable react/no-unescaped-entities */
import React from 'react'
import { features } from '../Constants'

const FeatureCard = ({ icon, title, content, index }) => {
    console.log(icon)
    return (
        <div className={`flex flex-row p-6 rounded-[20px] ${index !== features.length - 1 ? "mb-6" : "mb-0"} ${index === 1 ? "feature-card" : ""} feature-card-hover`} >
            <div className='w-[64px] h-[64px] rounded-full flexCenter'>
                <img src={`./assets/${icon}`} alt="" className='w-[50%] h-[50%] object-contain' />
            </div>
            <div className='flex-1 flex flex-col ml-3'>
                <h4 className='font-poppins font-semibold text-white text-[18px] leading-relaxed'>{title}</h4>
                <p className='text-dimWhite font-normal leading-relaxed'>{content}</p>
            </div>

        </div>
    )
}

const Business = () => {
    return (
        <div id='features' className='section'>
            <div className='sectionInfo'>
                <h2 className='heading2'>You do the business, <br className='sm:block hidden' />we'll handle the money</h2>
                <p className='paragraph max-w-[470px] mt-5'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus fuga ipsa praesentium error incidunt ipsam nihil ab cumque laborum blanditiis vero molestiae in ratione quo, quisquam placeat quia saepe illo sapiente optio doloremque, cupiditate dolorum quae vel! Mollitia, dolorum ab!.</p>
                <button className='btn-primary rounded-full mt-10'>Get Started</button>
            </div>
            <div className='sectionImg flex-col'>
                {features.map((feature, index) => (
                    <FeatureCard key={feature.id} {...feature} index={index} />
                ))}
            </div>
        </div>
    )
}

export default Business