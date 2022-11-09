import { Card } from './Card.js'
import {initialCards} from './initialCards.js';
import {FormValidator} from './FormValidator.js';
import {settings} from './FormValidator.js';
import {openPopup} from './openPopup.js';

const popupProfile = document.querySelector(".popup-profile");
const popupBtn = document.querySelector(".edit-button");
const popupClose = document.querySelector(".popup-profile__close-button");
const nameInput = document.querySelector(".popup-form__input_text_name");
const jobInput = document.querySelector(".popup-form__input_text_job");
const you = document.querySelector(".profile__name");
const job = document.querySelector(".profile__profession");
const popupPlace = document.querySelector(".popup-place");
const placeName = document.querySelector(".popup-form__input_place_name");
const placeLink = document.querySelector(".popup-form__input_link_photo");
const popupBtnPlace = document.querySelector(".add-button");
const popupClosePlace = document.querySelector(".popup-place__close-button");
const placeForm = popupPlace.querySelector(".popup-form");
const list = document.querySelector(".places__container");
const photoPopupClose = document.querySelector(".photo-popup__close");
const popupFormProfile = document.querySelector(".popup-form_profile");
const popupFormPlace = document.querySelector(".popup-form_place");
export const imgPopup = document.querySelector(".photo-popup");
export const photoPopup = document.querySelector(".photo-popup__image");
export const photoPopupName = document.querySelector(".photo-popup__name");



export function closePopup(popup) {
  popup.classList.remove("popup_open");
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
    const popup = document.querySelector(".popup_open");
    closePopup(popup);
  }
}

function closePopupOverlay(evt) {
  if (evt.target === evt.currentTarget) {
    closePopup(evt.currentTarget);
  }
}



function addPlace(evt) {
    evt.preventDefault();

    renderPlace(placeName.value, placeLink.value, list);

    closePopup(popupPlace);

    placeForm.reset();

    validationPlace.toggleButtonState();

}

function renderPlace(name, link, container) {
  const newCard = new Card (name, link, '#place-item-template');
  const cardElement = newCard.generateCard();
  container.prepend(cardElement);
};

function createInitialCards() {
  initialCards.map(function (el) {

    renderPlace(el.name, el.link, list);

  });

}



const validationProfile = new FormValidator(settings,popupFormProfile);

const validationPlace = new FormValidator(settings,popupFormPlace);

validationProfile.enableValidation();

validationPlace.enableValidation();

popupBtn.addEventListener("click", openProfilePopup);

popupClose.addEventListener("click", () => closePopup(popupProfile));

popupBtnPlace.addEventListener("click", () => openPopup(popupPlace));

popupClosePlace.addEventListener("click", () => closePopup(popupPlace));

popupProfile.addEventListener("submit", submitProfileForm);

photoPopupClose.addEventListener("click", () => closePopup(imgPopup));

placeForm.addEventListener("submit", addPlace);

createInitialCards()
