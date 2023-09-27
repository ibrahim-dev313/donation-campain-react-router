import { useEffect, useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import { useLoaderData, useParams } from "react-router-dom";

const DonationDetails = () => {

    const [donation, setDonation] = useState();
    // eslint-disable-next-line no-unused-vars
    const [isDonationStored, setIsDonationStored] = useState(false);


    const { id } = useParams()
    const donations = useLoaderData()
    // console.log(id, donations);

    useEffect(() => {
        const findDonation = donations?.find(donation => donation.id == id);
        // console.log(findDonation);
        setDonation(findDonation)
    }, [id, donations])
    // console.log(donation);

    const { title, image, category, cat_bg_color, card_bg_color, text_color, price, description } = donation || {};


    const handleDonation = () => {
        const existingData = JSON.parse(localStorage.getItem("donationData")) || [];

        const isDataStored = existingData.some((data) => data.id === id);

        if (!isDataStored) {
            const cardData = {
                id: id,
                title: title,
                image: image,
                category: category,
                cat_bg_color: cat_bg_color,
                card_bg_color: card_bg_color,
                text_color: text_color,
                price: price,
                description: description,
            };

            existingData.push(cardData);

            localStorage.setItem("donationData", JSON.stringify(existingData));

            toast.success('Donation completed')

            setIsDonationStored(true);
        } else {
            toast.error("Already Donated");
        }
    };
    return (
        <div className="container grid w-full mx-auto">

            <div className="w-full shadow-xl  lg:rounded-xl card bg-base-100">
                <figure className="w-full rounded-xl"><img className="object-fill w-full " src={image} alt="" /></figure>
                <div className="absolute bottom-0 justify-start block w-full p-4 lg:rounded-b-xl md:p-8 bg-black/50 card-actions">
                    <button onClick={handleDonation} style={{ backgroundColor: text_color }} className="block px-3 py-2 text-xs font-bold text-white rounded-lg md:px-10 md:py-4 lg:text-2xl">Donate ${price}</button>
                </div>
            </div>
            <div className="my-5">
                <h2 className="mt-5 text-4xl font-bold card-title">{title}</h2>
                <p className="my-3 text-md font-extralight">{description}</p>

            </div>
            <Toaster toastOptions={{
                className: '',
                duration: 800,
                }}/>

        </div>

    );
};

export default DonationDetails;