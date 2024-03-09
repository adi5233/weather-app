import React from "react";

const AdditionalDetails = ({ weather: { speed, humidity } }) => {
  return (
    <div className="hourly-weather h-28 my-8">
      <div className="p-2 h-[40%]">
        <h1 className="text-2xl ">Additional Info</h1>
      </div>
      <div className="p-2 h-[60%] flex flex-row justify-between">
        <div>
          <h1 className="opacity-35 text-md  mb-1">Participation</h1>
          <h1 className="font-semibold">3%</h1>
        </div>
        <div>
          <h1 className="opacity-35 text-md mb-1">Humidity</h1>
          <h1 className="font-semibold">{`${humidity.toFixed()}%`}</h1>
        </div>
        <div>
          <h1 className="opacity-35 text-md mb-1">Windy</h1>
          <h1 className="font-semibold">{`${speed.toFixed()} km/h`}</h1>
        </div>
      </div>
    </div>
  );
};

export default AdditionalDetails;
