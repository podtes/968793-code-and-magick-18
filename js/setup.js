'use strict';

var setup = document.querySelector('.setup');
setup.classList.remove('hidden');

var similarListElement = document.querySelector('.setup-similar-list');

var similarWizardTemplate = document.querySelector('#similar-wizard-template')
.content
.querySelector('.setup-similar-item');

var WIZARD_NAMES = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
var WIZARD_LASTNAMES = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
var COAT_COLOR = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
var EYES_COLOR = ['black', 'red', 'blue', 'yellow', 'green'];

var getRandomValue = function (arrayName) {
  var randomValue = Math.floor(Math.random() * arrayName.length);
  return randomValue;
};

var wizards = [
  {
    name: WIZARD_NAMES[getRandomValue(WIZARD_NAMES)] + ' ' + WIZARD_LASTNAMES[getRandomValue(WIZARD_LASTNAMES)],
    coatColor: COAT_COLOR[getRandomValue(COAT_COLOR)],
    eyesColor: EYES_COLOR[getRandomValue(EYES_COLOR)]
  },
  {
    name: WIZARD_NAMES[getRandomValue(WIZARD_NAMES)] + ' ' + WIZARD_LASTNAMES[getRandomValue(WIZARD_LASTNAMES)],
    coatColor: COAT_COLOR[getRandomValue(COAT_COLOR)],
    eyesColor: EYES_COLOR[getRandomValue(EYES_COLOR)]
  },
  {
    name: WIZARD_NAMES[getRandomValue(WIZARD_NAMES)] + ' ' + WIZARD_LASTNAMES[getRandomValue(WIZARD_LASTNAMES)],
    coatColor: COAT_COLOR[getRandomValue(COAT_COLOR)],
    eyesColor: EYES_COLOR[getRandomValue(EYES_COLOR)]
  },
  {
    name: WIZARD_NAMES[getRandomValue(WIZARD_NAMES)] + ' ' + WIZARD_LASTNAMES[getRandomValue(WIZARD_LASTNAMES)],
    coatColor: COAT_COLOR[getRandomValue(COAT_COLOR)],
    eyesColor: EYES_COLOR[getRandomValue(EYES_COLOR)]
  }
];

var renderWizard = function (wizard) {
  var wizardElement = similarWizardTemplate.cloneNode(true);
  wizardElement.querySelector('.setup-similar-label').textContent = wizard.name;
  wizardElement.querySelector('.wizard-coat').style.fill = wizard.coatColor;
  wizardElement.querySelector('.wizard-eyes').style.fill = wizard.eyesColor;

  return wizardElement;
};

var fragment = document.createDocumentFragment();

// не понимаю смысла использования fragment

var getWizardToIndex = function () {
  for (var i = 0; i < wizards.length; i++) {
    fragment.appendChild(renderWizard(wizards[i]));
  }
};

getWizardToIndex();

similarListElement.appendChild(fragment);

var setupSimilar = document.querySelector('.setup-similar');
setupSimilar.classList.remove('hidden');
