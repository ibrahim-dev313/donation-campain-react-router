import { useLoaderData } from 'react-router-dom';
import DonationCard from './DonationCard';

const DonationCards = () => {

    const donations =useLoaderData()
    console.log(donations);
    return (
        <div className='container grid grid-cols-1 gap-5 mx-auto md:grid-cols-3 lg:grid-cols-4'>
            {
                donations?.map(donation=><DonationCard key={donation.id} donation={donation}></DonationCard>)
            }
        </div>
    );
};

export default DonationCards;