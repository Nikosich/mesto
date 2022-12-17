import Popup from "./Popup.js";

export default class PopupWithForm extends Popup {
  constructor(popupSelector,{handleFormSubmit}) {
    super(popupSelector);
    this._handleFormSubmit = handleFormSubmit;
    this._popupForm = this._popup.querySelector('.popup-form');
    this._inputList = Array.from(this._popupForm.querySelectorAll('.popup-form__input'));
    this._submitButton = this._popup.querySelector('.popup-form__save-button');
    this._submitButtonTxt = this._submitButton.textContent;
  }

  _getInputValues() {
    this._formValues = {};
    this._inputList.forEach(input => {
      this._formValues[input.name] = input.value;
    });

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

  loading(loading) {
    if(loading) {
      this._submitButton.textContent = 'Сохранение..'
    } else {
      this._submitButton.textContent =  this._submitButtonTxt
    }
  }
}
