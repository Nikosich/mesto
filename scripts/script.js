const popup = document.querySelector(".popup");
const popupBtn = document.querySelector(".edit-button");
const popupClose = document.querySelector (".popup__close-button");
const nameInput = document.querySelector (".popup__name");
const jobInput = document.querySelector (".popup__job");
const you = document.querySelector (".profile__name");
const job = document.querySelector (".profile__profession");
function openPopup() {
  popup.classList.add("popup__open");
}
function closePopup() {
  popup.classList.remove("popup__open");
}
popupBtn.addEventListener("click", openPopup);

popupClose.addEventListener("click", closePopup);

function formSubmitHandler (evt) {
  evt.preventDefault();
  you.textContent = nameInput.value;
  job.textContent = jobInput.value;
  popup.classList.remove("popup__open");
}

popup.addEventListener('submit', formSubmitHandler);
