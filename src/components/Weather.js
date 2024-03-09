import React from "react";
import { iconUrlFromCode } from "../services/utils";

const Weather = ({ items }) => {
  return (
    <div className="hourly-weather h-28 bg-[#003339] mb-14 rounded-3xl p-4 flex flex-row justify-between">
      {items.map((item, index) => (
        <div
          className="text-white w-10 m-1 items-center flex flex-col justify-center"
          key={index}
        >
          <h1 className="text-sm mb-2">{item.title}</h1>
          <div className="">
            <img
              src={iconUrlFromCode(item.icon)}
              className="h-6 w-6 mb-2"
              alt=""
            />
          </div>
          <h1 className="text-sm">{`${item.temp.toFixed()}°`}</h1>
        </div>
      ))}
    </div>
  );
};

export default Weather;

// eslint-disable-next-line no-lone-blocks
{
  /* <div className="text-white w-10 m-1">
        <h1 className="text-sm mb-2">12:00</h1>
        <CiCloud className="h-6 w-6 mb-2" />
        <h1 className="text-sm">24</h1>
      </div>
      <div className="text-white w-10 m-1">
        <h1 className="text-sm mb-2">12:00</h1>
        <CiCloud className="h-6 w-6 mb-2" />
        <h1 className="text-sm">24</h1>
      </div>
      <div className="text-white w-10 m-1">
        <h1 className="text-sm mb-2">12:00</h1>
        <CiCloud className="h-6 w-6 mb-2" />
        <h1 className="text-sm">24</h1>
      </div>
      <div className="text-white w-10 m-1">
        <h1 className="text-sm mb-2">12:00</h1>
        <CiCloud className="h-6 w-6 mb-2" />
        <h1 className="text-sm">24</h1>
      </div>
      <div className="text-white w-10 m-1">
        <h1 className="text-sm mb-2">12:00</h1>
        <CiCloud className="h-6 w-6 mb-2" />
        <h1 className="text-sm">24</h1>
      </div> */
}
