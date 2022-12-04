import Section from "../components/Section.js";
import FormValidator from "../components/FormValidator.js";
import Card from "../components/Card.js";
import PopupWithForm from "../components/PopupWithForm.js";
import UserInfo from "../components/UserInfo.js";
import PopupWithImage from "../components/PopupWithImage.js";
import { initialCards } from "../utils/initialCards.js";
import { settings } from "../components/FormValidator.js";
import {
  popupProfile,
  popupBtn,
  popupBtnPlace,
  placeForm,
  nameInput,
  jobInput,
  placeName,
  placeLink,
} from "../utils/consts.js";
import "./index.css"

const userInfo = new UserInfo({
  nameSelector: ".profile__name",
  jobSelector: ".profile__profession",
});

const profilePopup = new PopupWithForm("#popup-profile", {
  handleFormSubmit: () => {
    userInfo.setUserInfo({
      name: nameInput.value,
      job: jobInput.value,
    });
    profilePopup.close();
  },
});

const renderCard = function (card) {
  const newCard = new Card(card, handleCardClick, "#place-item-template");
  return newCard.generateCard();
};

const renderCards = new Section(
  {
    items: initialCards,
    renderer: (card) => {
      renderCards.addItem(renderCard(card));
    },
  },
  "#places__container"
);

const popupFormPlace = new PopupWithForm("#popup-place", {
  handleFormSubmit: () => {
    renderCards.addItem(
      renderCard({ name: placeName.value, link: placeLink.value })
    );
    popupFormPlace.close();
    validationPlace.toggleButtonState();
  },
});

const popupImage = new PopupWithImage("#photo-popup");
const handleCardClick = function (name, image) {
  popupImage.open(name, image);
};

popupBtnPlace.addEventListener("click", function () {
  popupFormPlace.open();
  validationProfile.toggleButtonState();
});

popupBtn.addEventListener("click", function () {
  profilePopup.open();
  const newUserInfo = userInfo.getUserInfo();
  nameInput.setAttribute("value", newUserInfo.name);
  jobInput.setAttribute("value", newUserInfo.job);
});

const validationProfile = new FormValidator(settings, popupProfile);

const validationPlace = new FormValidator(settings, placeForm);

validationProfile.enableValidation();

validationPlace.enableValidation();

popupImage.setEventListeners();

profilePopup.setEventListeners();

popupFormPlace.setEventListeners();

renderCards.renderItems();
