export {popupProfile,popupBtn,popupBtnPlace,placeForm,nameInput,jobInput}

const popupProfile = document.querySelector(".popup-profile");
const popupBtn = document.querySelector(".edit-button");
const popupBtnPlace = document.querySelector(".add-button");
const popupPlace = document.querySelector(".popup-place");
const placeForm = popupPlace.querySelector(".popup-form");
const nameInput = document.querySelector(".popup-form__input_text_name");
const jobInput = document.querySelector(".popup-form__input_text_job");

export const settings = {
  inputSelector: ".popup-form__input",
  submitButtonSelector: ".popup-form__save-button",
  inactiveButtonClass: "popup-form__save-button_disabled",
  inputErrorClass: "popup-form__input_type-error",
  errorClass: "popup-form__input-error_active"
}
