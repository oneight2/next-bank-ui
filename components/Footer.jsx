import React from 'react'
import { footerLinks, socialMedia } from '../Constants'

const Footer = () => {
    return (
        <div className='flexCenter paddingY flex-col'>
            <div className='flexStart md:flex-row flex-col mb-8 w-full'>
                <div className='flex-1 flex flex-col justify-start mr-10'>
                    <img src="./assets/logo.svg" className='w-[266px] h-[72px] object-contain' alt="" />
                    <p className='paragraph mt-4 max-w-[310px]'>A new way to make the payments easy, reliable and secure.</p>
                </div>
                <div className='flex-[1.5] w-full flex flex-row justify-between flex-wrap md:mt-0 mt-10'>
                    {footerLinks.map((footerlink, index) => (
                        <div key={index} className='flex flex-col ss:my-0 my-4 min-w-[150px]'>
                            <h4 className='font-medium text-white text-[20px]'>{footerlink.title}</h4>
                            <ul className='list-none mt-4'>
                                {footerlink.links.map((link, index) => (
                                    <li key={link.name} className={`font-poppins font-normal text-[16px] text-dimWhite hover:text-secondary cursor-pointer leading-[32px]  ${index !== footerlink.links.length - 1 ? 'mb-4' : 'mb-0'}`}>
                                        {link.name}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>
            <div className='w-full flex justify-between items-center md:flex-row flex-col pt-6 border-t-[1px] border-t-[#3f3r45]'>
                <p className='font-normal text-white text-center text-[18px] leading-[27px]'>2021 HooBank. All Rights Reserved.</p>
                <div className='flex flex-row md:mt-0 mt-6'>
                    {socialMedia.map((social, index) => (
                        <img src={`./assets/${social.icon}`} key={social.id} alt="" className={`w-[21px] h-[21px] object-contain cursor-pointer ${index !== socialMedia.length - 1 ? 'mr-6' : 'mr-0'}`} />
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Footer