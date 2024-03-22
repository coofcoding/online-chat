import { HeaderChat, MessageContent, WriteField } from "../../chat/components";

export const ChatView = () => {
    return (
        <div className="grid h-full overflow-hidden max-h-screen px-2">
            <HeaderChat />
            <MessageContent />
            <WriteField />
        </div>
    );
};
