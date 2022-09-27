//DELETE A SURVEY - WORKING ON THIS - ONLY WORKS FOR FIRST SURVEY IN THE LIST ❌

async function deleteHandler(event) {
    event.preventDefault();

    const id = document.querySelector('.surveyID').innerHTML;

    const response = await fetch(`/api/survey/${id}`, {
        method: 'DELETE'
    });
    
    console.log(id);

    if (response.ok) {
        document.location.replace('/dashboard');
    } else {
        alert(response.statusText);
    };
};
  
document.querySelector('.deleteBtn').addEventListener('click', deleteHandler); 