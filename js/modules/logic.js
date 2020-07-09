const Logic = (() => {
  // Get ipAddress then pass to get language specific hello
  const updateHello = (user) => {
    const address = new Address();

    address
      .getAddress()
      .then((results) => {
        findHello(results, user);
      })
      .catch((err) => console.log(err));
  };

  const findHello = (data, user) => {
    const ipAddress = data.query;

    const hello = new Hello(ipAddress);
    hello
      .getHello()
      .then((results) => {
        updateHelloUI(results, user);
      })
      .catch((err) => console.log(err));
  };

  const updateHelloUI = (data, user) => {
    const homeTitle = document.querySelector('#home-title');
    homeTitle.textContent = `${data.hello}, ${user}`;
  };

  // Get ipAddress and render it to ui
  const updateHeader = () => {
    const address = new Address();

    address
      .getAddress()
      .then((results) => updateHeaderUI(results))
      .catch((err) => console.log(err));
  };

  const updateHeaderUI = (data) => {
    const ipAddress = data.query;
    const ip = document.querySelector('#ip-address');
    ip.textContent = `Your IP Address is: ${ipAddress}`;
  }

  // Get ipAddress then pass to get weather data from location
  const updateWeather = () => {
    const address = new Address();

    address
      .getAddress()
      .then((results) => {
        findWeather(results);
      })
      .catch((err) => console.log(err));
  };

  const findWeather = (data) => {
    const addressData = data;

    const weather = new Weather(addressData.city);

    weather
      .getWeather()
      .then((results) => {
        updateWeatherUI(results);
      })
      .catch((err) => console.log(err));
  };

  const updateWeatherUI = (results) => {
    const weatherData = results;

    const citySpan = document.querySelector('#w-city');
    const countrySpan = document.querySelector('#w-country');
    const icon = document.querySelector('#w-icon');
    const temp = document.querySelector('#w-temp');
    const description = document.querySelector('#w-desc');
    const wind = document.querySelector('#w-wind');
    const humidity = document.querySelector('#w-humidity');

    citySpan.textContent = `${weatherData.name}, `;
    countrySpan.textContent = weatherData.sys.country;
    icon.src = `https://openweathermap.org/img/wn/${weatherData.weather[0].icon}@2x.png`;
    temp.textContent = `${Math.round(weatherData.main.temp)} F deg`;
    description.textContent = `Description: ${weatherData.weather[0].description}`;
    wind.textContent = `Wind: ${weatherData.wind.speed}mph`;
    humidity.textContent = `Humidity: ${weatherData.main.humidity}%`;
  };

  return {
    updateHello,
    updateHeader,
    updateWeather,
  };
})();
