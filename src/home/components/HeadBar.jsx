import { Avatar, Dropdown } from "flowbite-react";
import { LogOut, UserRoundPlus, Ellipsis } from "lucide-react";
import Swal from "sweetalert2";

export const HeadBar = () => {
    const addNewFriend = async () => {
        const inputValue = "";
        const { value: profileUsername } = await Swal.fire({
            title: "Add new friend",
            input: "text",
            html: "Please enter the username here <br/> <span class='text-sm text-slate-400'>without the at '@' character</span>",
            inputPlaceholder: "username",
            inputValue,
            confirmButtonColor: "#3085d6",
            showCancelButton: true,
            inputValidator: value => {
                if (!value) {
                    return "Please, insert a valid username";
                }
            },
        });
        if (profileUsername) {
            Swal.fire({
                title: "The friend request was sent successfully",
                showConfirmButton: false,
                icon: "success",
                timer: "2000"
            });
        }
    };

    return (
        <div className="flex items-center justify-between w-full mb-6">
            <div className="flex justify-center items-center gap-3">
                <Avatar
                    img="/photo_example.png"
                    rounded
                    bordered
                    color="blue"
                    className="hover:scale-105"
                />
                <span className="text-sm font-semibold text-slate-600">
                    Kevin Lopez
                </span>
            </div>

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
                    <span className="block text-sm text-slate-600">
                        Kevin Lopez
                    </span>
                    <span className="block truncate text-sm font-medium text-slate-400">
                        @k3vinlz
                    </span>
                </Dropdown.Header>
                <Dropdown.Item
                    onClick={addNewFriend}
                    className="hover:!bg-slate-200 rounded-3xl duration-200 transition-all outline-none justify-between group"
                >
                    Add Friend
                    <UserRoundPlus className="group-hover:mr-0 group-hover:opacity-100 duration-200 transition-all mr-6 opacity-0 text-slate-400" />
                </Dropdown.Item>
                <Dropdown.Item className="hover:!bg-slate-200 rounded-3xl duration-200 transition-all outline-none justify-between group">
                    Sign out{" "}
                    <LogOut className="group-hover:mr-0 group-hover:opacity-100 duration-200 transition-all mr-6 opacity-0 text-slate-400" />
                </Dropdown.Item>
            </Dropdown>
        </div>
    );
};
