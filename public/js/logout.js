const logout = async () => {
    const response = await fetch('/api/users/logout', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
    });
    
    if (response.ok) {
      document.location.replace('/');
    } else {
      alert('Failed to logout. Please try again.');
    }
  };

const logoutBtn = document.getElementById('logout')
logoutBtn.addEventListener('click', logout);