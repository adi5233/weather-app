import React from "react";
import { iconUrlFromCode, formatToLocalDate } from "../services/utils";

const LocationDetails = ({ weather }) => {
  const { dt, timezone, name, country, details, icon } = weather;
  return (
    <div className="current-weather h-28 mb-8 flex flex-row">
      <div className="h-full w-[50%]">
        <h1 class="font-title text-3xl font-medium pr-2">
          {`${name}, ${country}`}
        </h1>
        <p className="my-1 opacity-35 text-sm">
          {formatToLocalDate(dt, timezone)}
        </p>
        <div className="flex flex-row text-blue-600 text-center items-center">
          <img
            src={iconUrlFromCode(icon)}
            className="h-8 w-8"
            alt=""
            style={{ fill: "blue" }}
          />
          <p className="text-lg">{details}</p>
        </div>
      </div>
      <div className="relative h-full w-[50%] flex items-center justify-end">
        <img
          src="/background.png"
          alt="locationImgae"
          className="rounded-2xl object-cover h-full"
        />
        <div className="flex items-center absolute bottom-2 right-2">
          <p className="navbar-close bg-[#FF2D55] text-[#FFFFFF] p-1 text-center px-3 text-xs rounded-md">
            LIVE
          </p>
        </div>
      </div>
    </div>
  );
};

export default LocationDetails;
