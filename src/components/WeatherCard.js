// location
// date toLocatleDate tolocaletime

//  {clous, dt, dt_txt, main{}, pop, sys, visibility}

//http://openweathermap.org/img/wn/${day.weather[0].icon}@2x.png

export default function WeatherCard({
  image,
  city,
  date,
  forecast,
  temp,
  feelsLike,
}) {
  const formatDate = new Date(date).toString();

  //
  return (
    <div className='card'>
      <div className='card-img-top' alt='card image cap'>
        <img src={image} alt='weather icon' />
      </div>
      <div className='card-body'>
        <div className='card-title'>
          {city} weather on {formatDate}
        </div>
        <div className='card-text'>
          The weather will be {forecast} and {temp}, but will feel like{' '}
          {feelsLike}.
        </div>
      </div>
    </div>
  );
}
