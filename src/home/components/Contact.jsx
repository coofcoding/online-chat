import { Avatar } from "flowbite-react";
import { PropTypes } from "prop-types";

export const Contact = ({ photo, name }) => {
  return (
    <Avatar img={ photo } rounded className="flex items-center justify-start bg-slate-200 p-3 rounded-lg mr-3 hover:bg-slate-300 duration-200 transition-all cursor-pointer">
      <div className="space-y-1 font-medium dark:text-white">
        <div className="text-slate-600">{ name }</div>
      </div>
    </Avatar>
  )
}

Contact.propTypes = {
    photo: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired
}