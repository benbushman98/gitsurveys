const login = async(event) => {
    event.preventDefault();
    
    const email = $('#emailVal');
    const password = $('#passwordVal');
    
    if (email && password) {
      const response = await fetch('/api/user/login', {
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

const signUp = async (event) => {
  event.preventDefault();

  const name = $('#signupName').value.trim();
  const email = $('#signupEmail').value.trim();
  const password = $('#signupPassword').value.trim();

  if (name && email && password) {
    const response = await fetch('/api/user', {
      method: 'POST',
      body: JSON.stringify({ name, email, password }),
      headers: { 'Content-Type': 'application/json' },
    });

    if (response.ok) {
      document.location.replace('/');
    } else {
      alert('Failed to sign up.');
    }
  }
};
  
$("#loginBtn").click(login);
$("#signupBtn").click(signUp);