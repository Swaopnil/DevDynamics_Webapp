import React, { useState } from 'react';
import WeatherCharts from './components/WeatherCharts';
import SearchInput from './components/Search';
import useForecast from './hooks/useForecast';

const App = (): JSX.Element => {
  const { forecast, options, term, error, onOptionSelect, onSubmit, onInputChange } = useForecast();
  const [showCharts, setShowCharts] = useState(false);

  return (
    <main className="flex justify-center items-center bg-gradient-to-br from-lime-400 via-rose-400 to-sky-400 h-[100vh] w-full">
      {showCharts && forecast ? (
        <WeatherCharts data={forecast} onBack={() => setShowCharts(false)} /> // Pass onBack prop
      ) : (
        <SearchInput
          term={term}
          options={options}
          error={error}
          onInputChange={onInputChange}
          onOptionSelect={onOptionSelect}
          onSubmit={() => {
            onSubmit();
            setShowCharts(true);
          }} // Ensure onSubmit does not take any parameters
        />
      )}
    </main>
  );
};

export default App;
