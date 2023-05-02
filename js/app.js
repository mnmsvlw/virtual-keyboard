import keys from './keys.js';

let textareaText = '';
let textareaElem;
let currentLocale;
let currentCase = 'lower';
let caps = false;
let selection;
const ignoredKeys = ['Backspace', 'Tab', 'Delete', 'CapsLock', 'Enter', 'ShiftLeft', 'ShiftRight', 'ControlLeft', 'ControlRight', 'AltLeft', 'AltRight', 'ArrowUp', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'MetaLeft'];

function getLocalStorage() {
  if (!localStorage.getItem('keyboardLang')) {
    localStorage.setItem('keyboardLang', 'eng');
  }
  currentLocale = localStorage.getItem('keyboardLang');
}

function setLocalStorage() {
  localStorage.setItem('keyboardLang', currentLocale);
}

function createCustomElement(elem, customClassList, attributes = false) {
  const element = document.createElement(elem);

  element.classList = customClassList;

  if (attributes) {
    Object.keys(attributes).forEach((key) => {
      element.setAttribute(key, attributes[key]);
    });
  }

  return element;
}

function setLocaleAndCase() {
  const keyboard = document.querySelector('.keyboard');
  if (!caps) {
    keyboard.classList = `keyboard ${currentLocale.slice(0, 2)} ${currentCase.slice(0, 3)}`;
  } else {
    keyboard.classList = `keyboard ${currentLocale.slice(0, 2)} ${currentCase.slice(0, 3)} caps`;
  }

  setLocalStorage();
}

function updateTextarea(code) {
  let char = keys.find((item) => code === item.eventCode);
  const index = textareaElem.selectionStart;
  const endIndex = textareaElem.selectionEnd;

  if (currentCase === 'lower' && caps) {
    char = char[currentLocale].caps;
  } else if (currentCase === 'upper' && caps) {
    char = char[currentLocale].shiftCaps;
  } else {
    char = char[currentLocale][currentCase];
  }

  if (index === endIndex) {
    const firstSubString = textareaText.substring(0, index);
    const secondSubString = textareaText.substring(index, textareaText.length);
    textareaText = firstSubString + char + secondSubString;
  } else {
    const firstSubString = textareaText.substring(0, index);
    const secondSubString = textareaText.substring(endIndex, textareaText.length);
    textareaText = firstSubString + char + secondSubString;
  }
  textareaElem.value = textareaText;
  textareaElem.selectionStart = index;
  textareaElem.selectionEnd = endIndex;
}

function pressButton(event) {
  const button = document.querySelector(`.${event.code}`);
  button.classList.add('keyboard__button_active');
  if (ignoredKeys.includes(event.code)) {
    if ((event.key === 'Alt' && event.ctrlKey) || (event.key === 'Control' && event.altKey)) {
      currentLocale = currentLocale === 'eng' ? 'rus' : 'eng';
      setLocaleAndCase();
    }
    if (event.key === 'Shift' && !event.repeat) {
      currentCase = currentCase === 'lower' ? 'upper' : 'lower';
      setLocaleAndCase();
    }
    if (event.key === 'CapsLock' && !event.repeat) {
      caps = !caps;
      setLocaleAndCase();
    }

    if (event.key === 'Backspace') {
      if (textareaElem.selectionStart === textareaElem.selectionEnd) {
        const firstSub = textareaText.substring(0, textareaElem.selectionStart - 1);
        const secondSub = textareaText.substring(textareaElem.selectionStart, textareaText.length);
        textareaText = firstSub + secondSub;
      } else {
        const firstSub = textareaText.substring(0, textareaElem.selectionStart);
        const secondSub = textareaText.substring(textareaElem.selectionEnd, textareaText.length);
        textareaText = firstSub + secondSub;
      }
    }

    if (event.key === 'Delete') {
      if (textareaElem.selectionStart === textareaElem.selectionEnd) {
        const first = textareaText.substring(0, textareaElem.selectionStart);
        const second = textareaText.substring(textareaElem.selectionStart + 1, textareaText.length);
        textareaText = first + second;
      } else {
        const first = textareaText.substring(0, textareaElem.selectionStart);
        const second = textareaText.substring(textareaElem.selectionEnd, textareaText.length);
        textareaText = first + second;
      }
    }

    if (event.key === 'Enter') {
      const first = textareaText.substring(0, textareaElem.selectionStart);
      const second = textareaText.substring(textareaElem.selectionEnd, textareaText.length);
      textareaText = `${first}\n${second}`;
    }

    if (event.key === 'Tab') {
      event.preventDefault();
      const first = textareaText.substring(0, textareaElem.selectionStart);
      const second = textareaText.substring(textareaElem.selectionEnd, textareaText.length);
      textareaText = `${first}    ${second}`;
      textareaElem.value = textareaText;
    }

    if (event.key.startsWith('Arrow')) {
      event.preventDefault();
      updateTextarea(event.code);
      textareaElem.selectionStart += 1;
    }
  } else {
    updateTextarea(event.code);
  }
}

function clickButton(code) {
  const button = document.querySelector(`.${code}`);
  button.classList.add('keyboard__button_active');
  if (ignoredKeys.includes(code)) {
    if (code.startsWith('Shift')) {
      currentCase = currentCase === 'lower' ? 'upper' : 'lower';
      setLocaleAndCase();
    }
    if (code === 'CapsLock') {
      caps = !caps;
      setLocaleAndCase();
    }

    if (code === 'Backspace') {
      if (textareaElem.selectionStart === textareaElem.selectionEnd) {
        const first = textareaText.substring(0, textareaElem.selectionStart - 1);
        const second = textareaText.substring(textareaElem.selectionStart, textareaText.length);
        textareaText = first + second;
      } else {
        const first = textareaText.substring(0, textareaElem.selectionStart);
        const second = textareaText.substring(textareaElem.selectionEnd, textareaText.length);
        textareaText = first + second;
      }
    }

    if (code === 'Delete') {
      if (textareaElem.selectionStart === textareaElem.selectionEnd) {
        const first = textareaText.substring(0, textareaElem.selectionStart);
        const second = textareaText.substring(textareaElem.selectionStart + 1, textareaText.length);
        textareaText = first + second;
      } else {
        const first = textareaText.substring(0, textareaElem.selectionStart);
        const second = textareaText.substring(textareaElem.selectionEnd, textareaText.length);
        textareaText = first + second;
      }
    }

    if (code === 'Enter') {
      const first = textareaText.substring(0, textareaElem.selectionStart);
      const second = textareaText.substring(textareaElem.selectionEnd, textareaText.length);
      textareaText = `${first}\n${second}`;
    }

    if (code === 'Tab') {
      const first = textareaText.substring(0, textareaElem.selectionStart);
      const second = textareaText.substring(textareaElem.selectionEnd, textareaText.length);
      textareaText = `${first}    ${second}`;
      textareaElem.value = textareaText;
    }

    if (code.startsWith('Arrow')) {
      updateTextarea(code);
    }
  } else {
    updateTextarea(code);
  }
}

function createKeyboardButtons(keyboardElem) {
  keys.forEach((key) => {
    const keyButton = createCustomElement('div', `keyboard__button ${key.eventCode}`);
    const engCase = createCustomElement('div', 'eng');
    const engLower = createCustomElement('div', 'lower');
    engLower.textContent = key.eng.lower;
    engCase.appendChild(engLower);
    const engUpper = createCustomElement('div', 'upper');
    engUpper.textContent = key.eng.upper;
    engCase.appendChild(engUpper);
    const engCaps = createCustomElement('div', 'capsed');
    engCaps.textContent = key.eng.caps;
    engCase.appendChild(engCaps);
    const engShiftCaps = createCustomElement('div', 'shiftcapsed');
    engShiftCaps.textContent = key.eng.shiftCaps;
    engCase.appendChild(engShiftCaps);
    keyButton.appendChild(engCase);
    const rusCase = createCustomElement('div', 'rus');
    const rusLower = createCustomElement('div', 'lower');
    rusLower.textContent = key.rus.lower;
    rusCase.appendChild(rusLower);
    const rusUpper = createCustomElement('div', 'upper');
    rusUpper.textContent = key.rus.upper;
    rusCase.appendChild(rusUpper);
    const rusCaps = createCustomElement('div', 'capsed');
    rusCaps.textContent = key.rus.caps;
    rusCase.appendChild(rusCaps);
    const rusShiftCaps = createCustomElement('div', 'shiftcapsed');
    rusShiftCaps.textContent = key.rus.shiftCaps;
    rusCase.appendChild(rusShiftCaps);
    keyButton.appendChild(rusCase);

    keyboardElem.appendChild(keyButton);
    keyButton.addEventListener('mousedown', (event) => {
      const code = event.target.closest('.keyboard__button').classList[1];
      if (code === 'Tab') {
        selection = textareaElem.selectionStart + 4;
      } else if (code !== 'Delete' && !code.startsWith('Alt') && !code.startsWith('Control') && code !== 'Backspace' && !code.startsWith('Shift') && code !== 'CapsLock' && !code.startsWith('Meta')) {
        selection = textareaElem.selectionStart + 1;
      } else if (code === 'Backspace') {
        selection = textareaElem.selectionStart - 1;
      } else {
        selection = textareaElem.selectionStart;
      }
      clickButton(code);
      textareaElem.value = textareaText;
    });
  });
}

function createTextareaWindow(textareaWrapper) {
  const textareaHeader = createCustomElement('div', 'textarea-header');
  const textareaTitle = createCustomElement('div', 'textarea-header__title');
  textareaTitle.textContent = 'virtual-keyboard.txt - Windows 11';
  textareaHeader.appendChild(textareaTitle);
  const collapseIcon = createCustomElement('div', 'textarea-header__collapse');
  textareaHeader.appendChild(collapseIcon);
  const resizeIcon = createCustomElement('div', 'textarea-header__resize');
  textareaHeader.appendChild(resizeIcon);
  const closeIcon = createCustomElement('div', 'textarea-header__close');
  textareaHeader.appendChild(closeIcon);

  const textarea = createCustomElement('textarea', 'textarea', {
    rows: '10', cols: '85', placeholder: 'Нажмите Ctrl + Alt для смены языка...',
  });

  textareaWrapper.appendChild(textareaHeader);
  textareaWrapper.appendChild(textarea);
}

function addListeners() {
  document.addEventListener('keydown', (event) => {
    const char = keys.find((item) => event.code === item.eventCode);
    if (char) {
      pressButton(event);
    }
  });

  document.addEventListener('keyup', (event) => {
    const button = document.querySelector(`.${event.code}`);
    if (button) {
      button.classList.remove('keyboard__button_active');
    }

    if (event.key === 'Shift' && !event.repeat) {
      currentCase = currentCase === 'lower' ? 'upper' : 'lower';
      setLocaleAndCase();
    }
  });

  textareaElem = document.querySelector('.textarea');
  textareaElem.tabIndex = -1;
  textareaElem.addEventListener('input', (event) => {
    const index = textareaElem.selectionStart;
    const textField = event.target;
    textField.value = textareaText;
    textareaElem.selectionStart = index;
    textareaElem.selectionEnd = index;
  });
}

function init() {
  const container = createCustomElement('div', 'container');
  const textareaWrapper = createCustomElement('div', 'textarea-wrapper');
  createTextareaWindow(textareaWrapper);
  const keyboard = createCustomElement('div', `keyboard ${currentLocale.slice(0, 2)} low`);
  createKeyboardButtons(keyboard);

  document.body.addEventListener('mouseup', () => {
    textareaElem.focus();
    textareaElem.selectionStart = selection;
    textareaElem.selectionEnd = selection;
    const button = document.querySelector('.keyboard__button_active');
    if (button) {
      button.classList.remove('keyboard__button_active');
      const code = button.classList[1];
      if (code.startsWith('Shift')) {
        currentCase = currentCase === 'lower' ? 'upper' : 'lower';
        setLocaleAndCase();
      }
    }
  });

  container.appendChild(textareaWrapper);
  container.appendChild(keyboard);

  document.body.appendChild(container);
  addListeners();
}

getLocalStorage();
init();
