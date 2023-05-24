import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";
import MobileNav from "../../public/assets/icon-hamburger.svg";
import Cross from "../../public/assets/icons-close.svg";
import Arrow from "../../public/assets/icon-chevron.svg";

function Header() {
  const [isActive, setActive] = useState(false);
  const [navBar, setNavBar] = useState(MobileNav);

  const change = () => {
    setActive(!isActive);
    if (isActive) {
      setNavBar(MobileNav);
    } else {
      setNavBar(Cross);
    }
  };

  return (
    <main className=" ">
      <div className=" flex items-center justify-between pb-5 pt-5 pl-5 pr-5 ">
        <p className="font-fontAnt font-normal text-[28px] leading-9 tracking-[-1.05px] text-white uppercase">
          The Planets
        </p>
        <img
          src={navBar}
          onClick={change}
          className="cursor-pointer"
          alt="Hamburger icon"
        />
      </div>
      <hr className=" opacity-20 border-[#FFF]" />

      {isActive ? (
        <div className="flex flex-col  pl-6 pr-7">
          <div className=" flex items-center justify-between pt-6 pb-6">
            <div className="flex items-center gap-x-5">
              <div className=" h-[20px] w-[20px] rounded-full bg-[#DEF4FC] "></div>
              <Link
                to="/planets/mercury"
                className=" font-fontSpart font-bold text-xl leading-6 tracking-[2px] uppercase text-white cursor-pointer"
                onClick={change}
              >
                mercury
              </Link>
            </div>
            <img
              src={Arrow}
              onClick={change}
              alt="Arrow icon"
              className=" cursor-pointer"
            />
          </div>
          <hr className=" opacity-20 border-[#FFF]" />
          <div className=" flex items-center justify-between pt-6 pb-6">
            <div className="flex items-center gap-x-5">
              <div className=" h-[20px] w-[20px] rounded-full bg-[#F7CC7F] "></div>
              <Link
                to="/planets/venus"
                className=" font-fontSpart font-bold text-xl leading-6 tracking-[2px] uppercase text-white cursor-pointer"
                onClick={change}
              >
                venus
              </Link>
            </div>
            <img
              src={Arrow}
              onClick={change}
              alt="Arrow icon"
              className=" cursor-pointer"
            />
          </div>
          <hr className=" opacity-20 border-[#FFF]" />
          <div className=" flex items-center justify-between pt-6 pb-6">
            <div className="flex items-center gap-x-5">
              <div className=" h-[20px] w-[20px] rounded-full bg-[#545BFE] "></div>
              <Link
                to="/planets/earth"
                className=" font-fontSpart font-bold text-xl leading-6 tracking-[2px] uppercase text-white cursor-pointer"
                onClick={change}
              >
                earth
              </Link>
            </div>
            <img
              src={Arrow}
              onClick={change}
              alt="Arrow icon"
              className=" cursor-pointer"
            />
          </div>
          <hr className=" opacity-20 border-[#FFF]" />
          <div className=" flex items-center justify-between pt-6 pb-6">
            <div className="flex items-center gap-x-5">
              <div className=" h-[20px] w-[20px] rounded-full bg-[#FF6A45] "></div>
              <Link
                to="/planets/mars"
                className=" font-fontSpart font-bold text-xl leading-6 tracking-[2px] uppercase text-white cursor-pointer"
                onClick={change}
              >
                mars
              </Link>
            </div>
            <img
              src={Arrow}
              onClick={change}
              alt="Arrow icon"
              className=" cursor-pointer"
            />
          </div>
          <hr className=" opacity-20 border-[#FFF]" />
          <div className=" flex items-center justify-between pt-6 pb-6">
            <div className="flex items-center gap-x-5">
              <div className=" h-[20px] w-[20px] rounded-full bg-[#ECAD7A] "></div>
              <Link
                to="/planets/jupiter"
                className=" font-fontSpart font-bold text-xl leading-6 tracking-[2px] uppercase text-white cursor-pointer"
                onClick={change}
              >
                jupiter
              </Link>
            </div>
            <img
              src={Arrow}
              onClick={change}
              alt="Arrow icon"
              className=" cursor-pointer"
            />
          </div>
          <hr className=" opacity-20 border-[#FFF]" />
          <div className=" flex items-center justify-between pt-6 pb-6">
            <div className="flex items-center gap-x-5">
              <div className=" h-[20px] w-[20px] rounded-full bg-[#FCCB6B] "></div>
              <Link
                to="/planets/saturn"
                className=" font-fontSpart font-bold text-xl leading-6 tracking-[2px] uppercase text-white cursor-pointer"
                onClick={change}
              >
                saturn
              </Link>
            </div>
            <img
              src={Arrow}
              onClick={change}
              alt="Arrow icon"
              className=" cursor-pointer"
            />
          </div>
          <hr className=" opacity-20 border-[#FFF]" />
          <div className=" flex items-center justify-between pt-6 pb-6">
            <div className="flex items-center gap-x-5">
              <div className=" h-[20px] w-[20px] rounded-full bg-[#65F0D5] "></div>
              <Link
                to="/planets/uranus"
                className=" font-fontSpart font-bold text-xl leading-6 tracking-[2px] uppercase text-white cursor-pointer"
                onClick={change}
              >
                uranus
              </Link>
            </div>
            <img
              src={Arrow}
              onClick={change}
              alt="Arrow icon"
              className=" cursor-pointer"
            />
          </div>
          <hr className=" opacity-20 border-[#FFF]" />
          <div className=" flex items-center justify-between pt-6 pb-6">
            <div className="flex items-center gap-x-5">
              <div className=" h-[20px] w-[20px] rounded-full bg-[#497EFA] "></div>
              <Link
                to="/planets/neptune"
                className=" font-fontSpart font-bold text-xl leading-6 tracking-[2px] uppercase text-white cursor-pointer"
                onClick={change}
              >
                neptune
              </Link>
            </div>
            <img
              src={Arrow}
              onClick={change}
              alt="Arrow icon"
              className=" cursor-pointer"
            />
          </div>
        </div>
      ) : null}
    </main>
  );
}

export default Header;
