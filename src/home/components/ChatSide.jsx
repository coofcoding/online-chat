import { NoSelected, ChatView } from "./";

export const ChatSide = () => {

    const chatSelected = false;

    return <div className="bg-slate-100 col-span-3 border">
        {
            ( chatSelected )
            ? <ChatView/>
            : <NoSelected/>
        }
    </div>;
};
