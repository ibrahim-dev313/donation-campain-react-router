/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react';
import { Link } from 'react-router-dom';

const DonationCard = ({ donation }) => {
    const { id, title, image, category, cat_bg_color, card_bg_color, text_color, price, description } = donation || {};
    return (
        <Link to={`/donation/${id}`}>
            <div style={{ backgroundColor: card_bg_color }} className="shadow-xl sm:h-[23.5rem] md:h-[20rem] rounded-lg bg-base-100">
                <figure className='w-full '><img className='w-full rounded-t-lg' src={image} alt="Shoes" /></figure>
                <div className="px-4 py-8">
                    
                    <div className="justify-start card-actions">
                        <div style={{ backgroundColor: cat_bg_color, color: text_color }} className="px-3 font-semibold border rounded">{category}</div>
                    </div>
                    <h2 style={{ color: text_color }} className="mt-2 ml-1 font-extrabold card">
                        {title}
                    </h2>

                </div>
            </div>
        </Link>
    );
};

export default DonationCard;