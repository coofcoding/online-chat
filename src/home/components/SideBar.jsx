import { HeadBar, SearchBar, Friends } from "./";

export const SideBar = () => {
    return (
        <div className="bg-slate-100 min-w-60">
            <HeadBar />
            <SearchBar />
            <Friends/>
        </div>
    );
};
