import throttle from 'lodash.throttle';
const form = document.querySelector('.feedback-form');
const inputEl = document.querySelector('input');
const textareaEl = document.querySelector('textarea');
const VIMEO_KEY_LS = 'feedback-form-state';

form.addEventListener('input', throttle(fillForm, 500));
form.addEventListener('submit', onFormSubmit);
function onFormSubmit(ev) {
  ev.preventDefault();
  inputEl.textContent = '';
  textareaEl.textContent = '';
  localStorage.removeItem(VIMEO_KEY_LS);

  const formData = new FormData(ev.currentTarget);
  formData.forEach((value, name) => {
    console.log(name, value);
  });
}
function fillForm(ev) {
  const saveData = localStorage.getItem(VIMEO_KEY_LS);
  if (saveData) {
    ev.currentTarget.value = saveData;
    return;
  }
}
