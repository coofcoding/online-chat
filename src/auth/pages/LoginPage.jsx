import { Link } from "react-router-dom";
import { Carousel } from 'flowbite-react';

export const LoginPage = () => {
    return (
        <>
            <div className="absolute inset-0 -z-10 h-full w-full bg-white bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px]"></div>
            <div className="flex flex-col md:flex-row h-screen w-full justify-center items-center">
                <div className="h-5/6 w-full md:w-1/2 lg:w-1/3">
                    <Carousel slideInterval={2000} className="*:rounded-none">
                        <img
                            src="https://images.pexels.com/photos/346529/pexels-photo-346529.jpeg"
                            alt="..."
                            className="object-cover w-full h-full"
                        />
                        <img
                            src="https://images.pexels.com/photos/36717/amazing-animal-beautiful-beautifull.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                            alt="..."
                            className="object-cover w-full h-full"
                        />
                        <img
                            src="https://images.pexels.com/photos/1366919/pexels-photo-1366919.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                            alt="..."
                            className="object-cover w-full h-full"
                        />
                        <img
                            src="https://images.pexels.com/photos/1955134/pexels-photo-1955134.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                            alt="..."
                            className="object-cover w-full h-full"
                        />
                        <img
                            src="https://images.pexels.com/photos/1743165/pexels-photo-1743165.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                            alt="..."
                            className="object-cover w-full h-full"
                        />
                    </Carousel>
                </div>
                <div className="flex justify-start items-center flex-col h-5/6 w-full md:w-1/2 lg:w-1/3 pt-12 border bg-white border-slate-200">
                    <h1
                        className="text-slate-400 text-5xl mb-10 md:mb-20"
                        id="logo"
                    >
                        Chatt<span className="text-blue-400">!ng</span>
                    </h1>
                    <h3 className="text-slate-400 mb-4 text-xl font-light text-center md:mb-10">
                        start to interact with other users!
                    </h3>
                    <form className="flex w-10/12 flex-col justify-center items-center gap-y-3">
                        <input
                            className="outline-none border border-slate-300 w-full h-14 p-4 rounded-md focus:border-blue-400 ring ring-white transition-all duration-200 placeholder:text-slate-300 text-slate-600 focus:ring-blue-500"
                            type="email"
                            placeholder="email"
                        />
                        <input
                            className="outline-none border border-slate-300 w-full h-14 p-4 rounded-md focus:border-blue-400 ring ring-white transition-all duration-200 placeholder:text-slate-300 text-slate-600 focus:ring-blue-500"
                            type="password"
                            placeholder="password"
                        />
                        <button className="overflow-hidden mt-5 w-32 p-2 h-12 bg-black text-white border-none rounded-md text-xl font-bold cursor-pointer relative z-10 group">
                            Sign in
                            <span className="absolute w-36 h-32 -top-8 -left-2 bg-white rotate-12 transform scale-x-0 group-hover:scale-x-100 transition-transform group-hover:duration-500 duration-1000 origin-left"></span>
                            <span className="absolute w-36 h-32 -top-8 -left-2 bg-blue-400 rotate-12 transform scale-x-0 group-hover:scale-x-100 transition-transform group-hover:duration-700 duration-700 origin-left"></span>
                            <span className="absolute w-36 h-32 -top-8 -left-2 bg-blue-600 rotate-12 transform scale-x-0 group-hover:scale-x-50 transition-transform group-hover:duration-1000 duration-500 origin-left"></span>
                            <span className="group-hover:opacity-100 group-hover:duration-1000 duration-100 opacity-0 absolute top-2.5 left-6 z-10">
                                Continue
                            </span>
                        </button>
                    </form>
                    <div className="w-10/12 h-3 border-b text-center mt-10">
                        <span className="relative translate-y-40 bg-white px-3 text-slate-300">
                            or
                        </span>
                    </div>

                    <span className="mt-12 text-slate-400">
                        Are you new?{" "}
                        <Link
                            to="register"
                            className="underline underline-offset-2 hover:underline-offset-4 text-blue-400 cursor-pointer transition-all duration-200"
                        >
                            Sign out
                        </Link>
                    </span>
                </div>
            </div>
        </>
    );
};
