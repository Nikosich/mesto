import Popup from "./Popup.js";

export default class PopupWithForm extends Popup {
  constructor(popupSelector,{handleFormSubmit}) {
    super(popupSelector);
    this._handleFormSubmit = handleFormSubmit;
    this._popupForm = this._popup.querySelector('.popup-form');
    this._inputList = this._popupForm.querySelectorAll('.popup-form__input');
  }

  _getInputValues() {
    const formValues = {};
    this._inputList.forEach(input => {
      formValues[input.name] = input.value;
    })
  return this._formValues;
  }

  setEventListeners() {
    super.setEventListeners();
    this._popupForm.addEventListener('submit', (event) => {
    event.preventDefault();
    this._handleFormSubmit(this._getInputValues());
    })
  }
  close(){
    super.close();
    this._popupForm.reset();
  }
}
