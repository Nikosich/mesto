
import {openPopup} from './openPopup.js';
import {photoPopup} from './index.js';
import {imgPopup} from './index.js';
import {photoPopupName} from './index.js';

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
    this._image = this._element.querySelector('.places__image');
    this._setEventListeners();
    this._image.src = this._link;
    this._image.alt = this._name;
    this._element.querySelector('.places__name').textContent = this._name;
    return this._element;
  }

  _deletePlace() {
    this._element.remove();
    this._element = null;
  }

  _like() {
    this._element.querySelector('.like-button').classList.toggle("like-buttton_active");
  }

  _openPopupImage() {
    photoPopup.src =  this._link;
    photoPopup.alt = this._name;
    photoPopupName.textContent = this._name;
    openPopup(imgPopup);
  }

  _setEventListeners() {
    this._element.querySelector(".delete-button").addEventListener('click', () => {this._deletePlace() });

    this._element.querySelector('.like-button').addEventListener("click", () => {this._like()});

    this._image.addEventListener('click', () => { this._openPopupImage()});


  }

};





