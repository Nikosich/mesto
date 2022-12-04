import Popup from "./Popup.js"

export default class PopupWithImage extends Popup {
  constructor(popupSelector){
    super(popupSelector);
    this._popupPhoto = document.querySelector('.photo-popup__image');
    this._popupName = document.querySelector('.photo-popup__name');
  }

  open(placeName,Photolink) {
    this._popupPhoto.src =  Photolink;
    this._popupPhoto.alt = placeName;
    this._popupName.textContent = placeName;
    super.open();
  }
}
