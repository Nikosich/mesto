import Popup from "./Popup.js";

export default class PopupVerification extends Popup {
  constructor(popupSelector) {
    super(popupSelector);
    this._form = this._popup.querySelector('.popup-form');
  }

  callback(remove) {
    this._submit = remove;
  }

  setEventListeners() {
    super.setEventListeners();
    this._form.addEventListener('click', (event) => {
      event.preventDefault();
      this._submit();
    });
  }
}
