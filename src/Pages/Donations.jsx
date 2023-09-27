import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Donations = () => {
  const [donationData, setDonationData] = useState([]);
  const [showAll, setShowAll] = useState(false);

  useEffect(() => {
    // Retrieve the stored donation data from local storage
    const storedData = JSON.parse(localStorage.getItem("donationData")) || [];
    setDonationData(storedData);
  }, []);

  const visibleDonationData = showAll ? donationData : donationData.slice(0, 4);

  return (
    <div className="container grid grid-cols-1 gap-4 mx-auto md:grid-cols-1 lg:grid-cols-2">
      {visibleDonationData.length > 0 ? (
        visibleDonationData.map((donation) => (
          <div key={donation.id} className="grid grid-cols-5 shadow-xl bg-base-100">
            <figure className="col-span-2">
              <img src={donation.image} className="object-cover w-full h-full rounded-s" alt={donation.title} />
            </figure>
            <div style={{ backgroundColor: donation.card_bg_color }} className="col-span-3 rounded-e card-body">
              <div className="w-full">
                <div style={{ backgroundColor: donation.cat_bg_color, color: donation.text_color }} className="inline px-3 py-1 font-semibold border-0 rounded">{donation.category}</div>
              </div>
              <h2 className="font-bold text-md">{donation.title}</h2>
              <div className="flex flex-col card-actions">
                <p style={{ color: donation.text_color }} className="text-lg font-semibold ">${donation.price}</p>
                <button
                  style={{ backgroundColor: donation.text_color }}
                  className="text-white border-0 btn btn-primary"
                  onClick={() => {
                  }}
                >
                  View Details
                </button>
              </div>
            </div>
          </div>
        ))
      ) : (
        <main className="grid min-h-full px-6 py-24 bg-white lg:col-span-2 place-items-center sm:py-32 lg:px-8">
          <div className="text-center">
            <p className="text-2xl font-semibold text-indigo-600">Sorry</p>
            <h1 className="mt-4 text-3xl font-bold tracking-tight text-gray-900 sm:text-5xl">No Donation found</h1>
            <div className="flex items-center justify-center mt-10 gap-x-6">
              <Link
                to='/'
                className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Go back home
              </Link>
            </div>
          </div>
        </main>
      )}
      {donationData.length > 4 && !showAll && (
        <div className="col-span-2 text-center">
          <button
            className="px-6 btn btn-success"
            onClick={() => setShowAll(true)}
          >
            See All
          </button>
        </div>
      )}
    </div>
  );
};

export default Donations;
