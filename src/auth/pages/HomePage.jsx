import { Link } from "react-router-dom";
import { ChevronRight } from "lucide-react";

export const HomePage = () => {
    return (
        <>
            <span className="absolute bottom-4 left-1/2 -translate-x-1/2 text-sm text-center min-w-full">created with 💟 by <a href="https://github.com/coofcoding" target="_blank" rel="noopener noreffer" className="border-b-2 border-purple-400 text-purple-500 pb-px cursor-pointer hover:pb-1 duration-200 transition-all">coofcoding</a></span>
            <div class="absolute top-0 z-[-2] h-screen w-screen bg-white bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,#00ffff30,rgba(255,255,255,0))]"></div>
            <div className="flex w-full h-screen justify-center items-center flex-col gap-10">
                <div className="flex flex-col md:flex-row text-center items-center justify-center gap-4">
                    <span className="font-medium text-5xl text-slate-500">
                        Welcome to
                    </span>
                    <div>
                        <span className="text-slate-400 text-5xl" id="logo">
                            Chatt<span className="text-blue-400">!ng</span>
                        </span>
                        <span className="text-5xl text-slate-500">!</span>
                    </div>
                </div>
                <span className="max-w-lg text-center text-pretty text-lg text-slate-500">
                    Stay in contact with anyone around the whole{" "}
                    <span className="border-b-2 border-blue-500 text-blue-500 hover:pb-0.5 cursor-pointer transition-all duration-75">
                        world
                    </span>{" "}
                    and meet new people with different cultures!
                </span>
                <div className="flex flex-col md:flex-row items-center justify-center gap-3">
                    <Link className="group" to="/auth/login">
                        <div className="relative border py-2 group-hover:opacity-100 rounded-md w-44 text-center hover:bg-slate-100 duration-100 transition-all hover:border-slate-300 flex justify-center text-slate-600">
                            Sign in
                            <ChevronRight className="absolute right-7 opacity-0 group-hover:opacity-100 group-hover:right-4 duration-200 transition-all text-slate-400" />
                        </div>
                    </Link>
                    <Link className="group" to="/auth/register">
                        <div className="relative bg-blue-500 py-2 group-hover:opacity-100 rounded-md w-44 text-center hover:bg-blue-600 duration-100 transition-all hover:border-slate-300 flex justify-center text-white">
                            Sign out
                            <ChevronRight className="absolute right-7 opacity-0 group-hover:opacity-100 group-hover:right-4 duration-200 transition-all text-blue-400" />
                        </div>
                    </Link>
                </div>
            </div>
        </>
    );
};
