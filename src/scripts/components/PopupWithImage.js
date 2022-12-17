import Popup from "./Popup.js"

export default class PopupWithImage extends Popup {
  constructor(popupSelector){
    super(popupSelector);
    this._popupPhoto = this._popup.querySelector('.photo-popup__image');
    this._popupName = this._popup.querySelector('.photo-popup__name');
  }

  open(placeName,photoLink) {
    this._popupPhoto.src =  photoLink;
    this._popupPhoto.alt = placeName;
    this._popupName.textContent = placeName;
    super.open();
  }
}
