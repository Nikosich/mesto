import Section from "../components/Section.js";
import FormValidator from "../components/FormValidator.js";
import Card from "../components/Card.js";
import PopupWithForm from "../components/PopupWithForm.js";
import UserInfo from "../components/UserInfo.js";
import PopupWithImage from "../components/PopupWithImage.js";
import PopupVerification from "../components/PopupVerification.js";
import { settings } from "../utils/consts.js";
import {
  popupProfile,
  popupBtn,
  popupBtnPlace,
  placeForm,
  nameInput,
  jobInput,
  popupAvatarBtn,
  avatar,
} from "../utils/consts.js";
import "./index.css";
import { api } from "../components/Api.js";

let userId;

Promise.all([api.getInitialCards(), api.getProfile()])
  .then(([Initialcards, userData]) => {
    userId = userData._id;
    userInfo.setUserInfo(userData);
    renderCards.renderItems(Initialcards);
  })
  .catch((err) => {
    console.log(`Error: ${err}`);
  });

const userInfo = new UserInfo({
  nameSelector: ".profile__name",
  jobSelector: ".profile__profession",
  avatarSelector: ".profile__image",
});

const profilePopup = new PopupWithForm("#popup-profile", {
  handleFormSubmit: (dataProfile) => {
    profilePopup.loading(true);
    api
      .editProfile(dataProfile)
      .then((dataProfile) => {
        userInfo.setUserInfo(dataProfile);
        profilePopup.close();
      })
      .catch((err) => {
        console.log(`Error: ${err}`);
      })
      .finally(() => {
        profilePopup.loading(false);
      });
  },
});

const renderCard = (data) => {
  const newCard = new Card(
    data,
    "#place-item-template",
    userId,
    data._id,
    data.owner._id,
    {
      handleCardClick: (name, image) => {
        popupImage.open(name, image);
      },
      handleDeleteClick: (cardId) => {
        deletePlacePopup.open();
        deletePlacePopup.callback(() => {
          api
            .deleteCard(cardId)
            .then(() => {
              deletePlacePopup.close();
              newCard.deletePlace();
            })
            .catch((err) => {
              console.log(`Error: ${err}`);
            });
        });
      },
      handleLikeClick: (cardId) => {
        api
          .like(cardId)
          .then((data) => {
            newCard.handleLikeCard(data);
          })
          .catch((err) => {
            console.log(`Error: ${err}`);
          });
      },
      handleRemoveLike: (cardId) => {
        api
          .removeLike(cardId)
          .then((data) => {
            newCard.handleLikeCard(data);
          })
          .catch((err) => {
            console.log(`Error: ${err}`);
          });
      },
    }
  );
  const card = newCard.generateCard();
  return card;
};

const renderCards = new Section(
  {
    renderer: (data) => {
      renderCards.addItem(renderCard(data));
    },
  },
  "#places__container"
);

const deletePlacePopup = new PopupVerification("#popup-delete");

const popupFormPlace = new PopupWithForm("#popup-place", {
  handleFormSubmit: (formData) => {
    popupFormPlace.loading(true);
    api
      .addCard(formData)
      .then((formData) => {
        renderCards.addItem(renderCard(formData));
        popupFormPlace.close();
        validationPlace.toggleButtonState();
      })
      .catch((err) => {
        console.log(`Form error: ${err}`);
      })
      .finally(() => {
        popupFormPlace.loading(false);
      });
  },
});

const popupImage = new PopupWithImage("#photo-popup");

const avatarPopup = new PopupWithForm("#popup-avatar", {
  handleFormSubmit: (data) => {
    avatarPopup.loading(true);
    api
      .changeAvatar(data)
      .then((data) => {
        avatar.src = data.avatar;
        avatarPopup.close();
      })
      .catch((err) => {
        console.log(`Error: ${err}`);
      })
      .finally(() => {
        avatarPopup.loading(false);
      });
  },
});

popupAvatarBtn.addEventListener("click", function () {
  avatarPopup.open();
});

popupBtnPlace.addEventListener("click", function () {
  popupFormPlace.open();
  validationPlace.toggleButtonState();
});

popupBtn.addEventListener("click", function () {
  profilePopup.open();
  const newUserInfo = userInfo.getUserInfo();
  nameInput.value = newUserInfo.name;
  jobInput.value = newUserInfo.job;
});

const validationProfile = new FormValidator(settings, popupProfile);

const validationPlace = new FormValidator(settings, placeForm);

validationProfile.enableValidation();

validationPlace.enableValidation();

popupImage.setEventListeners();

profilePopup.setEventListeners();

avatarPopup.setEventListeners();

popupFormPlace.setEventListeners();

deletePlacePopup.setEventListeners();
