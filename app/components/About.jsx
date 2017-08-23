var React = require('react');

var About = (props) => {
  return (
    <div>
      <h1 className="text-center">About</h1>
      <p>
        This is a weather application build on React, which is to check out the weather of different cities.
      </p>
      <p>
        I am using the the openweathermap api for getting the exact weather data available for different cities.
        So all my weather data are authentic. Check out my app on heroku web server site:
        <a href="http://dry-tundra-33736.herokuapp.com/#/?_k=7h1clu">My Weather App</a>
      </p>
      <p>
        Here are the some the tools which I have used:
      </p>
      <ul>
        <li>
          <a href="https://facebook.github.io/react">React</a> - A JavaScript framework.
        </li>
        <li>
          <a href="http://openweathermap.org/">Open Weather map</a> - used for weather data by city name.
        </li>
      </ul>
    </div>
  )
};

module.exports = About;
