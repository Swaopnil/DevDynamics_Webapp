import React from 'react';
import { Line, Bar, Pie } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, BarElement, ArcElement, Title, Tooltip, Legend } from 'chart.js';
import { forecastType } from './../types';
import "./chart.css";

// Register the necessary components for ChartJS
ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, BarElement, ArcElement, Title, Tooltip, Legend);

type Props = {
  data: forecastType;
  onBack: () => void; // Define the onBack prop
};

const WeatherCharts = ({ data, onBack }: Props) => { // Include onBack in the destructuring
  const labels = data.list.map((item) => new Date(item.dt * 1000).toLocaleTimeString());

  // Data for the temperature chart
  const temperatureData = {
    labels,
    datasets: [
      {
        label: 'Temperature (°C)',
        data: data.list.map((item) => item.main.temp),
        borderColor: 'rgba(75, 192, 192, 1)',
        backgroundColor: 'rgba(75, 192, 192, 0.2)',
      },
    ],
  };

  // Data for the humidity chart
  const humidityData = {
    labels,
    datasets: [
      {
        label: 'Humidity (%)',
        data: data.list.map((item) => item.main.humidity),
        borderColor: 'rgba(153, 102, 255, 1)',
        backgroundColor: 'rgba(153, 102, 255, 0.2)',
      },
    ],
  };

  // Data for the wind speed chart
  const windData = {
    labels,
    datasets: [
      {
        label: 'Wind Speed (km/h)',
        data: data.list.map((item) => item.wind.speed),
        borderColor: 'rgba(255, 159, 64, 1)',
        backgroundColor: 'rgba(255, 159, 64, 0.2)',
      },
    ],
  };

  // Data for the precipitation probability chart
  const precipitationData = {
    labels: ['No Rain', 'Rain'],
    datasets: [
      {
        data: [
          100 - Math.round(data.list[0].pop * 100), // No Rain
          Math.round(data.list[0].pop * 100) // Rain
        ],
        backgroundColor: ['rgba(54, 162, 235, 0.2)', 'rgba(255, 99, 132, 0.2)'],
        borderColor: ['rgba(54, 162, 235, 1)', 'rgba(255, 99, 132, 1)'],
        borderWidth: 1,
      },
    ],
  };

  return (
    <div className="weather-charts-container">
      <div className="chart-wrapper">
        <h2>Temperature</h2>
        <Line className="chart" data={temperatureData} />
      </div>
      <div className="chart-wrapper">
        <h2>Humidity</h2>
        <Bar className="chart" data={humidityData} />
      </div>
      <div className="chart-wrapper">
        <h2>Wind Speed</h2>
        <Line className="chart" data={windData} />
      </div>
      <div className="chart-wrapper centered-chart">
        <h2>Precipitation Probability</h2>
        <Pie className="chart" data={precipitationData} />
      </div>
      <button className="search-button" onClick={onBack}>
        Search Another City
      </button>
    </div>
  );
};

export default WeatherCharts;

// explanation
// ChartJS Setup: Registers necessary components for ChartJS.
// Prop Types: Defines the Props type, including data for the forecast and onBack for the back button.
// Labels: Generates labels for the charts from the forecast data.
// Chart Data: Defines data objects for temperature, humidity, wind speed, and precipitation probability charts.
// Rendering: Uses Line, Bar, and Pie components from react-chartjs-2 to render the charts with the defined data.
// Back Button: Adds a button to go back to the search input, using the onBack prop.
