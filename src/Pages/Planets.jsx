import React from "react";
import { useParams } from "react-router-dom";
import { useState } from "react";
import Universe from "../Data/data.json";
import Source from "../../public/assets/icon-source.svg";

function Planets() {
  const [inAction, setInAction] = useState("overview");
  const { name } = useParams();
  const planet = Universe.find((p) => p.name.toLowerCase() === name);
  console.log(name);

  const whenOverview = () => {
    const name = "overview";
    setInAction(name);
  };
  const whenStructure = () => {
    const name = "structure";
    setInAction(name);
  };
  const whenSurface = () => {
    const name = "surface";
    setInAction(name);
  };

  return (
    <>
      <div className=" flex items-center justify-between gap-x-10 pr-5 pl-5 pt-5 tablet:hidden">
        <div
          className="pb-4 border-[#070724] border-b-4  cursor-pointer"
          style={{
            borderColor: inAction === "overview" ? planet.color : null,
          }}
        >
          <p
            className=" text-white font-fontSpart font-bold text-xs leading-[11px] tracking-[2px] uppercase opacity-50 cursor-pointer hover:opacity-100"
            onClick={whenOverview}
          >
            Overview
          </p>
        </div>
        <div
          className="pb-4  border-[#070724] border-b-4  cursor-pointer"
          style={{
            borderColor: inAction === "structure" ? planet.color : null,
          }}
        >
          <p
            className=" text-white font-fontSpart font-bold text-xs leading-[11px] tracking-[2px] uppercase opacity-50 cursor-pointer hover:opacity-100 "
            onClick={whenStructure}
          >
            Structure
          </p>
        </div>
        <div
          className="pb-4  border-[#070724] border-b-4  cursor-pointer"
          style={{
            borderColor: inAction === "surface" ? planet.color : null,
          }}
        >
          <p
            className=" text-white font-fontSpart font-bold text-xs leading-[11px] tracking-[2px] uppercase opacity-50 cursor-pointer hover:opacity-100"
            onClick={whenSurface}
          >
            Surface
          </p>
        </div>
      </div>
      <hr className=" opacity-20 border-[#FFF]" />

      <div className=" flex flex-col items-center  justify-center desktop:flex-row desktop:justify-between  desktop:gap-x-[190px] desktop:pl-[165px] desktop:pr-[165px] desktop:pb-[40px]  desktop:pt-[80px]">
        <div>
          <div className="desktop:relative">
            <img
              className=" h-[170px] max-w-none mt-20 mb-15 tablet:h-[253px] desktop:h-[450px] desktop:mt-0 desktop:mb-0 "
              src={
                inAction === "overview"
                  ? planet.images.planet
                  : inAction === "structure"
                  ? planet.images.internal
                  : inAction === "surface"
                  ? planet.images.planet
                  : null
              }
            />
            <img
              className="h-[100px] translate-y-[-65px] tablet:h-[135px] tablet:translate-y-[-80px] desktop:h-[165px] desktop:translate-x-[160px] desktop:translate-y-[-100px] desktop:absolute "
              src={inAction === "surface" ? planet.images.geology : null}
            />
          </div>
        </div>

        <div className="tablet:flex tablet:justify-between tablet:gap-x-16 tablet:pr-6 tablet:items-center desktop:flex-col desktop:items-start desktop:gap-y-10 desktop:pr-0">
          <div className=" flex flex-col items-center justify-center gap-y-4 pr-6 pl-6  tablet:items-start desktop:pr-0 desktop:pl-0 desktop:gap-y-5 desktop:w-full">
            <p className=" text-white font-fontAnt font-normal text-[40px] leading-[52px] uppercase desktop:text-[80px] desktop:leading-[103px]">
              {planet.name}
            </p>
            <p className=" text-white font-fontSpart font-extralight text-[15px] leading-[22px] text-center tablet:text-left desktop:text-[18px] desktop:leading-[26px]">
              {inAction === "overview"
                ? planet.overview.content
                : inAction === "structure"
                ? planet.structure.content
                : inAction === "surface"
                ? planet.geology.content
                : null}
            </p>
            <div className=" flex items-center justify-center gap-x-1">
              <span className=" text-white opacity-50 font-fontSpart font-extralight text-[15px] leading-[22px] desktop:text-[17px] ">
                Source :
              </span>
              <a
                className="text-white opacity-50 font-fontSpart font-medium text-[15px] leading-[25px] relative desktop:text-[17px]"
                href={
                  inAction === "overview"
                    ? planet.overview.source
                    : inAction === "structure"
                    ? planet.structure.source
                    : inAction === "surface"
                    ? planet.geology.source
                    : null
                }
              >
                Wikipedia
                <span className="absolute left-0 bottom-1 h-0.5 w-full bg-white/50"></span>
              </a>
              <img src={Source} />
            </div>
          </div>
          <div className="xs:hidden tablet:block">
            <div className="flex flex-col gap-y-5 desktop:w-full">
              <div
                onClick={whenOverview}
                className="border-[1px] border-white/20 pt-3 pb-3 pr-40 pl-6 cursor-pointer transition-all duration-300 tablet:hover:bg-[#D8D8D8]/20 desktop:pt-5 desktop:pb-5 desktop:pr-52 desktop:pl-7 desktop:w-[473px] "
                style={{
                  backgroundColor:
                    inAction === "overview" ? planet.color : null,
                }}
              >
                <button
                  className="flex gap-x-3 text-white font-fontSpart font-bold text-xs leading-[11px] tracking-[2px] uppercase opacity-100 cursor-pointer desktop:text-sm desktop:leading-[13px] desktop:tracking-[2.3px]"
                  onClick={whenOverview}
                >
                  <span className="opacity-50 desktop:text-sm desktop:leading-[13px] desktop:tracking-[2.3px]">
                    01
                  </span>{" "}
                  Overview
                </button>
              </div>
              <div
                onClick={whenStructure}
                className="border-[1px] border-white/20 pt-3 pb-3 pr-10 pl-6 cursor-pointer transition-all duration-300  tablet:hover:bg-[#D8D8D8]/20 desktop:pt-5 desktop:pb-5  desktop:pl-7 "
                style={{
                  backgroundColor:
                    inAction === "structure" ? planet.color : null,
                }}
              >
                <button className="flex gap-x-3 text-white font-fontSpart font-bold text-xs leading-[11px] tracking-[2px] uppercase cursor-pointer desktop:text-sm desktop:leading-[13px] desktop:tracking-[2.3px]  ">
                  <span className="opacity-50 desktop:text-sm desktop:leading-[13px] desktop:tracking-[2.3px]">
                    02
                  </span>
                  Internal Structure
                </button>
              </div>
              <div
                onClick={whenSurface}
                className="border-[1px] border-white/20 pt-3 pb-3 pr-10 pl-6 cursor-pointer transition-all duration-300 tablet:hover:bg-[#D8D8D8]/20 desktop:pt-5 desktop:pb-5  desktop:pl-7 "
                style={{
                  backgroundColor: inAction === "surface" ? planet.color : null,
                }}
              >
                <button className=" flex gap-x-3 text-white font-fontSpart font-bold text-xs leading-[11px] tracking-[2px] uppercase cursor-pointer desktop:text-sm desktop:leading-[13px] desktop:tracking-[2.3px]">
                  <span className="opacity-50 desktop:text-sm desktop:leading-[13px] desktop:tracking-[2.3px]">
                    03
                  </span>{" "}
                  Surface Geology
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className=" flex flex-col gap-y-2 pl-6 pr-6 pb-10 pt-7 tablet:flex-row tablet:gap-x-3 tablet:pt-10 desktop:pr-[165px] desktop:pl-[165px] desktop:gap-x-7 desktop:pb-16 ">
        <div className=" flex items-center justify-between border-[1px] border-white/20 pt-4 pb-4 pr-6 pl-6 gap-x-10 tablet:flex-col tablet:grow tablet:items-start tablet:gap-y-2 desktop:pt-7 desktop:pb-7 desktop:pr-7 desktop:pl-7 desktop:gap-y-3">
          <p className=" text-white opacity-50 font-fontSpart font-medium text-[11px] leading-[16px] tracking-[1.5px] uppercase desktop:text-[14px] desktop:leading-[20px] desktop:tracking-[1.7px] ">
            Rotation time
          </p>
          <p className=" text-white font-fontAnt font-medium text-[22px] leading-[26px] tracking-[-1px] tablet:text-[26px] tablet:leading-[30px] tablet:tracking-[-1.2px] desktop:text-[40px] desktop:leading-[50px] desktop:tracking-[-1.5px] ">
            {planet.rotation}
          </p>
        </div>
        <div className=" flex items-center justify-between border-[1px] border-white/20 pt-4 pb-4 pr-6 pl-6 gap-x-10 tablet:flex-col tablet:grow tablet:items-start tablet:gap-y-2 desktop:pt-7 desktop:pb-7 desktop:pr-7 desktop:pl-7 desktop:gap-y-3">
          <p className=" text-white opacity-50 font-fontSpart font-medium text-[11px] leading-[16px] tracking-[1.5px] uppercase desktop:text-[14px] desktop:leading-[20px] desktop:tracking-[1.7px]">
            Revolution time
          </p>
          <p className=" text-white font-fontAnt font-medium text-[22px] leading-[26px] tracking-[-1px] tablet:text-[26px] tablet:leading-[30px] tablet:tracking-[-1.2px] desktop:text-[40px] desktop:leading-[50px] desktop:tracking-[-1.5px]">
            {planet.revolution}
          </p>
        </div>
        <div className=" flex items-center justify-between border-[1px] border-white/20 pt-4 pb-4 pr-6 pl-6 gap-x-10 tablet:flex-col tablet:grow tablet:items-start tablet:gap-y-2 desktop:pt-7 desktop:pb-7 desktop:pr-7 desktop:pl-7 desktop:gap-y-3">
          <p className=" text-white opacity-50 font-fontSpart font-medium text-[11px] leading-[16px] tracking-[1.5px] uppercase desktop:text-[14px] desktop:leading-[20px] desktop:tracking-[1.7px]">
            Radius
          </p>
          <p className=" text-white font-fontAnt font-medium text-[22px] leading-[26px] tracking-[-1px] tablet:text-[26px] tablet:leading-[30px] tablet:tracking-[-1.2px] desktop:text-[40px] desktop:leading-[50px] desktop:tracking-[-1.5px]">
            {planet.radius}
          </p>
        </div>
        <div className=" flex items-center justify-between border-[1px] border-white/20 pt-4 pb-4 pr-6 pl-6 gap-x-10 tablet:flex-col tablet:grow tablet:items-start tablet:gap-y-2 desktop:pt-7 desktop:pb-7 desktop:pr-7 desktop:pl-7 desktop:gap-y-3 ">
          <p className=" text-white opacity-50 font-fontSpart font-medium text-[11px] leading-[16px] tracking-[1.5px] uppercase desktop:text-[14px] desktop:leading-[20px] desktop:tracking-[1.7px] ">
            Average temp.
          </p>
          <p className=" text-white font-fontAnt font-medium text-[22px] leading-[26px] tracking-[-1px] tablet:text-[26px] tablet:leading-[30px] tablet:tracking-[-1.2px] desktop:text-[40px] desktop:leading-[50px] desktop:tracking-[-1.5px] ">
            {planet.temperature}
          </p>
        </div>
      </div>
    </>
  );
}

export default Planets;
