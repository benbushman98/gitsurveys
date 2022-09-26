//THIS WORKS ✔️✔️

async function deleteHandler(event) {
    event.preventDefault();

    const id = document.querySelector('.surveyID').innerHTML;

    const response = await fetch(`/api/survey/${id}`, {
        method: 'DELETE'
    });

    if (response.ok) {
        document.location.replace('/dashboard');
    } else {
        alert(response.statusText);
    };
};
  
document.querySelector('#deleteBtn').addEventListener('click', deleteHandler); 