import throttle from 'lodash.throttle';
const form = document.querySelector('.feedback-form');
const email = document.querySelector('.feedback-form input');
const textarea = document.querySelector('.feedback-form textarea');
const STORAGE_KEY = 'feedback-form-state';
let formData = {
  email: email.value,
  textarea: textarea.value,
};
form.addEventListener('submit', onFormSubmit);
form.addEventListener('input', throttle(onFormInput, 500));
populateFormInput();
function onFormSubmit(e) {
  e.preventDefault();
  console.log(formData);
  e.target.reset();
  localStorage.removeItem(STORAGE_KEY);
}
function onFormInput(e) {
  formData.email = email.value;
  formData.textarea = textarea.value;
  localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
}
function populateFormInput() {
  const savedMessage = JSON.parse(localStorage.getItem(STORAGE_KEY));
  if (savedMessage) {
    email.value = savedMessage.email;
    textarea.value = savedMessage.textarea;
  }
}
