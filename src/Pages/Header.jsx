import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";
import MobileNav from "../../public/assets/icon-hamburger.svg";
import Cross from "../../public/assets/icons-close.svg";
import Arrow from "../../public/assets/icon-chevron.svg";

function Header(planet, name) {
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
    <main>
      <div className="xs:hidden tablet:block">
        <div className="flex flex-col gap-y-8 items-center justify-center pb-6 pt-5 pr-14 pl-14 desktop:flex-row desktop:justify-between desktop:pt-0 desktop:pr-16 desktop:pl-16 ">
          <p className="font-fontAnt font-normal text-[28px] leading-9 tracking-[-1.05px] text-white uppercase desktop:pt-5">
            The Planets
          </p>
          <div className="flex items-center justify-center gap-x-7 ">
            <div className="desktop:border-[#070724] desktop:border-t-4 desktop:pt-5 desktop:hover:border-[#419EBB]">
              <Link
                to="/planets/mercury"
                className=" font-fontSpart font-medium text-sm leading-6 tracking-[1.5px] uppercase text-white cursor-pointer transition-all duration-300 desktop:opacity-75 desktop:hover:opacity-100"
              >
                mercury
              </Link>
            </div>
            <div className="desktop:border-[#070724] desktop:border-t-4 desktop:pt-5 desktop:hover:border-[#EDA249]">
              <Link
                to="/planets/venus"
                className=" font-fontSpart font-medium text-sm leading-6 tracking-[1.5px] uppercase text-white cursor-pointer transition-all duration-300 desktop:opacity-75 desktop:hover:opacity-100"
              >
                venus
              </Link>
            </div>
            <div className="desktop:border-[#070724] desktop:border-t-4 desktop:pt-5 desktop:hover:border-[#6D2ED5]">
              <Link
                to="/planets/earth"
                className=" font-fontSpart font-medium text-sm leading-6 tracking-[1.5px] uppercase text-white cursor-pointer transition-all duration-300 desktop:opacity-75 desktop:hover:opacity-100"
              >
                earth
              </Link>
            </div>
            <div className="desktop:border-[#070724] desktop:border-t-4 desktop:pt-5 desktop:hover:border-[#D14C32]">
              <Link
                to="/planets/mars"
                className=" font-fontSpart font-medium text-sm leading-6 tracking-[1.5px] uppercase text-white cursor-pointer transition-all duration-300 desktop:opacity-75 desktop:hover:opacity-100"
              >
                mars
              </Link>
            </div>
            <div className="desktop:border-[#070724] desktop:border-t-4 desktop:pt-5 desktop:hover:border-[#D83A34]">
              <Link
                to="/planets/jupiter"
                className=" font-fontSpart font-medium text-sm leading-6 tracking-[1.5px] uppercase text-white cursor-pointer transition-all duration-300 desktop:opacity-75 desktop:hover:opacity-100"
              >
                jupiter
              </Link>
            </div>
            <div className="desktop:border-[#070724] desktop:border-t-4 desktop:pt-5 desktop:hover:border-[#CD5120]">
              <Link
                to="/planets/saturn"
                className=" font-fontSpart font-medium text-sm leading-6 tracking-[1.5px] uppercase text-white cursor-pointer transition-all duration-300 desktop:opacity-75 desktop:hover:opacity-100"
              >
                saturn
              </Link>
            </div>
            <div className="desktop:border-[#070724] desktop:border-t-4 desktop:pt-5 desktop:hover:border-[#1EC1A2]">
              <Link
                to="/planets/uranus"
                className=" font-fontSpart font-medium text-sm leading-6 tracking-[1.5px] uppercase text-white cursor-pointer transition-all duration-300 desktop:opacity-75 desktop:hover:opacity-100"
              >
                uranus
              </Link>
            </div>
            <div className="desktop:border-[#070724] desktop:border-t-4 desktop:pt-5 desktop:hover:border-[#2D68F0]">
              <Link
                to="/planets/neptune"
                className=" font-fontSpart font-medium text-sm leading-6 tracking-[1.5px] uppercase text-white cursor-pointer transition-all duration-300 desktop:opacity-75 desktop:hover:opacity-100"
              >
                neptune
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className=" flex items-center justify-between pb-5 pt-5 pl-5 pr-5 tablet:hidden">
        <p className="font-fontAnt font-normal text-[28px] leading-9 tracking-[-1.05px] text-white uppercase">
          The Planets
        </p>
        <img
          src={navBar}
          onClick={change}
          className="cursor-pointer tablet:hidden"
          alt="Hamburger icon"
        />
      </div>
      <hr className=" opacity-20 border-[0.5px] border-[#FFF]" />

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
