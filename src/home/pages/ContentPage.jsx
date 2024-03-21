import { SideBar, ChatSide } from "../components";

export const ContentPage = () => {
    return (
        <div className="grid bg-slate-200 grid-cols-4 gap-2 *:rounded-3xl h-screen p-2 *:p-6">
            <SideBar />
            <ChatSide />
        </div>
    );
};
