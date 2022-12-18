class Api {
  constructor({baseUrl, headers}){
    this._headers = headers;
    this._baseUrl = baseUrl;
  }


  _checkResponse(res) {
    if (res.ok){
      return res.json()
    }
    return Promise.reject(`Error: ${res.status}`)
  }

  getInitialCards() {
    return fetch(`${this._baseUrl}/cards`, {
    headers: this._headers
    })
      .then(res => this._checkResponse(res));
  }

  addCard(data) {
    return fetch(`${this._baseUrl}/cards`,{
      method: 'POST',
      headers:this._headers,
      body: JSON.stringify({
        name: data.place,
        link: data.placeLink
      })
    })
    .then (res => this._checkResponse(res))
  }

  like(cardId) {
    return fetch(`${this._baseUrl}/cards/${cardId}/likes`,{
    method: 'PUT',
    headers: this._headers}
    )
    .then(res => this._checkResponse(res))
  }

  removeLike(cardId) { return fetch(`${this._baseUrl}/cards/${cardId}/likes`,{
    method: 'DELETE',
    headers: this._headers
  })
  .then(res => this._checkResponse(res))
  }

  deleteCard(cardId) {
    return fetch(`${this._baseUrl}/cards/${cardId}`, {
      headers: this._headers,
      method: 'DELETE'
    })
    .then(res => this._checkResponse(res))
  }

  getProfile(){
    return fetch(`${this._baseUrl}/users/me`, {
      headers: this._headers
    })
      .then(res => this._checkResponse(res));
  }

  editProfile(data) {
    return fetch(`${this._baseUrl}/users/me`,{
      method: 'PATCH',
      headers: this._headers,
      body: JSON.stringify({
        name: data.name,
        about: data.job
      })
    })
    .then(res => this._checkResponse(res))
  }

  changeAvatar(data) {
    return fetch(`${this._baseUrl}/users/me/avatar`,{
      method: 'PATCH',
      headers: this._headers,
      body: JSON.stringify({
        avatar: data.avatar
      })
    })
    .then(res => this._checkResponse(res))
  }
}

export const api = new Api({
  baseUrl:'https://mesto.nomoreparties.co/v1/cohort-54',
  headers: {
    authorization: '6834ec0b-ea76-4e97-a1ec-80a039bf651a',
    'Content-Type': 'application/json'
  }
})












