'use strict';

var setup = document.querySelector('.setup');
setup.classList.remove('hidden');

var similarListElement = document.querySelector('.setup-similar-list');

var similarWizardTemplate = document.querySelector('#similar-wizard-template')
.content
.querySelector('.setup-similar-item');

var WIZARD_NAMES = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
var WIZARD_LASTNAMES = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
var COAT_COLORS = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
var EYES_COLORS = ['black', 'red', 'blue', 'yellow', 'green'];

var getRandomValue = function (arrayName) {
  var randomValue = Math.floor(Math.random() * arrayName.length);
  return randomValue;
};

var wizards = [];

var createWizardsArray = function (countWizards) {
  for (var i = 0; i < countWizards; i++) {
    wizards[i] = {
      name: WIZARD_NAMES[getRandomValue(WIZARD_NAMES)] + ' ' + WIZARD_LASTNAMES[getRandomValue(WIZARD_LASTNAMES)],
      coatColor: COAT_COLORS[getRandomValue(COAT_COLORS)],
      eyesColor: EYES_COLORS[getRandomValue(EYES_COLORS)]
    }
  }

  return wizards;
};

createWizardsArray(4);

var renderWizard = function (wizard) {
  var wizardElement = similarWizardTemplate.cloneNode(true);
  wizardElement.querySelector('.setup-similar-label').textContent = wizard.name;
  wizardElement.querySelector('.wizard-coat').style.fill = wizard.coatColor;
  wizardElement.querySelector('.wizard-eyes').style.fill = wizard.eyesColor;

  return wizardElement;
};

var putWizardToPage = function () {
  var fragment = document.createDocumentFragment();
  for (var i = 0; i < wizards.length; i++) {
    fragment.appendChild(renderWizard(wizards[i]));
  }
  similarListElement.appendChild(fragment);
};

putWizardToPage();

var setupSimilar = document.querySelector('.setup-similar');
setupSimilar.classList.remove('hidden');
