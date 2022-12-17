export default class Card {
  constructor (data, templateSelector, userId, cardId,ownerId, handle){
    this._templateSelector = templateSelector;
    this._handleCardClick = handle.handleCardClick;
    this._likes = data.likes;
    this._userId = userId;
    this._cardId = cardId;
    this._ownerId = ownerId;
    this._handleLikeClick = handle.handleLikeClick;
    this._handleDeleteClick = handle.handleDeleteClick;
    this._handleRemoveLike  = handle.handleRemoveLike;
    this._name = data.name;
    this._link = data.link;
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
    this._likeBtn = this._element.querySelector('.like-button');
    this._deleteBtn = this._element.querySelector(".delete-button");
    this._likesCount = this._element.querySelector('.like-button__count');
    this._image.alt = this._name;
    this._element.querySelector('.places__name').textContent = this._name;
    this._image.src = this._link;
    this._cardLiked();
    this._hasDeleteButton();
    this._likesCount.textContent = this._likes.length;
    this._setEventListeners();
    return this._element;
  }

  deletePlace() {
    this._element.remove();
    this._element = null;
    }

  _cardLiked() {
    if (this._likes.some((user) => {
      return this._userId === user._id;
    })) {
      this._likeBtn.classList.add('like-buttton_active');
    }
  }

  _hasDeleteButton() {
    if (this._userId !== this._ownerId) {
      this._deleteBtn.remove()
    }
  }

  handleLikeCard(data) {
    this._likes = data.likes;
    this._likesCount.textContent = this._likes.length;
    this._likeBtn.classList.toggle('like-buttton_active');
  }

  _setEventListeners() {
    this._deleteBtn.addEventListener('click', () => {this._handleDeleteClick(this._cardId); });

    this._likeBtn.addEventListener("click", () => {
      if (this._likeBtn.classList.contains('like-buttton_active')){
        this._handleRemoveLike(this._cardId);
      }
      else {this._handleLikeClick(this._cardId)}
    });

    this._image.addEventListener('click', () => {this._handleCardClick(this._name, this._link)});

  }


};





