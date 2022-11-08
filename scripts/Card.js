
import {openPopup} from './index.js';
import {closePopup} from './index.js';

const imgPopup = document.querySelector(".photo-popup");
const photoPopup = document.querySelector(".photo-popup__image");
const photoPopupName = document.querySelector(".photo-popup__name");
const photoPopupClose = document.querySelector(".photo-popup__close");

export class Card {
  constructor (name, link, templateSelector){
    this._name = name;
    this._link = link;
    this._templateSelector = templateSelector;
  }

  _getTemplate() {
    const placeElement = document
    .querySelector(this._templateSelector)
    .content
    .querySelector('.places__item')
    .cloneNode(true);
    return placeElement
  }
  generateCard() {
    this._element = this._getTemplate();
    this._setEventListeners();
    this._element.querySelector('.places__image').src = this._link;
    this._element.querySelector('.places__image').alt = this._name;
    this._element.querySelector('.places__name').textContent = this._name;
    return this._element;
  }

  _deletePlace() {
    this._element.remove();
  }

  _like() {
    this._element.querySelector('.like-button').classList.toggle("like-buttton_active");
  }

  _openPopupImage() {
    openPopup(imgPopup);
    photoPopup.src = this._element.querySelector('.places__image').src;
    photoPopup.alt = this._element.querySelector('.places__name').textContent;
    photoPopupName.textContent = this._element.querySelector('.places__name').textContent;
  }

  _setEventListeners() {
    this._element.querySelector(".delete-button").addEventListener('click', () => {this._deletePlace() });

    this._element.querySelector('.like-button').addEventListener("click", () => {this._like()});

    this._element.querySelector('.places__image').addEventListener('click', () => { this._openPopupImage()});

    photoPopupClose.addEventListener('click', () => { closePopup(imgPopup) });
  }

};





