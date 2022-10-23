const popupProfile = document.querySelector(".popup-profile");
const popupBtn = document.querySelector(".edit-button");
const popupClose = document.querySelector(".popup-profile__close-button");
const nameInput = document.querySelector(".popup-form__input_text_name");
const jobInput = document.querySelector(".popup-form__input_text_job");
const you = document.querySelector(".profile__name");
const job = document.querySelector(".profile__profession");
const popupPlace = document.querySelector(".popup-place");
const popupBtnPlace = document.querySelector(".add-button");
const popupClosePlace = document.querySelector(".popup-place__close-button");
const placeName = document.querySelector(".popup-form__input_place_name");
const placeLink = document.querySelector(".popup-form__input_link_photo");
const placeForm = popupPlace.querySelector(".popup-form");
const list = document.querySelector(".places__container");
const placeTemplate = document.querySelector("#place-item-template");
const placeTemplateItem = placeTemplate.content.querySelector(".places__item");
const imgPopup = document.querySelector(".photo-popup");
const photoPopup = document.querySelector(".photo-popup__image");
const photoPopupName = document.querySelector(".photo-popup__name");
const photoPopupClose = document.querySelector(".photo-popup__close");
const inputList = Array.from(
  placeForm.querySelectorAll(".popup-form__input")
);
const settings = {
    formSelector: ".popup-form",
    inputSelector: ".popup-form__input",
    submitButtonSelector: ".popup-form__save-button",
    inactiveButtonClass: "popup-form__save-button_disabled",
    inputErrorClass: "popup-form__input_type-error",
    errorClass: "popup-form__input-error_active"
}

const buttonElement = placeForm.querySelector(".popup-form__save-button");
const initialCards = [
  {
    name: "Белград",
    link: "./images/belgrade.jpg",
  },
  {
    name: "Градец Кралове",
    link: "./images/hradeckralove.jpg",
  },
  {
    name: "Мокра Гора",
    link: "./images/mokraGora.jpg",
  },
  {
    name: "Прага",
    link: "./images/prague.jpg",
  },
  {
    name: "Травник",
    link: "./images/travnik.jpg",
  },
  {
    name: "Зеница",
    link: "./images/zenica.jpg",
  },
];

function openPopup(popup) {
  popup.classList.add("popup-open");
  document.addEventListener("keydown", closePopupEsc);
  popup.addEventListener("mousedown", closePopupOverlay);
}
function closePopup(popup) {
  popup.classList.remove("popup-open");
  document.removeEventListener("keydown", closePopupEsc);
  popup.removeEventListener("mousedown", closePopupOverlay);
}

function openProfilePopup() {
  openPopup(popupProfile);
  nameInput.value = you.textContent;
  jobInput.value = job.textContent;
}

function submitProfileForm(evt) {
  evt.preventDefault();

  you.textContent = nameInput.value;

  job.textContent = jobInput.value;

  closePopup(popupProfile);
}

function closePopupEsc(evt) {
  if (evt.key === "Escape") {
    const popup = document.querySelector(".popup-open");
    closePopup(popup);
  }
}

function closePopupOverlay(evt) {
  if (evt.target === evt.currentTarget) {
    closePopup(evt.currentTarget);
  }
}

function createPlace(name, link) {
  const placeElement = placeTemplateItem.cloneNode(true);
  const placeNaming = placeElement.querySelector(".places__name");
  const placePhoto = placeElement.querySelector(".places__image");
  const placeDlt = placeElement.querySelector(".delete-button");
  const likeBtn = placeElement.querySelector(".like-button");
  placeNaming.textContent = name;
  placePhoto.src = link;
  placePhoto.alt = name;
  placeDlt.addEventListener("click", function deletePlace() {
    placeElement.remove();
  });
  likeBtn.addEventListener("click", like);
  function like() {
    likeBtn.classList.toggle("like-buttton_active");
  }
  placePhoto.addEventListener("click", openPopupImage);

  function openPopupImage() {
    openPopup(imgPopup);
    photoPopup.src = placePhoto.src;
    photoPopupName.textContent = placeNaming.textContent;
    photoPopupName.textContent = placePhoto.alt;
  }

  return placeElement;
}


function renderPlace(name, link, container) {
  const place = createPlace(name, link);
  container.prepend(place);
}

function addPlace(evt) {
    evt.preventDefault();

    renderPlace(placeName.value, placeLink.value, list);

    closePopup(popupPlace);

    placeForm.reset();

    toggleButtonState(inputList, buttonElement, settings);
}

function createInitialCards() {
  initialCards.map(function (el) {
    renderPlace(el.name, el.link, list);
  });
}

popupBtn.addEventListener("click", openProfilePopup);

popupClose.addEventListener("click", () => closePopup(popupProfile));

popupBtnPlace.addEventListener("click", () => openPopup(popupPlace));

popupClosePlace.addEventListener("click", () => closePopup(popupPlace));

popupProfile.addEventListener("submit", submitProfileForm);

photoPopupClose.addEventListener("click", () => closePopup(imgPopup));

placeForm.addEventListener("submit", addPlace);

createInitialCards();
