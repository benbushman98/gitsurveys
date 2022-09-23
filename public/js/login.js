
const login = async (event) => {
  event.preventDefault();

  const email = document.querySelector('#emailVal').value.trim();
  const password = document.querySelector('#passwordVal').value.trim();

  if (email && password) {
    const response = await fetch('/api/users/login', {
      method: 'POST',
      body: JSON.stringify({
        username: email.value,
        password: password.value,
      }),
      headers: { 'Content-Type': 'application/json' },
    });

    if (response.ok) {
      document.location.replace('/');
    } else {
      alert('Username or Password is Incorrect. If you do not have an account, please sign up.');
    }
  }
};

const loginBtn = document.getElementById('loginBtn')
loginBtn.addEventListener('submit', login);