import { Link, NavLink } from 'react-router-dom';

const Navbar = () => {
    return (
        <>
            <div className="container mx-auto navbar bg-base-100">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            <li><a>Item 1</a></li>

                        </ul>
                    </div>
                    <Link className='w-36' to="/"><img src="https://i.ibb.co/ypqTH2N/Logo.png" alt="" /></Link>
                </div>
                <div className="hidden font-semibold navbar-end lg:flex">
                    <ul className="px-1 menu menu-horizontal">
                        <NavLink
                            to="/"
                            className={({ isActive, isPending }) =>
                                isPending ? "pending p-5" : isActive ? "active p-5 border-b-4 border-red-500" : " p-5"
                            }
                        >
                            Home
                        </NavLink>
                        <NavLink
                            to="/donations"
                            className={({ isActive, isPending }) =>
                                isPending ? "pending p-5" : isActive ? "p-5 border-b-4 border-red-500" : " p-5"
                            }
                        >
                            Donations
                        </NavLink>
                        <NavLink
                            to="/stats"
                            className={({ isActive, isPending }) =>
                                isPending ? "pending p-5" : isActive ? "active p-5 border-b-4 border-red-500" : " p-5"
                            }
                        >
                            Stats
                        </NavLink>


                    </ul>
                </div>

            </div>
        </>
    );
};

export default Navbar;