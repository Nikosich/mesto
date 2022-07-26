const popup = document.querySelector(".popup");
const popupBtn = document.querySelector(".edit-button");
const popupClose = document.querySelector (".popup__close-button");
const nameInput = document.querySelector (".popup-form__input_text_name");
const jobInput = document.querySelector (".popup-form__input_text_job");
const you = document.querySelector (".profile__name");
const job = document.querySelector (".profile__profession");
function openPopup() {
  nameInput.value = you.textContent ;
  jobInput.value = job.textContent;
  popup.classList.add("popup_open");
}
function closePopup() {
  popup.classList.remove("popup_open");
}
popupBtn.addEventListener("click", openPopup);

popupClose.addEventListener("click", closePopup);

function formSubmitHandler (evt) {
  evt.preventDefault();
  you.textContent = nameInput.value;
  job.textContent = jobInput.value;
  closePopup();
}

popup.addEventListener('submit', formSubmitHandler);
