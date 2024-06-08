import { useState, useEffect, ChangeEvent } from 'react';
import { optionType, forecastType } from './../types/index';

// Base URL for the weather API
const BASE_URL = 'https://api.openweathermap.org';

const useForecast = () => {
  // State to store selected city, search term, search options, forecast data, and error messages
  const [city, setCity] = useState<optionType | null>(null);
  const [term, setTerm] = useState<string>('');
  const [options, setOptions] = useState<optionType[]>([]);
  const [forecast, setForecast] = useState<forecastType | null>(null);
  const [error, setError] = useState<string | null>(null); // Error state

  // Fetch search options based on the search term
  const getSearchOptions = async (term: string) => {
    try {
      const response = await fetch(
        `${BASE_URL}/geo/1.0/direct?q=${term.trim()}&limit=5&lang=en&appid=${process.env.REACT_APP_API_KEY}`
      );
      if (!response.ok) {
        throw new Error('Failed to fetch search options');
      }
      const data = await response.json();
      setOptions(data);
    } catch (e) {
      console.error(e);
      setError('Failed to fetch search options');
    }
  };

  // Submit the selected city to fetch forecast data
  const onSubmit = () => {
    if (!city) return;
    getForecast(city);
  };

  // Fetch forecast data for the selected city
  const getForecast = async (selectedCity: optionType) => {
    try {
      const response = await fetch(
        `${BASE_URL}/data/2.5/forecast?lat=${selectedCity.lat}&lon=${selectedCity.lon}&units=metric&lang=en&appid=${process.env.REACT_APP_API_KEY}`
      );
      
      if (!response.ok) {
        throw new Error('Failed to fetch forecast');
      }
      const forecastData = await response.json();
      // Filter the forecast data to include only the first 16 items
      const filteredForecast = {
        ...forecastData.city,
        list: forecastData.list.slice(0, 16),
      };
      setForecast(filteredForecast);
    } catch (e) {
      console.error(e);
      setError('Failed to fetch forecast');
    }
  };

  // Handle option selection
  const onOptionSelect = (option: optionType) => {
    setCity(option);
  };

  // Handle input changes and fetch search options if input is not empty
  const onInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.trim();
    setTerm(e.target.value);
    if (value !== '') {
      getSearchOptions(value);
    }
  };

  // Update the search term and clear options when a city is selected
  useEffect(() => {
    if (city) {
      setTerm(city.name);
      setOptions([]);
    }
  }, [city]);

  return {
    forecast,
    options,
    term,
    error, // Return error state
    onOptionSelect,
    onSubmit,
    onInputChange,
  };
};

export default useForecast

// State Management: Uses useState to manage the selected city, search term, search options, forecast data, and error messages.
// Fetching Search Options: getSearchOptions fetches search options from the API based on the search term. It handles errors by setting an error message if the fetch fails.
// Form Submission: onSubmit fetches the forecast data for the selected city.
// Fetching Forecast Data: getForecast fetches and processes forecast data for the selected city, including error handling.
// Option Selection: onOptionSelect sets the selected city.
// Input Change Handling: onInputChange updates the search term and fetches search options if the input is not empty.
// Effect Hook: Uses useEffect to update the search term and clear options when a city is selected.
// Returning Values and Functions: Returns the forecast, options, term, error, and handler functions to be used in the component.
