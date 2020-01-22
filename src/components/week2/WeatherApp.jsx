import React, { useState } from 'react';
import SearchBar from '../week2/SearchBar';
import City from '../week1/City';
import dotenv from 'dotenv';
dotenv.config();

const WeatherApp = () => {
  // object to save the fetched city weather data
  const [cityWeatherData, setCityWeatherData] = useState({});

  // string to save the city name input to use it dynamically to fetch the weather data
  const [cityNameInput, setCityNameInput] = useState('');

  // boolean to toggle the state of the alert to show it if needed
  const [alertStatus, toggleAlertStatus] = useState(false);

  // function to set the city name state
  const inputOnChange = e => {
    const { value } = e.target;
    setCityNameInput(value);
  };

  // function to fetch the weather data as per the city name state
  const getCityWeatherData = async () => {
    try {
      const fetchedData = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${cityNameInput}&appid=${process.env.REACT_APP_OPENWEATHERMAP_API_KEY}`,
      );
      const jsonData = await fetchedData.json();
      await setCityWeatherData(jsonData);
    } catch (error) {
      console.log(error);
    }
  };

  // function to set the alert status
  const inputAlert = () => toggleAlertStatus(cityWeatherData.name ? false : true);

  // function to submit the input and fetch the data
  const clickSearchBtn = e => {
    // prevent the auto refresh & fetch the data by calling the fetch function
    if (cityNameInput) {
      e.preventDefault();
      getCityWeatherData();
    }

    // validate & alert in case of wrong or empty input
    if (!cityWeatherData.name) {
      inputAlert();
    }

    // clearing the input field
    setCityNameInput('');
  };

  return (
    <div style={{ textAlign: 'center' }}>
      <h1>Weather</h1>
      <SearchBar
        clickSearchBtn={clickSearchBtn}
        inputOnChange={inputOnChange}
        inputValue={cityNameInput}
      />

      {!cityWeatherData.name && alertStatus && (
        <h1 style={errorBox}>
          Kindly fill the input field with a city name in order to get its current weather
          information!
        </h1>
      )}
      {cityWeatherData.name && <City cityWeatherData={cityWeatherData} />}
    </div>
  );
};

const errorBox = {
  width: '500px',
  margin: 'auto',
  background: '#eee',
  border: '5px orange solid',
  color: 'red',
  padding: '3%',
  fontFamily: 'arial',
};

export default WeatherApp;
