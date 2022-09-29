//LOG-OUT THIS WORKS ✔️✔️

const logout = async () => {
    const response = await fetch('/api/users/logout', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
    });
    
    if (response.ok) {

      $(document).ready(function () {
        window.setTimeout(function () {
            location.href = "/";
        }, 1500);
    });
    }
  };

const logoutBtn = document.getElementById('logout');
logoutBtn.addEventListener('click', logout);