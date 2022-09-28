const popupProfile = document.querySelector(".popup-profile");
const popupBtn = document.querySelector(".edit-button");
const popupClose = document.querySelector (".popup-profile__close-button");
const nameInput = document.querySelector (".popup-form__input_text_name");
const jobInput = document.querySelector (".popup-form__input_text_job");
const you = document.querySelector (".profile__name");
const job = document.querySelector (".profile__profession");
const popupPlace = document.querySelector (".popup-place");
const popupBtnPlace = document.querySelector(".add-button");
const popupClosePlace = document.querySelector(".popup-place__close-button");
const placeName = document.querySelector (".popup-form__input_place_name");
const placeLink = document.querySelector (".popup-form__input_link_photo");
const placeForm = popupPlace.querySelector(".popup-form");
const list = document.querySelector(".places__container");
const placeTemplate = document.querySelector('#place-item-template');
const placeTemplateItem = placeTemplate.content.querySelector('.places__item');
const imgPopup = document.querySelector('.photo-popup');
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
  popupProfile.classList.add("popup-open");
}
function closePopup() {
  popupProfile.classList.remove("popup-open");
}

function openPupupPhoto() {
  popupPlace.classList.add("popup-open");
}

function closePopupPlace() {
  popupPlace.classList.remove("popup-open");
}

function submitForm (evt) {
  evt.preventDefault();
  you.textContent = nameInput.value;
  job.textContent = jobInput.value;
  closePopup();
};

function createPlace(name, link) {
  const placeElement = placeTemplateItem.cloneNode(true);
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
  placePhoto.addEventListener("click", openPopupImage );

  function openPopupImage() {
    imgPopup.classList.add('popup-open');
    photoPopup.src = placePhoto.src;
   photoPopupName.textContent = placeNaming.textContent;
   photoPopupName.textContent = placePhoto.alt;
  };

  return placeElement;
};

function renderPlace(name, link, container) {
  const place = createPlace(name, link);
  container.prepend(place)
};

photoPopupClose.addEventListener ("click", closePopupImage);

function closePopupImage() {
  imgPopup.classList.remove('popup-open');
};

function addPlace() {
  placeForm.addEventListener('submit', function(evt) {
    evt.preventDefault();
    renderPlace(placeName.value, placeLink.value, list);
    closePopupPlace();
    placeForm.reset()
  })
};

function createInitialCards() {
    initialCards.map(function(el){
    renderPlace(el.name, el.link, list);

  })
};

popupBtn.addEventListener("click", openPopup);

popupClose.addEventListener("click", closePopup);

popupBtnPlace.addEventListener("click",openPupupPhoto);

popupClosePlace.addEventListener("click",closePopupPlace);

popupProfile.addEventListener('submit', submitForm);

addPlace();

createInitialCards();

