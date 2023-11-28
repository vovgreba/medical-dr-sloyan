const popup = document.querySelector('.specialist_popup');
const popupServices = document.querySelector('.our-services_popup');
const popupServicesWrapper = document.querySelector('.our-services_popup-inner');
const popupWrapper = document.querySelector('.specialist_popup-inner');
const close = document.querySelectorAll('.close');
const specialistItems = document.querySelectorAll('.specialists_item');
const ourServiceButton = document.querySelectorAll('.our-service_button');
const ourServiceContentTitle = document.querySelector('.our-services_popup-content .mark');

const priceObject = {
  'терапевтическая стоматология': [
    "<span class='name'>Лечение кариеса от</span> <span>5000 руб</span> ",
    "<span class='name'>Лечение пульпита от</span> <span>6500 руб</span> ",
    "<span class='name'>Анестезия</span> <span>800 руб</span> ",
  ],
  'хирургическая стоматология': [
    "<span class='name'>Удаление зуба простое от</span> <span>4000 руб</span>",
    "<span class='name'>Удаление зуба сложное от</span> <span>5700 руб</span>",
    "<span class='name'>Анестезия</span> <span>800 руб</span>",
  ],
  'профессиональная гигиена': [
    "<span class='name'>Профессиональная гигиена полости рта</span> <span>6000 руб</span> ",
  ],
  'детская стоматология': [
    '<span class="name">Лечение кариеса от</span> <span>4500 руб</span>',
    '<span class="name">Лечение пульпита от</span> <span>5500 руб</span>',
    '<span class="name">Удаление зуба от</span> <span>2500 руб</span>',
    '<span class="name">Анестезия</span> <span>800 руб</span>'
  ],
  'ортопедическая стоматология': [
    '<span class="name">Коронка металлокерамическая от</span> <span>10000 руб</span>',
    '<span class="name">Вкладка культевая от</span> <span>7000 руб</span>',
    '<span class="name">Винир керамический от</span> <span>20000 руб</span>',
    '<span class="name">Частичный съемный протез от</span> <span>22500 руб</span>',
    '<span class="name">Полный съемный протез от</span> <span>25500 руб</span>',
    '<span class="name">Коронка на оксиде циркония от</span> <span>20000 руб</span>',
    '<span class="name">Коронка на имплантате керамическая от</span> <span>28500 руб</span>',
    '<span class="name">Коронка на имплантате циркониевая от</span> <span>30000 руб</span>',
    '<span class="name">Установка имплантата от</span> <span>35000 руб</span>'
  ],
};
const priceGenerateMarkup = (array) => {
  array.forEach(el => {
    const createElement = document.createElement("p");
    createElement.innerHTML = el
    ourServiceContentTitle.insertAdjacentElement('beforebegin', createElement)
  })
}

const createHTML = (title) => {
  console.log(title)
  switch (title) {
    case 'терапевтическая стоматология':
      priceGenerateMarkup(priceObject[title])
      break;
    case 'хирургическая стоматология':
      priceGenerateMarkup(priceObject[title])
      break;
    case 'детская стоматология':
      priceGenerateMarkup(priceObject[title])
      break;
    case 'ортопедическая стоматология':
      priceGenerateMarkup(priceObject[title])
      break;
    case 'профессиональная гигиена':
      priceGenerateMarkup(priceObject[title])
      break;
    default:
      console.error('что то не так!!!')
      break;
  }
}
specialistItems.forEach(el => {
  el.addEventListener('click', ev => {
    popup.classList.toggle('specialist_popup--active');
  })
})
ourServiceButton.forEach(el => {
  el.addEventListener('click', ev => {
    const parent = ev.target.parentElement.previousElementSibling;
    const titleName = parent.innerText.toLowerCase();

    createHTML(titleName);

    popupServices.classList.toggle('our-services_popup--active');
  })
})

close.forEach(el => {

  const parentElement = document?.querySelector('.our-services_popup-content');
  el.addEventListener('click', ev => {
    popup.classList.remove('specialist_popup--active')
    popupServices.classList.remove('our-services_popup--active')
    if(parentElement) {
      const elementsToRemove = parentElement.querySelectorAll('p');
      elementsToRemove.forEach(el => el.remove());
    }
  })

})

popup?.addEventListener('click', ev => {
  if(ev.target === popup) {
    console.log(ev.target)
    popup.classList.toggle('specialist_popup--active')
  }
})
popupServices?.addEventListener('click', ev => {
  const parentElement = document?.querySelector('.our-services_popup-content');
  if(ev.target === popupServices && parentElement) {
    popupServices.classList.toggle('our-services_popup--active')
    const elementsToRemove = parentElement.querySelectorAll('p');
    elementsToRemove.forEach(el => el.remove());
  }
})
