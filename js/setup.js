'use strict';

var WIZARDS_QUANTITY = 4;

var WIZARD_NAMES = [
  'Иван',
  'Хуан Себастьян',
  'Мария',
  'Кристоф',
  'Виктор',
  'Юлия',
  'Люпита',
  'Вашингтон',
];

var WIZARD_SURNAMES = [
  'да Марья',
  'Верон',
  'Мирабелла',
  'Вальц',
  'Онопко',
  'Топольницкая',
  'Нионго',
  'Ирвинг',
];

var WIZARD_COAT = [
  'rgb(241, 43, 107)',
  'rgb(215, 210, 55)',
  'rgb(101, 137, 164)',
  'rgb(127, 127, 127)',
  'rgb(146, 100, 161)',
  'rgb(56, 159, 117)',
  'rgb(0, 0, 0)',
];

var WIZARD_EYES = [
  'black',
  'red',
  'blue',
  'yellow',
  'green',
  'black',
];

var MIN_NAME_LENGTH = 2;
var MAX_NAME_LENGTH = 25;

var WIZARD_FIREBALL = [
  '#ee4830',
  '#30a8ee',
  '#5ce6c0',
  '#e848d5',
  '#e6e848',
];

var setup = document.querySelector('.setup');
setup.classList.remove('hidden');

document.querySelector('.setup-similar').classList.remove('hidden');

var similarListElement = document.querySelector('.setup-similar-list');
var similarWizardTemplate = document.querySelector('#similar-wizard-template')
  .content
  .querySelector('.setup-similar-item');

var getRandomArrayElement = function (array) {
  return array[Math.floor(Math.random() * array.length)];
};


var generateWizards = function (quantity) {

  var wizards = [];

  for (var i = 0; i < quantity; i++) {

    wizards[i] = {
      name: getRandomArrayElement(WIZARD_NAMES) + ' ' + getRandomArrayElement(WIZARD_SURNAMES),
      coatColor: getRandomArrayElement(WIZARD_COAT),
      eyesColor: getRandomArrayElement(WIZARD_EYES),
    };
  }
  return wizards;
};

var wizards = generateWizards(WIZARDS_QUANTITY);

var renderWizard = function (wizard) {
  var wizardElement = similarWizardTemplate.cloneNode(true);

  wizardElement.querySelector('.setup-similar-label').textContent = wizard.name;
  wizardElement.querySelector('.wizard-coat').style.fill = wizard.coatColor;
  wizardElement.querySelector('.wizard-eyes').style.fill = wizard.eyesColor;

  return wizardElement;
};

var fragment = document.createDocumentFragment();
for (var i = 0; i < wizards.length; i++) {
  fragment.appendChild(renderWizard(wizards[i]));
}
similarListElement.appendChild(fragment);

setup.querySelector('.setup-similar').classList.remove('hidden');

var setupOpen = document.querySelector('.setup-open');
var setupClose = setup.querySelector('.setup-close');
var userName = setup.querySelector('.setup-user-name');

var onPopupEscPress = function (evt) {
  if (evt.key === 'Escape' && userName !== document.activeElement) {
    evt.preventDefault();
    closePopup();
  }
};

var openPopup = function () {
  setup.classList.remove('hidden');

  document.addEventListener('keydown', onPopupEscPress);
};

var closePopup = function () {
  setup.classList.add('hidden');

  document.removeEventListener('keydown', onPopupEscPress);
};

setupOpen.addEventListener('click', function () {
  openPopup();
});

setupOpen.addEventListener('keydown', function (evt) {
  if (evt.key === 'Enter') {
    openPopup();
  }
});

setupClose.addEventListener('click', function () {
  closePopup();
});

setupClose.addEventListener('keydown', function (evt) {
  if (evt.key === 'Enter') {
    closePopup();
  }
});


var userNameInput = document.querySelector('.setup-user-name');

userNameInput.addEventListener('invalid', function () {
  if (userNameInput.validity.valueMissing) {
    userNameInput.setCustomValidity('Обязательное поле');
  } else {
    userNameInput.setCustomValidity('');
  }
});

userNameInput.addEventListener('input', function () {
  var valueLength = userNameInput.value.length;

  if (valueLength < MIN_NAME_LENGTH) {
    userNameInput.setCustomValidity('Ещё ' + (MIN_NAME_LENGTH - valueLength) + ' симв.');
  } else if (valueLength > MAX_NAME_LENGTH) {
    userNameInput.setCustomValidity('Удалите лишние ' + (valueLength - MAX_NAME_LENGTH) + ' симв.');
  } else {
    userNameInput.setCustomValidity('');
  }
});

var coatColor = document.querySelector('.wizard-coat');
var eyesColor = document.querySelector('.wizard-eyes');
var fireballColor = document.querySelector('.setup-fireball-wrap');

var coatColorInput = document.querySelector('.wizard-coat-input');
var eyesColorInput = document.querySelector('.wizard-eyes-input');
var fireballColorInput = document.querySelector('.wizard-fireball-input');

coatColor.addEventListener('click', function () {
  coatColor.style.fill = getRandomArrayElement(WIZARD_COAT);
  coatColorInput.value = coatColor.style.fill;
});

eyesColor.addEventListener('click', function () {
  eyesColor.style.fill = getRandomArrayElement(WIZARD_EYES);
  eyesColorInput.value = eyesColor.style.fill;
});

fireballColor.addEventListener('click', function () {
  fireballColor.style.background = getRandomArrayElement(WIZARD_FIREBALL);
  fireballColorInput.value = fireballColor.style.background;
});
