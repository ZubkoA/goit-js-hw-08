import Player from 'lodash.throttle';
const form = document.querySelector('.feedback-form');
const inputEl = document.querySelector('input');
const textareaEl = document.querySelector('textarea');
const VIMEO_KEY_LS = 'feedback-form-state';

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
const setWatchingTime = ;

form.addEventListener('input', throttle(update, 500));
