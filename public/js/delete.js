//DELETE A SURVEY - THIS WORKS ✔️✔️

async function deleteHandler(event) {
    event.preventDefault();

    const id = event.target.dataset.id;

    const response = await fetch(`/api/survey/${id}`, {
        method: 'DELETE'
    });

    if (response.ok) {
        document.location.replace('/dashboard');
    } else {
        alert(response.statusText);
    };
};
const deleteBtnEl = document.getElementsByClassName('deleteBtn');

for(let i = 0; i < deleteBtnEl.length; i++) {
    const element = deleteBtnEl[i];
    element.addEventListener('click', deleteHandler);
}