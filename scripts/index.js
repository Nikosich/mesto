const doc = document;
const popup = document.querySelector(".popup");
const popupBtn = document.querySelector(".edit-button");
const popupClose = document.querySelector (".popup__close-button");
const nameInput = document.querySelector (".popup-form__input_text_name");
const jobInput = document.querySelector (".popup-form__input_text_job");
const you = document.querySelector (".profile__name");
const job = document.querySelector (".profile__profession");
const popupPlace = document.querySelector (".popup_add-photo");
const popupBtnPlace = document.querySelector(".add-button");
const popupClosePlace = document.querySelector(".popup_close-button_place");
const placeName = document.querySelector (".popup-form__input_place_name");
const placeLink = document.querySelector (".popup-form__input_link_photo");
const placeForm = popupPlace.querySelector(".popup-form");
const list = document.querySelector(".places__container");
const placeTemplate = document.querySelector('#place-item-template');
const placeTemplateitem = placeTemplate.content.children[0];
const placeElement = placeTemplateitem.cloneNode(true);
const placeNaming = placeElement.querySelector('.places__name');
const placePhoto = placeElement.querySelector('.places__image');
const placeDlt = placeElement.querySelector('.delete-button');
const likeBtn = placeElement.querySelector('.like-button');
const imgPopup = document.querySelector('.photo-popup__open');
const photoPopup = document.querySelector('.photo-popup__image');
const photoPopupName = document.querySelector('.photo-popup__name')
const photoPopupClose = document.querySelector('.photo-popup__close')
const initialCards = [
  {
    name: 'Белград',
    link: './images/belgrade.jpg'
  },
  {
    name: 'Градец Кралове',
    link: './images/hradeckralove.jpg'
  },
  {
    name: 'Мокра Гора',
    link: './images/mokraGora.jpg'
  },
  {
    name: 'Прага',
    link: './images/prague.jpg'
  },
  {
    name: 'Травник',
    link: './images/travnik.jpg'
  },
  {
    name: 'Зеница',
    link: './images/zenica.jpg'
  }
];

function openPopup() {
  nameInput.value = you.textContent;
  jobInput.value = job.textContent;
  popup.classList.add("popup_open");
}
function closePopup() {
  popup.classList.remove("popup_open");
}
popupBtn.addEventListener("click", openPopup);

popupClose.addEventListener("click", closePopup);

function openPupupPhoto() {
  popupPlace.classList.add("popup_open");
}

popupBtnPlace.addEventListener("click",openPupupPhoto);

function closePopupPlace() {
  popupPlace.classList.remove("popup_open");
}

popupClosePlace.addEventListener("click",closePopupPlace);

function formSubmitHandler (evt) {
  evt.preventDefault();
  you.textContent = nameInput.value;
  job.textContent = jobInput.value;
  closePopup();
};
popup.addEventListener('submit', formSubmitHandler);

function place(name, link) {
  const placeElement = placeTemplateitem.cloneNode(true);
  const placeNaming = placeElement.querySelector('.places__name');
  const placePhoto = placeElement.querySelector('.places__image');
  const placeDlt = placeElement.querySelector('.delete-button');
  const likeBtn = placeElement.querySelector('.like-button');
  placeNaming.textContent = name;
  placePhoto.src = link;
  placePhoto.alt = name;
  placeDlt.addEventListener('click', function deletePlace(){
    placeElement.remove()
  })
  likeBtn.addEventListener('click', function(){
    likeBtn.classList.toggle('like-buttton_active')
  })
  list.prepend(placeElement);
  placePhoto.addEventListener("click", function popupImage() {
    imgPopup.classList.add('popup_open');
    photoPopup.src = placePhoto.src;
   photoPopupName.textContent = placeNaming.textContent;
   photoPopupName.textContent = placePhoto.alt;
  });
}

photoPopupClose.addEventListener ("click", function popupImageClose() {
  imgPopup.classList.remove('popup_open');
});

function addPlace() {
  placeForm.addEventListener('submit', function(evt) {
    evt.preventDefault();
    place(placeName.value, placeLink.value);
    closePopupPlace();
    placeForm.reset()
  })
};
addPlace();
function createinitialCards() {
  initialCards.map(function(el){
    place(el.name, el.link);
  })
};
createinitialCards();

