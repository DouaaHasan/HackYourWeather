import React from 'react';

function City({ cityData }) {
  return (
    <div style={cityBox}>
      <h1>{`${cityData.name}, ${cityData.sys.country}`}</h1>
      <h2>{cityData.weather[0].main}</h2>
      <h4>{cityData.weather[0].description}</h4>
      <p>{`min temp: ${cityData.main.temp_min}`}</p>
      <p>{`max temp: ${cityData.main.temp_max}`}</p>
      <p>{`location: ${cityData.coord.lon},${cityData.coord.lat}`}</p>
    </div>
  );
}
const cityBox = {
  textAlign: 'left',
  border: 'solid',
  color: 'Black',
  height: '300px',
  width: '500px',
  margin: 'auto auto 3%',
  padding: '1% 3%',
};

export default City;
