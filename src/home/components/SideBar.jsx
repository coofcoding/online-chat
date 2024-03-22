import { HeadBar, SearchBar } from "./";

export const SideBar = () => {
    return (
        <div className="bg-slate-100 *:mb-6 min-w-60">
            <HeadBar />
            <SearchBar />
        </div>
    );
};
