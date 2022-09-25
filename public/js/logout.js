//THIS WORKS ✔️✔️

const logout = async () => {
    const response = await fetch('/api/users/logout', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
    });
    
    if (response.ok) {
      document.location.replace('/');
      alert('Thanks for visiting!');
    } else {
      alert('You are not logged in.');
    }
  };

const logoutBtn = document.getElementById('logout');
logoutBtn.addEventListener('click', logout);