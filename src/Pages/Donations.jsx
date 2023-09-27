import { useEffect, useState } from "react";

const Donations = () => {
  const [donationData, setDonationData] = useState([]);

  useEffect(() => {
    // Retrieve the stored donation data from local storage
    const storedData = JSON.parse(localStorage.getItem("donationData")) || [];
    setDonationData(storedData);
  }, []);

  return (
    <div className="container grid grid-cols-1 gap-4 mx-auto md:grid-cols-2">
      {donationData.map((donation) => (
        <div key={donation.id} className="grid grid-cols-5 shadow-xl bg-base-100">
          <figure className="col-span-2">
            <img src={donation.image} className="object-cover w-full h-full rounded-s " alt={donation.title} />
          </figure>
          <div style={{backgroundColor: donation.cat_bg_color}} className="col-span-3 rounded-e card-body">
            <h2 className="font-bold text-md">{donation.title}</h2>
            <div className="flex flex-col card-actions">
              <p className="text-lg font-bold text-green-600">${donation.price}</p>
              <button
                style={{backgroundColor: donation.text_color}}
                className="text-white border-0 btn btn-primary"
                onClick={() => {
                  // Handle donation button click if needed
                }}
              >
                View Details
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Donations;
