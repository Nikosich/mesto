import Popup from "./Popup.js";

export default class PopupVerification extends Popup {
  constructor(popupSelector, {callback}) {
    super(popupSelector);
    this._submitButton = this._popup.querySelector('.popup-form');
    this._callback = callback;
  }
  open(card, cardId) {
    this._card = card;
    this._сardid = cardId;
    super.open();
  }
  setEventListeners() {
    this._submitButton.addEventListener('submit', (evt) => { evt.preventDefault(); this._callback(this._card, this._cardId) })
    super.setEventListeners();
  }
}
