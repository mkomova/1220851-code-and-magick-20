'use strict';

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
  ' да Марья',
  ' Верон',
  ' Мирабелла',
  ' Вальц',
  ' Онопко',
  ' Топольницкая',
  ' Нионго',
  ' Ирвинг',
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

var setup = document.querySelector('.setup');
setup.classList.remove('hidden');

document.querySelector('.setup-similar').classList.remove('hidden');

var similarListElement = document.querySelector('.setup-similar-list');
var similarWizardTemplate = document.querySelector('#similar-wizard-template')
  .content
  .querySelector('.setup-similar-item');

var wizards = [
  {
    name: WIZARD_NAMES[i] + WIZARD_SURNAMES[i],
    coatColor: WIZARD_COAT[i],
    eyesColor: WIZARD_EYES[i],
  },
  {
    name: WIZARD_NAMES[i] + WIZARD_SURNAMES[i],
    coatColor: WIZARD_COAT[i],
    eyesColor: WIZARD_EYES[i],
  },
  {
    name: WIZARD_NAMES[i] + WIZARD_SURNAMES[i],
    coatColor: WIZARD_COAT[i],
    eyesColor: WIZARD_EYES[i],
  },
  {
    name: WIZARD_NAMES[i] + WIZARD_SURNAMES[i],
    coatColor: WIZARD_COAT[i],
    eyesColor: WIZARD_EYES[i],
  },
];

var generateWizards = function (quantity) {
  for (var i = 0; i < quantity; i++) {

    wizards[i] = {
      name: WIZARD_NAMES[Math.floor(Math.random() * WIZARD_NAMES.length)] + WIZARD_SURNAMES[Math.floor(Math.random() * WIZARD_SURNAMES.length)],
      coatColor: WIZARD_COAT[Math.floor(Math.random() * WIZARD_COAT.length)],
      eyesColor: WIZARD_EYES[Math.floor(Math.random() * WIZARD_EYES.length)]
    };
  }
  return wizards;
};

generateWizards(4);

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
