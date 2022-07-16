const popup = document.querySelector(".popup-form");
const popupBtn = document.querySelector(".edit-button");
const popupClose = document.querySelector (".popup-form__close-button");
const nameInput = document.querySelector (".popup-form__input_text_name");
const jobInput = document.querySelector (".popup-form__input_text_job");
const you = document.querySelector (".profile__name");
const job = document.querySelector (".profile__profession");
function openPopup() {
  popup.classList.add("popup-form__open");
}
function closePopup() {
  popup.classList.remove("popup-form__open");
}
popupBtn.addEventListener("click", openPopup);

popupClose.addEventListener("click", closePopup);

function formSubmitHandler (evt) {
  evt.preventDefault();
  you.textContent = nameInput.value;
  job.textContent = jobInput.value;
  popup.classList.remove("popup-form__open");
}

popup.addEventListener('submit', formSubmitHandler);
