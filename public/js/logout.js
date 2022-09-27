//THIS WORKS ✔️✔️

const logout = async () => {
    const response = await fetch('/api/users/logout', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
    });
    
    if (response.ok) {

      $(document).ready(function () {
        // Handler for .ready() called.
        window.setTimeout(function () {
            location.href = "/";
        }, 1500);
    });
    }
  };

  //FOR THE SUBMIT BUTTON ON SURVEY PAGE
 const submit = async () => {
      $(document).ready(function () {
        // Handler for .ready() called.
        window.setTimeout(function () {
            location.href = "/";
        }, 1500);
    });
    }
  ;

  const submitBtn = document.getElementById('submit');
  submitBtn.addEventListener('click', submit);
  const logoutBtn = document.getElementById('logout');
logoutBtn.addEventListener('click', logout);