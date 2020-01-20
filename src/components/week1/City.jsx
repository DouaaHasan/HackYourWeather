import React from "react";

const City = ({ cityWeatherData }) => {
  const { name, sys, weather, main, coord } = cityWeatherData;
  return (
    <div style={cityBox}>
      <h1>{name && `${name}, ${sys && sys.country}`}</h1>
      <h2>{weather && weather[0].main}</h2>
      <h4>{weather && weather[0].description}</h4>
      <p>{`min temp: ${main && main.temp_min}`}</p>
      <p>{`max temp: ${main && main.temp_max}`}</p>
      <p>{`location: ${coord && coord.lon},${coord && coord.lat}`}</p>
    </div>
  );
};

const cityBox = {
  fontFamily: "Helvetica",
  textAlign: "left",
  border: "solid",
  color: "Black",
  height: "300px",
  width: "500px",
  margin: "auto auto 3%",
  padding: "1% 3%"
};

export default City;
