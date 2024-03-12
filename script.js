const form = document.querySelector(".form");

const userName = document.querySelector('#name');
const userSecondName = document.querySelector('#secondName');
const userEmail = document.querySelector('#email');
const userPhone = document.querySelector('#phone');
const dataProcessing = document.querySelector('#agree');

const sendBtn = document.querySelector('#button');

form.addEventListener("submit", (event) => {
  event.preventDefault();
  sendRequest();
  form.reset();
});

function sendRequest() {
  fetch('https://polinashneider.space/user', {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'Authorization': 'Bearer: kristinabobako'
    },
    body: JSON.stringify({
      name: userName.value,
      secondName: userSecondName.value,
      phone: userPhone.value,
      email: userEmail.value,
      agree: dataProcessing.checked
    }),
  })
    .then((result) => {
      return result.json();
    })
    .then((data) => {
      alert('Запись успешно внесена');
    })
    .catch((error) => {
      alert('Запись не внесена');
    });
};

