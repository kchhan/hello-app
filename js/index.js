const App = (() => {
  const renderLogin = () => {
    const mainContainer = document.querySelector('#main-container');
    mainContainer.innerHTML = '';
    const login = LoginForm.createLogin();
    mainContainer.appendChild(login);

    document.querySelector('#submit').addEventListener('click', submitForm);
  };

  const renderHomePage = (user) => {
    const mainContainer = document.querySelector('#main-container');
    mainContainer.innerHTML = '';
    const home = Home.createHome(user);
    mainContainer.appendChild(home);

    document.querySelector('#logout-button').addEventListener('click', signOut);
  };

  const submitForm = () => {
    const userInput = document.querySelector('#user-input');
    const passwordInput = document.querySelector('#password-input');
    const user = userInput.value;
    const password = passwordInput.value;

    const checkUser = () => {
      const regex = /^[a-zA-Z0-9]+([a-zA-Z0-9](_|-| )[a-zA-Z0-9])*[a-zA-Z0-9]+$/;
      return regex.test(user);
    };

    const checkPassword = () => {
      const regex = /^[a-zA-Z0-9]+([a-zA-Z0-9](_|-| )[a-zA-Z0-9])*[a-zA-Z0-9]+$/;
      return regex.test(password);
    };

    if (checkUser() && checkPassword()) {
      renderHomePage();
      Logic.updateHello(user); // user used to greet on homepage
      Logic.updateHeader();
      Logic.updateWeather();
    }
  };

  const signOut = () => {
    renderLogin();
  };

  return {
    init() {
      renderLogin();
    },
  };
})();
App.init();
