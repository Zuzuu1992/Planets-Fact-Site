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

      <div className=" flex items-center flex-col justify-center">
        <img
          className=" h-[170px] w-[170px] mt-20 mb-15 tablet:h-[253px] tablet:w-[253px]"
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
          className="h-[100px] translate-y-[-65px] tablet:h-[135px] tablet:translate-y-[-80px]"
          src={inAction === "surface" ? planet.images.geology : null}
        />
        <div className="tablet:flex tablet:justify-between tablet:gap-x-16 tablet:pr-6 tablet:items-center">
          <div className=" flex flex-col items-center justify-center gap-y-4 pr-6 pl-6  tablet:items-start">
            <p className=" text-white font-fontAnt font-normal text-[40px] leading-[52px] uppercase">
              {planet.name}
            </p>
            <p className=" text-white font-fontSpart font-extralight text-[15px] leading-[22px] text-center tablet:text-left">
              {inAction === "overview"
                ? planet.overview.content
                : inAction === "structure"
                ? planet.structure.content
                : inAction === "surface"
                ? planet.geology.content
                : null}
            </p>
            <div className=" flex items-center justify-center gap-x-1">
              <span className=" text-white opacity-50 font-fontSpart font-extralight text-[15px] leading-[22px] ">
                Source :
              </span>
              <a
                className="text-white opacity-50 font-fontSpart font-medium text-[15px] leading-[25px] relative"
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
            <div className="flex flex-col gap-y-4">
              <div
                onClick={whenOverview}
                className="border-[1px] border-white/20 pt-3 pb-3 pr-40 pl-6 cursor-pointer "
                style={{
                  backgroundColor:
                    inAction === "overview" ? planet.color : null,
                }}
              >
                <button
                  className="flex gap-x-3 text-white font-fontSpart font-bold text-xs leading-[11px] tracking-[2px] uppercase opacity-100 cursor-pointer"
                  onClick={whenOverview}
                >
                  <span className="opacity-50">01</span> Overview
                </button>
              </div>
              <div
                onClick={whenStructure}
                className="border-[1px] border-white/20 pt-3 pb-3 pr-10 pl-6 cursor-pointer "
                style={{
                  backgroundColor:
                    inAction === "structure" ? planet.color : null,
                }}
              >
                <button className="flex gap-x-3 text-white font-fontSpart font-bold text-xs leading-[11px] tracking-[2px] uppercase cursor-pointer  ">
                  <span className="opacity-50">02</span>Internal Structure
                </button>
              </div>
              <div
                onClick={whenSurface}
                className="border-[1px] border-white/20 pt-3 pb-3 pr-10 pl-6 cursor-pointer "
                style={{
                  backgroundColor: inAction === "surface" ? planet.color : null,
                }}
              >
                <button className=" flex gap-x-3 text-white font-fontSpart font-bold text-xs leading-[11px] tracking-[2px] uppercase cursor-pointer">
                  <span className="opacity-50">03</span> Surface Geology
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className=" flex flex-col gap-y-2 pl-6 pr-6 pb-10 pt-7 tablet:flex-row tablet:gap-x-3 tablet:pt-10">
        <div className=" flex items-center justify-between border-[1px] border-white/20 pt-4 pb-4 pr-6 pl-6 gap-x-10 tablet:flex-col tablet:grow tablet:items-start tablet:gap-y-2">
          <p className=" text-white opacity-50 font-fontSpart font-medium text-[11px] leading-[16px] tracking-[1.5px] uppercase ">
            Rotation time
          </p>
          <p className=" text-white font-fontAnt font-medium text-[22px] leading-[26px] tracking-[-1px] tablet:text-[26px] tablet:leading-[30px] tablet:tracking-[-1.2px] ">
            {planet.rotation}
          </p>
        </div>
        <div className=" flex items-center justify-between border-[1px] border-white/20 pt-4 pb-4 pr-6 pl-6 gap-x-10 tablet:flex-col tablet:grow tablet:items-start tablet:gap-y-2">
          <p className=" text-white opacity-50 font-fontSpart font-medium text-[11px] leading-[16px] tracking-[1.5px] uppercase ">
            Revolution time
          </p>
          <p className=" text-white font-fontAnt font-medium text-[22px] leading-[26px] tracking-[-1px] tablet:text-[26px] tablet:leading-[30px] tablet:tracking-[-1.2px]">
            {planet.revolution}
          </p>
        </div>
        <div className=" flex items-center justify-between border-[1px] border-white/20 pt-4 pb-4 pr-6 pl-6 gap-x-10 tablet:flex-col tablet:grow tablet:items-start tablet:gap-y-2">
          <p className=" text-white opacity-50 font-fontSpart font-medium text-[11px] leading-[16px] tracking-[1.5px] uppercase ">
            Radius
          </p>
          <p className=" text-white font-fontAnt font-medium text-[22px] leading-[26px] tracking-[-1px] tablet:text-[26px] tablet:leading-[30px] tablet:tracking-[-1.2px]">
            {planet.radius}
          </p>
        </div>
        <div className=" flex items-center justify-between border-[1px] border-white/20 pt-4 pb-4 pr-6 pl-6 gap-x-10 tablet:flex-col tablet:grow tablet:items-start tablet:gap-y-2 ">
          <p className=" text-white opacity-50 font-fontSpart font-medium text-[11px] leading-[16px] tracking-[1.5px] uppercase ">
            Average temp.
          </p>
          <p className=" text-white font-fontAnt font-medium text-[22px] leading-[26px] tracking-[-1px] tablet:text-[26px] tablet:leading-[30px] tablet:tracking-[-1.2px] ">
            {planet.temperature}
          </p>
        </div>
      </div>
    </>
  );
}

export default Planets;
