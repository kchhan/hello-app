const LoginForm = (() => {
  // Section for form and img
  const createSection = () => {
    const section = document.createElement('section');
    section.id = 'form';

    return section;
  };

  // Form for username and password
  const createForm = () => {
    const form = document.createElement('form');

    // Welcome title
    const title = document.createElement('h2');
    title.id = 'login-title';
    title.textContent = 'Welcome! :)';

    // Username field
    const userDiv = document.createElement('div');
    const userLabel = document.createElement('label');
    userLabel.innerHTML = '<i class="fas fa-user-friends"></i> Username';
    const userInput = document.createElement('input');
    userInput.id = 'user-input';
    userInput.required = true;
    userInput.placeholder = 'Enter your username';
    userDiv.appendChild(userLabel);
    userDiv.appendChild(userInput);

    // Password field
    const passwordDiv = document.createElement('div');
    const passwordLabel = document.createElement('label');
    passwordLabel.innerHTML = '<i class="fas fa-key"></i> Password';
    const passwordInput = document.createElement('input');
    passwordInput.id = 'password-input';
    passwordInput.required = true;
    passwordInput.placeholder = 'Enter your password';
    passwordDiv.appendChild(passwordLabel);
    passwordDiv.appendChild(passwordInput);

    // Submit field
    const submitDiv = document.createElement('div');
    const submitButton = document.createElement('button');
    submitButton.id = 'submit';
    submitButton.textContent = 'Log In';
    submitDiv.appendChild(submitButton);

    // Combining all fields
    form.appendChild(title);
    form.appendChild(userDiv);
    form.appendChild(passwordDiv);
    form.appendChild(submitDiv);

    return form;
  };

  // Globe img
  const createImg = () => {
    const img = document.createElement('img');
    img.id = 'globe';
    img.src = '../img/globe.jpg';
    img.alt = 'a globe';

    return img;
  };

  // Combine login and img
  const createLogin = () => {
    const section = createSection();
    const form = createForm();
    const img = createImg();

    section.appendChild(form);
    section.appendChild(img);

    return section;
  };

  return {
    createLogin,
  };
})();

/*  <section id="form">
      <form>
        <h2 id="login-title">Welcome Back :)</h2>
        <div>
          <label><i class="fas fa-user-friends"></i> Username</label>
          <input type="text" placeholder="Enter your username" />
        </div>
        <div>
          <label><i class="fas fa-key"></i> Password</label>
          <input type="password" placeholder="Enter your password" />
        </div>
        <div>
          <button id="submit">Log In</button>
        </div>
      </form>
      <img id="globe" src="../src/img/globe.jpg" alt="" />
    </section> */
