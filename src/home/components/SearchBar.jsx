import { UserRoundSearch } from "lucide-react";

export const SearchBar = () => {
    return (
        <div className="relative flex items-center">
            <UserRoundSearch className="absolute right-5 text-slate-500" />
            <input
                placeholder="search..."
                className="w-full p-3 rounded-xl bg-slate-200 focus:bg-white outline-none duration-200 transition-all font-semibold placeholder:text-slate-400 border border-transparent focus:border-blue-300 ring ring-transparent focus:ring-blue-200 text-slate-500"
            />
        </div>
    );
};
