const App = (() => {
  const loadEventListeners = () => {
    document.querySelector('#submit').addEventListener('click', submitForm);
  };

  const loadLogin = () => {
    const login = LoginForm.createLogin();
    const mainContainer = document.querySelector('#main-container');
    mainContainer.appendChild(login);
  };

  const submitForm = () => {
    const userInput = document.querySelector('#user-input');
    const passwordInput = doucment.querySelector('#password-input');
    const user = userInput.value;

    if (userInput.length !== 0 && passwordInput.length !== 0) {
      renderHomePage(user); // user used to greet on homepage
    }
  };

  return {
    init() {
      loadLogin();
      loadEventListeners();
    },
  };
})();
App.init();

// const address = new Address();

// address
//   .getAddress()
//   .then((results) => console.log(results))
//   .catch((err) => console.log(err));
