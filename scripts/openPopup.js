export function openPopup(popup) {
  popup.classList.add("popup_open");
  document.addEventListener("keydown", closePopupEsc);
  popup.addEventListener("mousedown", closePopupOverlay);
}
