import React from 'react'
import { clients } from '../Constants'

const Clients = () => {
    return (
        <div className='flexCenter my-4'>
            <div className='flexCenter flex-wrap w-full'>
                {clients.map((client, index) => (
                    <div key={client.id} className="flex-1 flexCenter sm:min-w-[192px] min-w-[120px] m-5">
                        <img src={`./assets/${client.logo}`} className="sm:w-[192px] w-[100px] object-contain" alt="" />
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Clients