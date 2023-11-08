const popup = document.querySelector('.specialist_popup');
const popupWrapper = document.querySelector('.specialist_popup-inner');
const close = document.querySelector('.close');
const specialistItems = document.querySelectorAll('.specialists_item');


specialistItems.forEach(el => {
  el.addEventListener('click', ev => {
    popup.classList.toggle('specialist_popup--active')
  })
})

close.addEventListener('click', ev => {
  popup.classList.toggle('specialist_popup--active')
})
popup.addEventListener('click', ev => {
  if(ev.target === popup) {
    console.log(ev.target)
    popup.classList.toggle('specialist_popup--active')
  }
})
