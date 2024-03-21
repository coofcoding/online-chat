import { NoSelected, ChatView } from "./";

export const ChatSide = () => {

    const chatSelected = true;

    return <div className="bg-slate-100 col-span-3 border">
        {
            ( chatSelected )
            ? <ChatView/>
            : <NoSelected/>
        }
    </div>;
};
