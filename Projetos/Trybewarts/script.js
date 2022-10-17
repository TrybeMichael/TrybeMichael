//  variáveis globais:
const getParent = document.querySelector('#main');
let getTextArea = document.querySelector('#textarea');
const getMain = document.querySelector('#evaluation-form');
const getSubmitButton = document.querySelector('#submit-btn');
const getFormName = document.querySelector('#input-name');
const getFormLastName = document.querySelector('#input-lastname');
const getFormEmail = document.querySelector('#input-email');
const getFormHouse = document.querySelector('#house');
const createFormList = document.createElement('label');
const getLogo = document.querySelector('#trybewarts-forms-logo');

function checkInformations(event) {
  event.preventDefault();
  const valorEmail = document.querySelector('#email').value;
  const valorSenha = document.querySelector('#senha').value;
  if (valorEmail === 'tryber@teste.com' && valorSenha === '123456') {
    alert('Olá, Tryber!');
  } else {
    alert('Email ou senha inválidos.');
  }
  getMain.style.display = 'flex';
}
const clicaBotao = document.querySelector('#botao');
clicaBotao.addEventListener('click', checkInformations);

const botaoEnviar = document.querySelector('#submit-btn');

const checkBox = document.querySelector('#agreement');

botaoEnviar.disabled = true;
botaoEnviar.style.opacity = '50%';

function validButton() {
  botaoEnviar.disabled = false;
  botaoEnviar.style.opacity = '100%';
}

checkBox.addEventListener('click', validButton);

function countCharacters() {
  getTextArea = document.querySelector('#textarea').value.length;
  const getCounter = document.querySelector('#counter');
  const maxLength = 500;

  const charactersRemaining = maxLength - getTextArea;
  getCounter.textContent = `${charactersRemaining} caracteres restantes`;
}
getTextArea.addEventListener('input', countCharacters);

// Requisito 21

function storageInformations() {
  createFormList.id = 'form-data';
  getParent.appendChild(createFormList);
  const createFormName = document.createElement('p');
  createFormName.textContent = `Nome: ${getFormName.value} ${getFormLastName.value}`;
  createFormList.appendChild(createFormName);
  const createFormEmail = document.createElement('p');
  createFormEmail.innerHTML = `Email: ${getFormEmail.value}`;
  createFormList.appendChild(createFormEmail);
  const createFormHouse = document.createElement('p');
  createFormHouse.innerHTML = `Casa: ${getFormHouse.value}`;
  createFormList.appendChild(createFormHouse);
}

function familyChoice() {
  const createFamilyForm = document.createElement('p');
  createFormList.appendChild(createFamilyForm);
  const getFamilyForm = document.querySelectorAll('#family');
  const array = [];
  for (let index = 0; index < getFamilyForm.length; index += 1) {
    if (getFamilyForm[index].checked) {
      array.push(` ${getFamilyForm[index].value}`);
    }
  }

  createFamilyForm.textContent = `Família: ${array}`;
}

function stackChoice() {
  const createFormStack = document.createElement('p');
  createFormList.appendChild(createFormStack);
  const getStackForm = document.querySelectorAll('.subject');
  const array = [];
  for (let index = 0; index < getStackForm.length; index += 1) {
    if (getStackForm[index].checked) {
      array.push(` ${getStackForm[index].value}`);
    }
  }
  createFormStack.textContent = `Matérias: ${array}`;
}

function avaliationChoice() {
  const createAvaliationForm = document.createElement('p');
  createFormList.appendChild(createAvaliationForm);
  const getAvaliationForm = document.querySelectorAll('#rate');
  let rate = 0;
  for (let index = 0; index < getAvaliationForm.length; index += 1) {
    if (getAvaliationForm[index].checked) {
      rate = getAvaliationForm[index].value;
    }
  }
  createAvaliationForm.textContent = `Avaliação: ${rate}`;
}

function noteAdd() {
  const getNote = document.querySelector('#textarea');
  const createFormNote = document.createElement('p');
  createFormNote.innerHTML = `Observações: ${getNote.value}`;
  createFormList.appendChild(createFormNote);
}

function showForm() {
  const getForm = document.querySelector('#form-data');
  getForm.style.display = 'flex';
  getForm.style.justifyContent = 'center';
  getForm.style.flexDirection = 'column';
}

function hideForm() {
  getMain.style.display = 'none';
}
function myFunction(x) {
  if (x.matches) { // If media query matches
    getMain.appendChild(getLogo);
  }
}

const x = window.matchMedia('(max-width: 1000px)');
myFunction(x);
x.addListener(myFunction);

getSubmitButton.addEventListener('click', (event) => {
  event.preventDefault();
  storageInformations();
  familyChoice();
  stackChoice();
  avaliationChoice();
  showForm();
  hideForm();
  noteAdd();
  getMain.removeChild(getLogo);
});
