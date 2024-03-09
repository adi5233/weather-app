/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from "react";
import Select from "react-select";
import Chart from "./Chart";
import getFormattedHistoricalForecastWeather from "../services/getFormattedHistoricalForecastWeather";

const customStyles = {
  control: (provided) => ({
    ...provided,
    border: "1px solid black",
    outline: "none",
    cursor: "pointer",
  }),
  indicatorSeparator: () => ({ display: "none" }),
  dropdownIndicator: (provided) => ({
    ...provided,
  }),
  option: (provided, state) => ({
    ...provided,
    backgroundColor: state.isSelected ? "#003339" : "white",
    // "&:hover": {
    // backgroundColor: "#2b4f53",
    // },
  }),
};

const options = [
  { value: "lastMonth", label: "Last Month" },
  { value: "lastWeek", label: "Last week" },
];

const TemperatureChart = ({ weather }) => {
  const { lat, lon } = weather;
  const [selectedOption, setSelectedOption] = useState(options[0]);
  const [chartData, setChartData] = useState(null);

  useEffect(() => {
    const fetchWeather = async () => {
      await getFormattedHistoricalForecastWeather({
        lat,
        lon,
        dataFor: selectedOption.value,
      }).then((data) => {
        setChartData(data);
      });
    };

    fetchWeather();
  }, [weather.lon, selectedOption]);

  const handleOptionChange = (selectedOption) => {
    setSelectedOption(selectedOption);
  };

  return (
    <div className="h-64 flex flex-col px-8">
      <div className="py-2 flex flex-row justify-between">
        <div>
          <h1 className="text-2xl">Temperature</h1>
        </div>
        <div className="">
          <Select
            className="rounded-3xl w-30 text-sm"
            options={options}
            styles={customStyles}
            value={selectedOption}
            onChange={handleOptionChange}
          />
        </div>
      </div>
      <div className="flex-grow">
        {chartData ? <Chart chartData={chartData} /> : ""}
      </div>
    </div>
  );
};

export default TemperatureChart;
