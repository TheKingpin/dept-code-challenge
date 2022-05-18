import React from "react";
import { FBIcon, IGIcon, TTIcon } from "./symbols/SocialIcons";

const Footer = () => {
  return (
    <div className="bg-black p-10">
      <div className="grid grid-cols-4">
        <div className="col-span-3">
          <ul className="text-white text-3xl md:text-xl lg:text-xl uppercase">
            <li className="block sm:block md:inline lg:inline py-2 px-0 md:px-4 lg:px-4">Work</li>
            <li className="block sm:block md:inline lg:inline py-2 px-0 md:px-4 lg:px-4">Services</li>
            <li className="block sm:block md:inline lg:inline py-2 px-0 md:px-4 lg:px-4">Stories</li>
            <li className="block sm:block md:inline lg:inline py-2 px-0 md:px-4 lg:px-4">About</li>
            <li className="block sm:block md:inline lg:inline py-2 px-0 md:px-4 lg:px-4">Careers</li>
            <li className="block sm:block md:inline lg:inline py-2 px-0 md:px-4 lg:px-4">Contact</li>
          </ul>
        </div>
        <div className="col-span-1">
          <ul>
            <li className="block sm:block md:inline lg:inline py-2 py-2 px-0 md:px-4 lg:px-4">
              <FBIcon />
            </li>
            <li className="block sm:block md:inline lg:inline py-2 py-2 px-0 md:px-4 lg:px-4">
              <TTIcon />
            </li>
            <li className="block sm:block md:inline lg:inline py-2 py-2 px-0 md:px-4 lg:px-4">
              <IGIcon />
            </li>
          </ul>
        </div>
      </div>
      <div className=" border-t-2 border-[#3E3E3E] mt-12 mb-6">
        <p className="text-[#808080] text-xs font-body mt-6">
          Chamber of Commerce: 63464101 <br />
          VAT: NL 8552.47.502.B01 <br />
          Terms and conditions
        </p>
        <p className="text-[#808080] text-xs font-body mt-6">
          © 2018 Dept Agency
        </p>
      </div>
    </div>
  );
};

export default Footer;
