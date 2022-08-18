import React from 'react'

const Billing = () => {
    return (
        <div id="billing" className="section">
            <div className="sectionImg flex-col relative">
                <div className='z-[0] absolute w-[100%] h-[100%] left-[-50%] top-[-10%] rounded blue__gradient' />
                <img src="./assets/bill.png" className="w-[100%] h-[100%] z-[2] " alt="" />
            </div>
            <div className="sectionInfo">
                <h4 className="heading2 mr-4">Easily control your billing & invoicing.</h4>
                <p className="font-normal text-dimWhite leading-relaxed max-w-[470px]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia aliquam porro aspernatur, quam reprehenderit optio ad error excepturi repellendus labore a? Libero blanditiis officiis exercitationem ullam, adipisci omnis alias labore!</p>
                <div className='flex flex-1 mt-5 '>
                    <img src="./assets/apple.svg" className='w-[128px] h-[42px] hover:drop-shadow-md' alt="" />
                    <img src="./assets/google.svg" className='w-[128px] h-[42px] hover:drop-shadow-md' alt="" />
                </div>
            </div>
        </div>
    )
}

export default Billing