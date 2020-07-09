const Home = (() => {
  const createSection = () => {
    const section = document.createElement('section');
    section.id = 'home';

    return section;
  };

  // Home title
  const createHeader = (user) => {
    const header = document.createElement('header');
    const homeTitle = document.createElement('h1');
    homeTitle.id = 'home-title';
    homeTitle.textContent = user;

    const ip = document.createElement('p');
    ip.id = 'ip-address';

    header.appendChild(homeTitle);
    header.appendChild(ip);

    return header;
  };

  // Weather Container
  const createWeather = () => {
    const container = document.createElement('div');
    const title = document.createElement('h2');
    const citySpan = document.createElement('span');
    const countrySpan = document.createElement('span');
    const location = document.createElement('h2');
    const icon = document.createElement('img');
    const temp = document.createElement('h3');
    const description = document.createElement('h4');
    const wind = document.createElement('h4');
    const humidity = document.createElement('h4');

    container.id = 'weather-container';
    title.id = 'title';
    citySpan.id = 'w-city';
    countrySpan.id = 'w-country';
    icon.id = 'w-icon';
    temp.id = 'w-temp';
    description.id = 'w-desc';
    wind.id = 'w-wind';
    humidity.id = 'w-humidity';

    title.textContent = 'Current Weather At';

    location.appendChild(citySpan);
    location.appendChild(countrySpan);

    container.appendChild(title);
    container.appendChild(location);
    container.appendChild(icon);
    container.appendChild(temp);
    container.appendChild(description);
    container.appendChild(wind);
    container.appendChild(humidity);

    return container;
  };

  // Log out button
  const createLogout = () => {
    const button = document.createElement('button');
    button.id = "logout-button";
    button.textContent = "Log Out"

    return button;
  };

  // Footer
  const createFooter = () => {
    const footer = document.createElement('footer');
    footer.id = 'footer';
    footer.innerHTML =
      'Programmed by: <a href="https://www.github.com/kchhan/hello-app" target="_blank">Kevin Chhan</a>';

    return footer;
  };

  // To combine all elements
  const createHome = (user) => {
    const section = createSection();
    const header = createHeader(user);
    const weather = createWeather();
    const logout = createLogout();
    const footer = createFooter();

    section.appendChild(header);
    section.appendChild(weather);
    section.appendChild(logout)
    section.appendChild(footer);

    return section;
  };

  return {
    createHome,
  };
})();
