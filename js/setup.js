'use strict';

var setup = document.querySelector('.setup');
var setupOpenButton = document.querySelector('.setup-open');
var setupCloseButton = setup.querySelector('.setup-close');
var similarListElement = document.querySelector('.setup-similar-list');
var setupSimilar = document.querySelector('.setup-similar');
var similarWizardTemplate = document.querySelector('#similar-wizard-template')
.content
.querySelector('.setup-similar-item');
var userNameInput = document.querySelector('.setup-user-name');
var wizards = [];
var wizardCoat = document.querySelector('.wizard-coat');
var wizardCoatInput = document.querySelector('[name="coat-color"]');
var wizardEyesInput = document.querySelector('[name="eyes-color"]');
var wizardFireballInput = document.querySelector('[name="fireball-color"]');
var wizardEyes = document.querySelector('.wizard-eyes');
var wizardFireball = document.querySelector('.setup-fireball-wrap');

var ESC_KEYCODE = 27;
var ENTER_KEYCODE = 13;
var WIZARD_NAMES = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
var WIZARD_LASTNAMES = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
var COAT_COLORS = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
var EYES_COLORS = ['black', 'red', 'blue', 'yellow', 'green'];
var FIREBALLS_COLORS = ['#ee4830', '#30a8ee', '#5ce6c0', '#e848d5', '#e6e848'];

/**
 * @typedef {{
 * name: string,
 * coatColor: string,
 * eyesColor: string
}} wizard
 */

/**
 * Функция возвращает случайный элемент из массива
 * @param {*[]} arrayName массив, из которого будет выбирать элемент
 * @return {object} randomValue случайный элемент массива
 */
var getRandomValue = function (arrayName) {
  var randomValue = Math.floor(Math.random() * arrayName.length);
  return randomValue;
};

/**
 * Функция вернет массив со сгенерированными волшебниками
 * @param {number} countWizards число необходимых волшебников
 * @return {wizards[]} wizards массив волшебников
 */
var createWizardsArray = function (countWizards) {
  for (var i = 0; i < countWizards; i++) {
    wizards[i] = {
      name: WIZARD_NAMES[getRandomValue(WIZARD_NAMES)] + ' ' + WIZARD_LASTNAMES[getRandomValue(WIZARD_LASTNAMES)],
      coatColor: COAT_COLORS[getRandomValue(COAT_COLORS)],
      eyesColor: EYES_COLORS[getRandomValue(EYES_COLORS)]
    };
  }

  return wizards;
};

/**
 * Функция генерирует DOM элемент на основе шаблона similarWizardTemplate
 * @param {wizard} wizard объект с исходными данными для генерации волшебника
 * @return {Node} сгенерированный DOM элемент
 */
var renderWizard = function (wizard) {
  var wizardElement = similarWizardTemplate.cloneNode(true);
  wizardElement.querySelector('.setup-similar-label').textContent = wizard.name;
  wizardElement.querySelector('.wizard-coat').style.fill = wizard.coatColor;
  wizardElement.querySelector('.wizard-eyes').style.fill = wizard.eyesColor;

  return wizardElement;
};

/**
 * Функция переносит сгенерированные DOM элементы на страницу index.html и вставляет в контейнер setup-similar-list
 */
var putWizardsToPage = function () {
  var fragment = document.createDocumentFragment();
  for (var i = 0; i < wizards.length; i++) {
    fragment.appendChild(renderWizard(wizards[i]));
  }
  similarListElement.appendChild(fragment);
};

/**
 * Функция показывает попап setup
 */
var popupOpenHandler = function () {
  setup.classList.remove('hidden');

  document.addEventListener('keydown', function (evt) {
    if (evt.keyCode === ESC_KEYCODE) {
      setup.classList.add('hidden');
    }
  });
};

/**
 * Функция скрывает попап setup
 */
var popupCloseHandler = function () {
  setup.classList.add('hidden');
};

createWizardsArray(4);

putWizardsToPage();

/**
 * обработчики описываются в jsdoc?
 */
setupOpenButton.addEventListener('click', function () {
  popupOpenHandler();
});

setupCloseButton.addEventListener('click', function () {
  popupCloseHandler();
});

setupOpenButton.addEventListener('keydown', function (evt) {
  if (evt.keyCode === ENTER_KEYCODE) {
    popupOpenHandler();
  }
});

setupCloseButton.addEventListener('keydown', function (evt) {
  if (evt.keyCode === ENTER_KEYCODE) {
    popupCloseHandler();
  }
});

/**
 * Обработчик стилизует подсказки пользователю при невалидном значении userNameInput
 */
userNameInput.addEventListener('invalid', function () {
  if (userNameInput.validity.tooShort) {
    userNameInput.setCustomValidity('У нас имя волшебника состоит как минимум из 2 букв!');
  } else if (userNameInput.validity.tooLong) {
    userNameInput.setCustomValidity('В форме есть место всего под 25 символов, давай короче.');
  } else if (userNameInput.validity.valueMissing) {
    userNameInput.setCustomValidity('Нужно дать волшебнику имя!');
  } else {
    userNameInput.setCustomValidity('');
  }
});

setupSimilar.classList.remove('hidden');

// var wizardElementClickHandler = function (wizardElement, elementColorsArr, elementProperty, elementInput) {
//   wizardElement.addEventListener('click', function () {
//     elementProperty = elementColorsArr[getRandomValue(elementColorsArr)];
//     elementInput.value = elementProperty;
//   });
// };
//
// wizardElementClickHandler(wizardCoat, COAT_COLORS, wizardCoat.style.fill, wizardCoatInput);
// wizardElementClickHandler(wizardEyes, EYES_COLORS, wizardEyes.style.fill, wizardEyesInput);
// wizardElementClickHandler(wizardFireball, FIREBALLS_COLORS, wizardFireball.style.background, wizardFireballInput);

// почему не работает такая запись? Можно вообще это как то описать одной функцией для всех трех случаев?

/**
 * Нужно описать что делает обработчик в комментарии?
 */
wizardCoat.addEventListener('click', function () {
  wizardCoat.style.fill = COAT_COLORS[getRandomValue(COAT_COLORS)];
  wizardCoatInput.value = wizardCoat.style.fill;
});

wizardEyes.addEventListener('click', function () {
  wizardEyes.style.fill = EYES_COLORS[getRandomValue(EYES_COLORS)];
  wizardEyesInput.value = wizardEyes.style.fill;
});

console.log(FIREBALLS_COLORS[getRandomValue(FIREBALLS_COLORS)]); // тут показывает правильный формат цвета #******

wizardFireball.addEventListener('click', function () {
  wizardFireball.style.background = FIREBALLS_COLORS[getRandomValue(FIREBALLS_COLORS)];
  console.log(wizardFireball.style.background); // а вот тут уже rgb?
  wizardFireballInput.value = wizardFireball.style.background;
  console.log(wizardFireballInput.value); // сервер не принимает rgb, как сделать так, чтобы отправлялось #******?
});

