// If logged in, show username at navbar instead of login btn
const localUsername = localStorage.getItem('username');
const sessionUsername = sessionStorage.getItem('username');

if (localUsername || sessionUsername) {
  const login_element = document.getElementById('login');
  login_element.textContent = `Hello, ${sessionUsername}`
  login_element.removeAttribute('href');
}


// If cart item added, show the number of items at navbar
const cartItemRemember = localStorage.getItem('cart_1');
const cartItem = localStorage.getItem('cart_2');
let itemLength = 0

if (cartItem) {
  itemLength = JSON.parse(cartItem).length;
} else if (cartItemRemember) {
  itemLength = JSON.parse(cartItemRemember).length;
}

const cart_element = document.getElementById('cart');
const numOfItems = document.createTextNode(` (${itemLength})`);
cart_element.appendChild(numOfItems);


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
        sessionStorage.setItem('username', JSON.stringify(username));

        // If rememberMe is checked, store in local storage
        if (rememberMe) {
          localStorage.setItem('rememberMe', JSON.stringify(true));
          localStorage.setItem('username', JSON.stringify(username));
        } else {
          localStorage.removeItem('rememberMe');
          localStorage.removeItem('username');
        }

        // Redirect to home page or perform other actions, change login btn to username
        const element = document.getElementById('login');
        element.textContent = `Hello, ${username}`

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

      const element = document.getElementById('login');
      element.textContent = `Hello, ${storedUsername}`

      window.location.href = 'landing.html';

    }
  });