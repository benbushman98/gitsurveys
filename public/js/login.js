const login = async(event) => {
    event.preventDefault();
    
    const username = $('#');
    const password = $('#');
    
    if (username && password) {
      const response = await fetch('/api/user/login', {
        method: 'POST',
        body: JSON.stringify({
          username: username.value,
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