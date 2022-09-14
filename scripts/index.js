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
}
popup.addEventListener('submit', formSubmitHandler);

function addPlace(name, link) {
  const placeElement = placeTemplateitem.cloneNode(true);
  const placeNaming = placeElement.querySelector('.places__name');
  const placePhoto = placeElement.querySelector('.places__image');
  const placeDlt = placeElement.querySelector('.delete-button');
  const placeLike = placeElement.querySelector('.like-button');
  placeNaming.textContent = name;
  placePhoto.src = link;
  placePhoto.alt = name;
  placeDlt.addEventListener('click', function(){
    placeElement.remove()
  })
  list.prepend(placeElement);
}

function addEventListener() {
  placeForm.addEventListener('submit', function(evt) {
    evt.preventDefault();
    addPlace(placeName.value, placeLink.value);
    closePopupPlace();
    placeForm.reset()
  })
}
addEventListener();

function createinitialCards() {
  initialCards.map(function(el){
    addPlace(el.name, el.link);
  })
};
createinitialCards();

