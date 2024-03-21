import { Link } from "react-router-dom";
import { ChevronRight } from "lucide-react";
import { AvatarGroup, Avatar } from "flowbite-react";

export const HomePage = () => {
    return (
        <>
            <span className="absolute bottom-4 left-1/2 -translate-x-1/2 text-sm text-center min-w-full">
                created with 💟 by{" "}
                <a
                    href="https://github.com/coofcoding"
                    target="_blank"
                    rel="noopener noreffer"
                    className="border-b-2 border-purple-400 text-purple-500 pb-px cursor-pointer hover:pb-1 duration-200 transition-all"
                >
                    coofcoding
                </a>
            </span>
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
                <div className="flex flex-wrap gap-2">
                    <AvatarGroup>
                        <Avatar
                            img="https://images.unsplash.com/photo-1633332755192-727a05c4013d"
                            className="hover:-translate-y-1 cursor-pointer duration-150 transition-all"
                            rounded
                            stacked
                        />
                        <Avatar
                            img="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde"
                            className="hover:-translate-y-1 cursor-pointer duration-150 transition-all"
                            rounded
                            stacked
                        />
                        <Avatar
                            img="https://images.unsplash.com/photo-1527980965255-d3b416303d12"
                            className="hover:-translate-y-1 cursor-pointer duration-150 transition-all"
                            rounded
                            stacked
                        />
                        <Avatar
                            img="https://images.ctfassets.net/h6goo9gw1hh6/2sNZtFAWOdP1lmQ33VwRN3/24e953b920a9cd0ff2e1d587742a2472/1-intro-photo-final.jpg?w=1200&h=992&fl=progressive&q=70&fm=jpg"
                            className="hover:-translate-y-1 cursor-pointer duration-150 transition-all"
                            rounded
                            stacked
                        />
                        <Avatar
                            img="https://www.befunky.com/images/wp/wp-2021-01-linkedin-profile-picture-after.jpg?auto=avif,webp&format=jpg&width=944"
                            className="hover:-translate-y-1 cursor-pointer duration-150 transition-all"
                            rounded
                            stacked
                        />
                    </AvatarGroup>
                    <AvatarGroup>
                        <Avatar
                            img="https://community.adobe.com/t5/image/serverpage/image-id/145201iE0ECF5C6ECBD959E/image-size/large/is-moderation-mode/true?v=v2&px=999"
                            className="hover:-translate-y-1 cursor-pointer duration-150 transition-all"
                            rounded
                            stacked
                        />
                        <Avatar
                            img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBwgu1A5zgPSvfE83nurkuzNEoXs9DMNr8Ww&usqp=CAU"
                            className="hover:-translate-y-1 cursor-pointer duration-150 transition-all"
                            rounded
                            stacked
                        />
                        <Avatar
                            img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRbfKhOuGk_Ag_8BBQ5Kc0xi1pAXxGNGP9JYQ&usqp=CAU"
                            className="hover:-translate-y-1 cursor-pointer duration-150 transition-all"
                            rounded
                            stacked
                        />
                        <Avatar
                            img="https://imgv3.fotor.com/images/gallery/Realistic-Male-Profile-Picture.jpg"
                            className="hover:-translate-y-1 cursor-pointer duration-150 transition-all"
                            rounded
                            stacked
                        />
                        <Avatar.Counter total={99} href="#" />
                    </AvatarGroup>
                </div>
            </div>
        </>
    );
};
