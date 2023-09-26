import React from 'react';
import { useLoaderData } from 'react-router-dom';
import DonationCard from './DonationCard';

const DonationCards = () => {

    const donations =useLoaderData()
    console.log(donations);
    return (
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
            {
                donations?.map(donation=><DonationCard key={donation.id} donation={donation}></DonationCard>)
            }
        </div>
    );
};

export default DonationCards;