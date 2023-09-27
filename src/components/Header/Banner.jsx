
const Banner = () => {
    return (
        <>
            <div className="container h-[30vh] md:h-[30vh] lg:h-[55vh] mx-auto my-3 rounded-xl hero" style={{ backgroundImage: 'url(https://i.ibb.co/jLG2bsC/Clothing.png)' }}>
                <div className="hero-overlay bg-opacity-60 rounded-xl"></div>
                <div className="text-center hero-content text-neutral-content">
                    <div className="max-w-md">
                        <h1 className="mb-5 text-5xl font-bold">Lets help for the better society</h1>
                        <div className="join">
                            <input className="input input-bordered join-item" placeholder="Search" />
                            <button className=" btn btn-square join-item">
                                <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>

                            </button>
                        </div>

                        
                    </div>
                </div>
            </div>
        </>
    );
};

export default Banner;