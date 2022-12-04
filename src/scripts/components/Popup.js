export default class Popup {

  constructor(popupSelector) {
    this._popup = document.querySelector(popupSelector);
    this._closeBtn = this._popup.querySelector('.popup__close-button')
  };

  open() {
    this._popup.classList.add('popup_open');
    document.addEventListener('keydown', this._handleEscClose)
  }

  close() {
    this._popup.classList.remove('popup_open');
    document.removeEventListener('keydown', this._handleEscClose);
  }

  _handleEscClose = (evt) => {
    if (evt.key === "Escape") {
      this.close();
    }
  }

  setEventListeners() {
    this._closeBtn.addEventListener('click', () => {this.close();})
    this._popup.addEventListener('mousedown', (evt) => {
      if (evt.target.classList.contains('popup_open')) {
        this.close();
      }
    });
  }
}
