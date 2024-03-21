import { Avatar, Dropdown } from "flowbite-react";
import { LogOut } from "lucide-react";
import { Ellipsis } from "lucide-react";

export const HeadBar = () => {
    return (
        <div className="flex items-center justify-between w-full">
            <Avatar
                img="/photo_example.png"
                rounded
                bordered
                color="blue"
                className="hover:scale-105"
            />

            <Dropdown
                label={
                    <div className="p-2 hover:bg-slate-200 rounded-full duration-100 transition-all cursor-pointer">
                        <Ellipsis />
                    </div>
                }
                arrowIcon={false}
                inline
                className="bg-slate-100 rounded-3xl p-2 w-52"
            >
                <Dropdown.Header>
                    <span className="block text-sm text-slate-600">Kevin Lopez</span>
                    <span className="block truncate text-sm font-medium text-slate-400">
                        @k3vinlz
                    </span>
                </Dropdown.Header>
                <Dropdown.Item className="hover:!bg-slate-200 rounded-3xl duration-200 transition-all outline-none justify-between group">Sign out <LogOut className="group-hover:mr-0 group-hover:opacity-100 duration-200 transition-all mr-6 opacity-0 text-slate-400"/></Dropdown.Item>

            </Dropdown>
        </div>
    );
};
