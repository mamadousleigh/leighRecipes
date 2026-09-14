import React from "react";

const Footer = () => {
  return (
    <div className="bg-gray-500 text-white text-center capitalize font-semibold p-2">
      <p>
        leigh dynasty recipes &copy; {new Date().getFullYear()} all right
        reserve!!
      </p>
    </div>
  );
};

export default Footer;
