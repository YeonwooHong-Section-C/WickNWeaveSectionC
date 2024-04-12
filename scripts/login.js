document.addEventListener('DOMContentLoaded', function () {
    const loginForm = document.getElementById('login-form');

    loginForm.addEventListener('submit', function (event) {
      event.preventDefault();

      const username = document.getElementById('username').value;
      const password = document.getElementById('password').value;
      const rememberMe = document.getElementById('rememberMe').checked;

      // Empty value is not allowded
      if (username && password) {
        // Store user data in session storage
        sessionStorage.setItem('loggedIn', JSON.stringify(true));
        sessionStorage.setItem('username', username);

        // If rememberMe is checked, store in local storage
        if (rememberMe) {
          localStorage.setItem('rememberMe', JSON.stringify(true));
          localStorage.setItem('username', username);
        } else {
          localStorage.removeItem('rememberMe');
          localStorage.removeItem('username');
        }

        // Redirect to home page or perform other actions
        window.location.href = 'landing.html';
      } else {
        alert('Invalid username or password');
      }
    });

    // Check if user is already logged in
    const rememberMe = localStorage.getItem('rememberMe');
    const loggedIn = sessionStorage.getItem('loggedIn');

    if (rememberMe && loggedIn) {
      const storedUsername = localStorage.getItem('username');
      sessionStorage.setItem('username', storedUsername);
      window.location.href = 'landing.html';
    }
  });