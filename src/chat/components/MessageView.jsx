import PropTypes from "prop-types";

export const MessageView = ({ user, message, time }) => {
    return (
        <div
            className={`flex mr-3 ${
                user ? "justify-end" : "justify-start"
            }`}
        >
            <div className="flex flex-col">
                <div
                    className={`my-1 p-4 w-fit h-fit rounded-lg text-sm ${
                        user ? "bg-blue-200" : "bg-slate-200"
                    }`}
                >
                    {message}
                </div>
                <span className={`mx-1 text-sm text-slate-400 ${ user  && "text-end" } `}>{time}</span>
            </div>
        </div>
    );
};

MessageView.propTypes = {
    user: PropTypes.bool,
    message: PropTypes.string.isRequired,
    time: PropTypes.string.isRequired,
};
