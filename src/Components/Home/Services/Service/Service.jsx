import React from 'react';

const Service = ({service}) => {
    const { title, description, img, price} = service
    return (
        <div className='rounded-xl p-2 border  relative'>
            <img className='rounded-t-2xl ' src={img} alt="" />
            <p className='font-bold'>Service Name : {title}</p>
            <p>Service Description : {description.slice(0,100)}</p>
            <p className='text-orange-400'>price :{price}</p>
            <button className='btn btn-success mb-0'> Buy Now</button>
        </div>
    );
};

export default Service;
