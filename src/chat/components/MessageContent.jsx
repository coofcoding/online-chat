import { MessageView } from "./";

export const MessageContent = () => {
    return (
        <div className="flex flex-col overflow-y-auto h-[70svh]">
            <MessageView
                user={true}
                message="Hello, how are you doing today?"
                time="12:00"
            />
            <MessageView message="Fine, and you?" time="12:21" />
            <MessageView
                user={true}
                message="Perfectly good, thanks for asking"
                time="12:22"
            />
            <MessageView
                user={true}
                message="Hey, i want to asking you something, did you go to class this morning?"
                time="20:42"
            />
            <MessageView
                message="Yeah, i did, the teacher learn us a lot of different stuff and tomorrow will be a test 😬"
                time="21:03"
            />
            <MessageView
                user={true}
                message="Ohh really? I don't know nothing hahaha"
                time="21:31"
            />
            <MessageView
                message="Don't worry, i can help you to study tomorrow in the morning, the exam will be in the evening so we can do it!"
                time="21:36"
            />
            <MessageView
                user={true}
                message="Thank youuuuuuu, you already save my life."
                time="21:38"
            />
            <MessageView
                message="Hahaha, it's okey, you are my best friend so it's the minimum stuff that i can do for you"
                time="21:40"
            />
            <MessageView
                message="Also, we can speak about something that i hear in the class"
                time="21:44"
            />
            <MessageView
                message="Someone was speak shit about you, i feel really upset about that"
                time="21:46"
            />
            <MessageView user={true} message="Who? 😡" time="21:49" />
        </div>
    );
};
