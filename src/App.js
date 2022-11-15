import { useEffect, useState } from 'react'; //
import axios from 'axios';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import WeatherCard from './components/WeatherCard';

function App() {
  const [weather, setWeather] = useState([]);
  const [city, setCity] = useState('');

  useEffect(() => {
    const queryURL =
      'https://api.openweathermap.org/data/2.5/forecast?' +
      'q=Philadelphia&units=imperial&appid=0ec949b8b13f2ad5d8653cd84a541bde';
    setTimeout(() => {
      axios.get(queryURL).then((response) => {
        const data = response.data.list;
        const newData = data.map((e) => ({
          forecast: e.weather[0].description,
          temp: e.main.temp,
          feelsLike: e.main.feels_like,
          date: e.dt,
          image: `http://openweathermap.org/img/wn/${e.weather[0].icon}@2x.png`,
        }));
        setCity(response.data.city.name);
        setWeather(newData);
      });
    }, 2000);
  }, [city]);
  return (
    <div className='App'>
      <div className='container'>
        {weather.map((e) => {
          return (
            <WeatherCard
              city={city}
              forecast={e.forecast}
              temp={e.temp}
              feelsLike={e.feelsLike}
              date={e.date}
              image={e.image}
              key={weather.indexOf(e)}
            />
          );
        })}
      </div>
    </div>
  );
}

export default App;
