export { cartNum };

// If logged in, show username at navbar instead of login btn
const localUsername = JSON.parse(localStorage.getItem('username'));
const sessionUsername = JSON.parse(sessionStorage.getItem('username'));

const const_username = "admin";
const const_password = "password123";

if (localUsername || sessionUsername) {
  const login_element = document.getElementById('login');
  login_element.textContent = `Hello, ${sessionUsername}`
  login_element.removeAttribute('href');
}


// If cart item's added, show the number of items at navbar
cartNum();
function cartNum(){
  const cartItemRemember = JSON.parse(localStorage.getItem('cart_1'));
  const cartItem = JSON.parse(localStorage.getItem('cart_2'));
  let itemLength = 0
  
  if (cartItem != null && cartItem) {
    itemLength = cartItem.length;
  } if (cartItemRemember != null && cartItemRemember) {
    itemLength = cartItemRemember.length;
  }
  
  const cart_element = document.getElementById('cart');
  let numOfItems = document.createTextNode(` (${itemLength})`);

  if (cart_element.childNodes.length > 1) {
      cart_element.replaceChild(numOfItems, cart_element.lastChild);
  } else {
      cart_element.appendChild(numOfItems);
  }
}


document.addEventListener('DOMContentLoaded', function () {
    const loginForm = document.getElementById('login-form');

    loginForm.addEventListener('submit', function (event) {
      event.preventDefault();

      const username = document.getElementById('username').value;
      const password = document.getElementById('password').value;
      const rememberMe = document.getElementById('rememberMe').checked;

      // Empty value is not allowded
      if (username === const_username && password === const_password) {
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
        element.textContent = `Hello, ${(username)}`

        window.location.href = 'landing.html';
      } else {
        alert('Invalid username or password');
      }
    });

    // Check if user is already logged in
    const rememberMe = localStorage.getItem('rememberMe');
    const loggedIn = sessionStorage.getItem('loggedIn');

    if (rememberMe && loggedIn) {
      const storedUsername = JSON.parse(localStorage.getItem('username'));
      sessionStorage.setItem('username', storedUsername);

      const element = document.getElementById('login');
      element.textContent = `Hello, ${storedUsername}`

      window.location.href = 'landing.html';

    }
  });