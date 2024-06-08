import React, { useState } from 'react';
import WeatherCharts from './components/WeatherCharts';
import SearchInput from './components/Search';
import useForecast from './hooks/useForecast';

const App = (): JSX.Element => {
  // Use the custom hook to get weather forecast data and functions
  const { forecast, options, term, error, onOptionSelect, onSubmit, onInputChange } = useForecast();
  
  // State to control whether to show charts or search input
  const [showCharts, setShowCharts] = useState(false);

  return (
    <main className="flex justify-center items-center bg-gradient-to-br from-lime-400 via-rose-400 to-sky-400 h-[100vh] w-full">
      {showCharts && forecast ? (
        // If showCharts is true and we have forecast data, show the weather charts
        <WeatherCharts data={forecast} onBack={() => setShowCharts(false)} /> // Pass onBack prop to go back to search
      ) : (
        // Otherwise, show the search input
        <SearchInput
          term={term} // The current search term
          options={options} // Options for the search
          error={error} // Any error messages
          onInputChange={onInputChange} // Function to handle input changes
          onOptionSelect={onOptionSelect} // Function to handle option selection
          onSubmit={() => {
            onSubmit(); // Call the submit function
            setShowCharts(true); // Show the charts after submitting
          }}
        />
      )}
    </main>
  );
};

export default App;
