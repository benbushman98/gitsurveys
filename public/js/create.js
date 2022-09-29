//CREATE A SURVEY - THIS WORKS ✔️✔️

const createBtn = document.querySelector('#createBtn');
const surveyForm = document.querySelector('#surveyForm');

function showEditForm() {
    surveyForm.classList.remove('hide');
    createBtn.classList.add('hide');
};

async function newSurvey(event) {
    event.preventDefault();
  
    const title = document.querySelector('#surveyTitle').value;
    const question = document.querySelector('#surveyQuestion').value;
    const option1 = document.querySelector('#option1').value;
    const option2 = document.querySelector('#option2').value;
    const option3 = document.querySelector('#option3').value;
    const option4 = document.querySelector('#option4').value;
    const response = await fetch('/api/survey', {
      method: 'POST',
      body: JSON.stringify({
        title: title,
        question: question,
        option1: option1,
        option2: option2,
        option3: option3,
        option4: option4
      }),
      headers: {
        'Content-Type': 'application/json'
      }
    });
  
    if (response.ok) {
      createBtn.classList.remove('hide');
      surveyForm.classList.add('hide');
      document.location.replace('/dashboard');
    } else {
      alert(response.statusText);
    }
  }
  
document.querySelector('.newSurveyForm').addEventListener('submit', newSurvey);
createBtn.addEventListener('click', showEditForm)