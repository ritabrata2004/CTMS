import { Link, Outlet, useNavigate } from "react-router-dom";
import { database } from "../config/FirebaseConfig";
import { signOut } from "firebase/auth";
import { useEffect, useState } from "react";

const Navbar = () => {
    const navigate = useNavigate();
    const [userEmail, setUserEmail] = useState();
    const [isAdmin, setIsAdmin] = useState(false);
    console.log(userEmail);

    useEffect(() => {
        database.onAuthStateChanged(user => {
            if (user) {
                setUserEmail(user.email);
            } else {
                setUserEmail(null);
            }
        });
    }, [setUserEmail]);



    useEffect(() => {
        if (userEmail) {
            fetch('http://localhost:8000/user/' + userEmail)
                .then(res => res.json())
                .then(data => {
                    if (data.isAdmin) {
                        console.log(data.isAdmin);
                        setIsAdmin(true);
                    }
                });
        }
    }, [userEmail])



    const handleSignOut = async () => {
        try {
            const res = await signOut(database);
            if (res === undefined) {
                setUserEmail(null);
            }
        } catch (err) {
            console.log(err.message);
        }
    }


    return (
        <div>
            <header className="flex flex-wrap md:justify-start md:flex-nowrap z-50 w-full bg-white text-sm py-3 md:py-0 dark:bg-gray-800 fixed top-0">
                <nav className="max-w-[85rem] w-full mx-auto px-4 md:px-6 lg:px-8" aria-label="Global">
                    <div className="relative md:flex md:items-center md:justify-between">
                        <div className="flex items-center justify-between">
                            <a className="flex-none text-xl font-semibold dark:text-white" href="/dashboard" aria-label="Brand">CTMS</a>
                            <div className="md:hidden">
                                <button type="button" className="hs-collapse-toggle flex justify-center items-center size-9 text-sm font-semibold rounded-lg border border-gray-200 text-gray-800 hover:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none dark:text-white dark:border-gray-700 dark:hover:bg-gray-700" data-hs-collapse="#navbar-collapse-with-animation" aria-controls="navbar-collapse-with-animation" aria-label="Toggle navigation">
                                    <svg className="hs-collapse-open:hidden flex-shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="3" x2="21" y1="6" y2="6" /><line x1="3" x2="21" y1="12" y2="12" /><line x1="3" x2="21" y1="18" y2="18" /></svg>
                                    <svg className="hs-collapse-open:block hidden flex-shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 6 6 18" /><path d="m6 6 12 12" /></svg>
                                </button>
                            </div>
                        </div>

                        <div id="navbar-collapse-with-animation" className="hs-collapse hidden overflow-hidden transition-all duration-300 basis-full grow md:block">
                            <div className="overflow-hidden overflow-y-auto max-h-[75vh] [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-track]:bg-gray-100 [&::-webkit-scrollbar-thumb]:bg-gray-300 dark:[&::-webkit-scrollbar-track]:bg-slate-700 dark:[&::-webkit-scrollbar-thumb]:bg-slate-500">
                                <div className="flex flex-col gap-x-0 mt-5 divide-y divide-dashed divide-gray-200 md:flex-row md:items-center md:justify-end md:gap-x-7 md:mt-0 md:ps-7 md:divide-y-0 md:divide-solid dark:divide-gray-700">
                                    <div className="hs-dropdown [--strategy:static] md:[--strategy:absolute] [--adaptive:none] md:[--trigger:hover] py-3 md:py-6">
                                        <Link type="button" className="flex items-center w-full text-gray-800 font-medium dark:text-gray-200" to="/points-table">
                                            Points table
                                        </Link>
                                    </div>
                                    <div className="hs-dropdown [--strategy:static] md:[--strategy:absolute] [--adaptive:none] md:[--trigger:hover] py-3 md:py-6">
                                        <Link type="button" className="flex items-center w-full text-gray-800 font-medium dark:text-gray-200" to="/dashboard">
                                            Dashboard
                                        </Link>
                                    </div>
                                    <div className="hs-dropdown [--strategy:static] md:[--strategy:absolute] [--adaptive:none] md:[--trigger:hover] py-3 md:py-6">
                                        <Link type="button" className="flex items-center w-full text-gray-800 font-medium dark:text-gray-200" to="/stats">
                                            Stats
                                        </Link>
                                    </div>
                                    <div className="font-medium text-gray-800 py-3 md:py-6 dark:text-gray-200 " href="#">
                                        {userEmail}
                                        {
                                            isAdmin && <span className=" p-1 m-3  bg-green-500 text-xs  dark:text-gray-100">Admin</span>
                                        }

                                    </div>

                                    <div className="pt-3 md:pt-0">
                                        {userEmail && <button className="py-2.5 px-4 inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none" href="#" onClick={handleSignOut}>
                                            Log Out
                                        </button>}
                                        {!userEmail && <button className="py-2.5 px-4 inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none" href="#" onClick={() => { navigate("/login") }}>
                                            Log In
                                        </button>}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </nav>
            </header>
            <Outlet />
        </div>
    )

}

export default Navbar;