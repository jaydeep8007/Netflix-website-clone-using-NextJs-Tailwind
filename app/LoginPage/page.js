




const LoginPage = () => {
    return (
        <div>
            <div className="flex flex-col   justify-center items-center cover w-full  h-[140vh] bg-[url('https://assets.nflxext.com/ffe/siteui/vlv3/c906271d-7184-4eec-83c9-b6d4c1a068ec/728874a6-eeda-400a-9bcf-a935a1408a4f/IN-en-20231127-popsignuptwoweeks-perspective_alpha_website_large.jpg')]">
                <nav className="absolute top-5 left-5   bg-transparent  m-auto z-10 ">
                    <span className="z-10">
                        <img
                            className="h-10  lg:h-14  p-0 m-0"
                            src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/7a/Logonetflix.png/1200px-Logonetflix.png"
                            alt="logo"
                        />
                    </span>
                </nav>

                <div className="absolute w-full   h-[140vh] bg-black opacity-50 "></div>

                <main className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 mb-10 opacity-80 bg-black  h-fit rounded-md w-96 px-8 py-12 z-10 text-white border-white ">
                    <form className="text-left">
                        <h1 className="text-3xl  mb-6 text-white ">Sign In</h1>
                        <div className="mb-6">
                            <input
                                type="email"
                                placeholder="Email or phone number"
                                className="bg-gray-800 z-10  rounded-md py-3 px-4 w-full"
                            />
                        </div>
                        <div className="mb-6">
                            <input
                                type="password"
                                placeholder="Password"
                                className="bg-gray-800 rounded-md py-3 px-4 w-full"
                            />
                        </div>
                        <div className="mb-6 flex items-center">
                            <input type="checkbox" className="h-4 w-4 mr-2" />
                            <label className="text-sm text-gray-400">Remember me</label>
                        </div>
                        <button
                            type="submit"
                            className="bg-red-600 text-white font-semibold py-3 rounded-md w-full"
                        >
                            Sign In
                        </button>
                        <div className="mt-4 text-sm">
                            <a
                                href="https://www.netflix.com/dz-en/LoginHelp"
                                className="text-blue-500 hover:underline"
                            >
                                Need Help ?
                            </a>
                        </div>
                    </form>
                    <div className="mt-6 flex ">
                        <span className="mr-3 text-gray-400"> New to Netflix?</span>
                        <p className="hover:underline cursor-pointer">Sign up now.</p>
                    </div>
                </main>

                <footer className=" absolute -bottom-[40vh]  h-[40vh] w-full bg-black bg-opacity-60 text-gray-400 text-sm ">
                    <div className="scale-90 flex flex-col w-[75vw] h-[40vh] m-auto pt-11">
                        <span className="my-7">Questions? Call 000-800-919-1694</span>

                        <div className="flex flex-row gap-2 justify-between mx-2">
                            <div className="flex flex-col space-y-4">
                                <span className="underline">FAQ</span>
                                <span className="underline">Investor Relations</span>
                            </div>
                            <div className="flex flex-col space-y-4">
                                <span className="underline">Help Cetre</span>
                                <span className="underline">Jobs</span>
                            </div>

                            <div className="flex flex-col space-y-4">
                                <span className="underline">Account</span>
                            </div>

                            <div className="flex flex-col space-y-4">
                                <span className="underline">Media Centre</span>
                            </div>
                        </div>
                        <div className="mt-8 ">
                            <select className="bg-gray-800 text-white rounded-md py-2 px-4">
                                <option>English</option>
                                <option>العربية</option>
                                <option>Français</option>
                            </select>
                        </div>
                    </div>
                </footer>
            </div>
        </div>
    );
};

export default LoginPage;
