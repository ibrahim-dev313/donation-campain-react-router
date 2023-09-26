import React from 'react';
import { Link } from 'react-router-dom';

const DonationCard = ({ donation }) => {
    const { id, title, image, category, cat_bg_color, card_bg_color, text_color, price, description } = donation || {};
    return (
        <Link to={`/donation/${id}`}>
            <div style={{ backgroundColor: card_bg_color }} className="shadow-xl w-78 card bg-base-100">
                <figure className='w-full'><img className='w-full' src={image} alt="Shoes" /></figure>
                <div className="card-body">
                    <div className="justify-start card-actions">
                        <div style={{ backgroundColor: cat_bg_color, color: text_color }} className="px-3 font-semibold border rounded">{category}</div>
                    </div>
                    <h2 style={{ color: text_color }} className="font-extrabold card">
                        {title}
                    </h2>

                </div>
            </div>
        </Link>
    );
};

export default DonationCard;