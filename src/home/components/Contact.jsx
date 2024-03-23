import { Avatar } from "flowbite-react";
import { PropTypes } from "prop-types";

export const Contact = ({ photo, name, isActive }) => {
  return (
    <Avatar img={ photo } rounded className={ `flex items-center justify-start p-3 rounded-lg mr-3 duration-200 transition-all cursor-pointer ${ isActive ? "bg-blue-300 hover:bg-blue-400 text-blue-700" :"bg-slate-200 hover:bg-slate-300 text-slate-600" }` }>
      <div className="space-y-1 font-medium dark:text-white">
        <div>{ name }</div>
      </div>
    </Avatar>
  )
}

Contact.propTypes = {
    photo: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    isActive: PropTypes.bool,
}