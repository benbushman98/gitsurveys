const createBtn = document.querySelector('#createBtn');
const surveyForm = document.querySelector('#surveyForm');

function showEditForm(event) {
    surveyForm.classList.remove('hide');
    createBtn.classList.add('hide');
};

createBtn.addEventListener('click', showEditForm)