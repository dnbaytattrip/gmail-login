import React from "react";
import { MdMenu } from "react-icons/md";
import { FaBars } from "react-icons/fa";
// import { GoThreeBars } from "react-icons/go";

function TopBar() {
  return (
    <div className="sticky top-0 z-10 w-full bg-black">
      <div className="container py-[11px] flex lg:justify-between items-center lg:gap-0">
        <div className="lg:hidden text-2xl text-slate-200">
          {/* <MdMenu /> */}
          {/* <FaBars /> */}
          {/* <GoThreeBars /> */}
        </div>
        <div className="text-2xl font-OpenSans font-bold uppeprcase mx-auto lg:mx-0">
          <span className="text-custom-amber">EROS</span>
          <span className="text-white/[87%]">ADS</span>
        </div>

        <div className="hidden mt-1 lg:flex items-center gap-11 text-white/[60%] text-sm">
          <p className="cursor-pointer">Contact & Support</p>
          <p className="cursor-pointer">Pricing</p>
          <p className="cursor-pointer">F.A.Q.</p>
        </div>
      </div>
    </div>
  );
}

export default TopBar;
