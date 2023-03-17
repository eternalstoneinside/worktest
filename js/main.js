
var input = document.querySelector("#phone");
var iti = window.intlTelInput(input, {
   preferredCountries: ["ua", "it", "fr"], // список предпочитаемых стран
   separateDialCode: true // отображать код страны в отдельном поле
});

// Получаем выбранный номер страны и код страны
var countryCode = iti.getSelectedCountryData().iso2;
var dialCode = iti.getSelectedCountryData().dialCode;

// Добавляем код страны к номеру телефона при отправке формы
var form = document.querySelector("form");
form.addEventListener("submit", function (event) {
   var phoneNumber = dialCode + input.value;
   // отправка формы
});


const button = document.querySelector('.problems__btn')
const page = document.querySelector('.page__decision')

button.addEventListener('click', () => {
   page.style.maxHeight = '100%'
   page.style.overflow = 'visible'
   page.style.opacity = '1'

})
