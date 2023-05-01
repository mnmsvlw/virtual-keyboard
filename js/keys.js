const keys = [
  {
    eventCode: 'Backquote',
    eng: {
      lower: '`', upper: '~', caps: '`', shiftCaps: '~',
    },
    rus: {
      lower: 'ё', upper: 'Ё', caps: 'Ё', shiftCaps: 'ё',
    },
  },
  {
    eventCode: 'Digit1',
    eng: {
      lower: '1', upper: '!', caps: '1', shiftCaps: '!',
    },
    rus: {
      lower: '1', upper: '!', caps: '1', shiftCaps: '!',
    },
  },
  {
    eventCode: 'Digit2',
    eng: {
      lower: '2', upper: '@', caps: '2', shiftCaps: '@',
    },
    rus: {
      lower: '2', upper: '"', caps: '2', shiftCaps: '"',
    },
  },
  {
    eventCode: 'Digit3',
    eng: {
      lower: '3', upper: '#', caps: '3', shiftCaps: '#',
    },
    rus: {
      lower: '3', upper: '№', caps: '3', shiftCaps: '№',
    },
  },
  {
    eventCode: 'Digit4',
    eng: {
      lower: '4', upper: '$', caps: '4', shiftCaps: '$',
    },
    rus: {
      lower: '4', upper: ';', caps: '4', shiftCaps: ';',
    },
  },
  {
    eventCode: 'Digit5',
    eng: {
      lower: '5', upper: '%', caps: '5', shiftCaps: '%',
    },
    rus: {
      lower: '5', upper: '%', caps: '5', shiftCaps: '%',
    },
  },
  {
    eventCode: 'Digit6',
    eng: {
      lower: '6', upper: '^', caps: '6', shiftCaps: '^',
    },
    rus: {
      lower: '6', upper: ':', caps: '6', shiftCaps: ':',
    },
  },
  {
    eventCode: 'Digit7',
    eng: {
      lower: '7', upper: '&', caps: '7', shiftCaps: '&',
    },
    rus: {
      lower: '7', upper: '?', caps: '7', shiftCaps: '?',
    },
  },
  {
    eventCode: 'Digit8',
    eng: {
      lower: '8', upper: '*', caps: '8', shiftCaps: '*',
    },
    rus: {
      lower: '8', upper: '*', caps: '8', shiftCaps: '*',
    },
  },
  {
    eventCode: 'Digit9',
    eng: {
      lower: '9', upper: '(', caps: '9', shiftCaps: '(',
    },
    rus: {
      lower: '9', upper: '(', caps: '9', shiftCaps: '(',
    },
  },
  {
    eventCode: 'Digit0',
    eng: {
      lower: '0', upper: ')', caps: '0', shiftCaps: ')',
    },
    rus: {
      lower: '0', upper: ')', caps: '0', shiftCaps: ')',
    },
  },
  {
    eventCode: 'Minus',
    eng: {
      lower: '-', upper: '_', caps: '-', shiftCaps: '_',
    },
    rus: {
      lower: '-', upper: '_', caps: '-', shiftCaps: '_',
    },
  },
  {
    eventCode: 'Equal',
    eng: {
      lower: '=', upper: '+', caps: '=', shiftCaps: '+',
    },
    rus: {
      lower: '=', upper: '+', caps: '=', shiftCaps: '+',
    },
  },
  {
    eventCode: 'Backspace',
    eng: {
      lower: 'Backspace', upper: 'Backspace', caps: 'Backspace', shiftCaps: 'Backspace',
    },
    rus: {
      lower: 'Backspace', upper: 'Backspace', caps: 'Backspace', shiftCaps: 'Backspace',
    },
  },
  {
    eventCode: 'Tab',
    eng: {
      lower: 'Tab', upper: 'Tab', caps: 'Tab', shiftCaps: 'Tab',
    },
    rus: {
      lower: 'Tab', upper: 'Tab', caps: 'Tab', shiftCaps: 'Tab',
    },
  },
  {
    eventCode: 'KeyQ',
    eng: {
      lower: 'q', upper: 'Q', caps: 'Q', shiftCaps: 'q',
    },
    rus: {
      lower: 'й', upper: 'Й', caps: 'Й', shiftCaps: 'й',
    },
  },
  {
    eventCode: 'KeyW',
    eng: {
      lower: 'w', upper: 'W', caps: 'W', shiftCaps: 'w',
    },
    rus: {
      lower: 'ц', upper: 'Ц', caps: 'Ц', shiftCaps: 'ц',
    },
  },
  {
    eventCode: 'KeyE',
    eng: {
      lower: 'e', upper: 'E', caps: 'E', shiftCaps: 'e',
    },
    rus: {
      lower: 'у', upper: 'У', caps: 'У', shiftCaps: 'у',
    },
  },
  {
    eventCode: 'KeyR',
    eng: {
      lower: 'r', upper: 'R', caps: 'R', shiftCaps: 'r',
    },
    rus: {
      lower: 'к', upper: 'К', caps: 'К', shiftCaps: 'к',
    },
  },
  {
    eventCode: 'KeyT',
    eng: {
      lower: 't', upper: 'T', caps: 'T', shiftCaps: 't',
    },
    rus: {
      lower: 'е', upper: 'Е', caps: 'Е', shiftCaps: 'е',
    },
  },
  {
    eventCode: 'KeyY',
    eng: {
      lower: 'y', upper: 'Y', caps: 'Y', shiftCaps: 'y',
    },
    rus: {
      lower: 'н', upper: 'Н', caps: 'Н', shiftCaps: 'н',
    },
  },
  {
    eventCode: 'KeyU',
    eng: {
      lower: 'u', upper: 'U', caps: 'U', shiftCaps: 'u',
    },
    rus: {
      lower: 'г', upper: 'Г', caps: 'Г', shiftCaps: 'г',
    },
  },
  {
    eventCode: 'KeyI',
    eng: {
      lower: 'i', upper: 'I', caps: 'I', shiftCaps: 'i',
    },
    rus: {
      lower: 'ш', upper: 'Ш', caps: 'Ш', shiftCaps: 'ш',
    },
  },
  {
    eventCode: 'KeyO',
    eng: {
      lower: 'o', upper: 'O', caps: 'O', shiftCaps: 'o',
    },
    rus: {
      lower: 'щ', upper: 'Щ', caps: 'Щ', shiftCaps: 'щ',
    },
  },
  {
    eventCode: 'KeyP',
    eng: {
      lower: 'p', upper: 'P', caps: 'P', shiftCaps: 'p',
    },
    rus: {
      lower: 'з', upper: 'З', caps: 'З', shiftCaps: 'з',
    },
  },
  {
    eventCode: 'BracketLeft',
    eng: {
      lower: '[', upper: '{', caps: '[', shiftCaps: '{',
    },
    rus: {
      lower: 'х', upper: 'Х', caps: 'Х', shiftCaps: 'х',
    },
  },
  {
    eventCode: 'BracketRight',
    eng: {
      lower: ']', upper: '}', caps: ']', shiftCaps: '}',
    },
    rus: {
      lower: 'ъ', upper: 'Ъ', caps: 'Ъ', shiftCaps: 'ъ',
    },
  },
  {
    eventCode: 'Backslash',
    eng: {
      lower: '\\', upper: '|', caps: '\\', shiftCaps: '|',
    },
    rus: {
      lower: '\\', upper: '/', caps: '\\', shiftCaps: '/',
    },
  },
  {
    eventCode: 'Delete',
    eng: {
      lower: 'Del', upper: 'Del', caps: 'Del', shiftCaps: 'Del',
    },
    rus: {
      lower: 'Del', upper: 'Del', caps: 'Del', shiftCaps: 'Del',
    },
  },
  {
    eventCode: 'CapsLock',
    eng: {
      lower: 'CapsLock', upper: 'CapsLock', caps: 'CapsLock', shiftCaps: 'CapsLock',
    },
    rus: {
      lower: 'CapsLock', upper: 'CapsLock', caps: 'CapsLock', shiftCaps: 'CapsLock',
    },
  },
  {
    eventCode: 'KeyA',
    eng: {
      lower: 'a', upper: 'A', caps: 'A', shiftCaps: 'a',
    },
    rus: {
      lower: 'ф', upper: 'Ф', caps: 'Ф', shiftCaps: 'ф',
    },
  },
  {
    eventCode: 'KeyS',
    eng: {
      lower: 's', upper: 'S', caps: 'S', shiftCaps: 's',
    },
    rus: {
      lower: 'ы', upper: 'Ы', caps: 'Ы', shiftCaps: 'ы',
    },
  },
  {
    eventCode: 'KeyD',
    eng: {
      lower: 'd', upper: 'D', caps: 'D', shiftCaps: 'd',
    },
    rus: {
      lower: 'в', upper: 'В', caps: 'В', shiftCaps: 'в',
    },
  },
  {
    eventCode: 'KeyF',
    eng: {
      lower: 'f', upper: 'F', caps: 'F', shiftCaps: 'f',
    },
    rus: {
      lower: 'а', upper: 'А', caps: 'А', shiftCaps: 'а',
    },
  },
  {
    eventCode: 'KeyG',
    eng: {
      lower: 'g', upper: 'G', caps: 'G', shiftCaps: 'g',
    },
    rus: {
      lower: 'п', upper: 'П', caps: 'П', shiftCaps: 'п',
    },
  },
  {
    eventCode: 'KeyH',
    eng: {
      lower: 'h', upper: 'H', caps: 'H', shiftCaps: 'h',
    },
    rus: {
      lower: 'р', upper: 'Р', caps: 'P', shiftCaps: 'p',
    },
  },
  {
    eventCode: 'KeyJ',
    eng: {
      lower: 'j', upper: 'J', caps: 'J', shiftCaps: 'j',
    },
    rus: {
      lower: 'о', upper: 'О', caps: 'O', shiftCaps: 'o',
    },
  },
  {
    eventCode: 'KeyK',
    eng: {
      lower: 'k', upper: 'K', caps: 'K', shiftCaps: 'k',
    },
    rus: {
      lower: 'л', upper: 'Л', caps: 'Л', shiftCaps: 'л',
    },
  },
  {
    eventCode: 'KeyL',
    eng: {
      lower: 'l', upper: 'L', caps: 'L', shiftCaps: 'l',
    },
    rus: {
      lower: 'д', upper: 'Д', caps: 'Д', shiftCaps: 'д',
    },
  },
  {
    eventCode: 'Semicolon',
    eng: {
      lower: ';', upper: ':', caps: ';', shiftCaps: ':',
    },
    rus: {
      lower: 'ж', upper: 'Ж', caps: 'Ж', shiftCaps: 'ж',
    },
  },
  {
    eventCode: 'Quote',
    eng: {
      lower: "'", upper: '"', caps: "'", shiftCaps: '"',
    },
    rus: {
      lower: 'э', upper: 'Э', caps: 'Э', shiftCaps: 'э',
    },
  },
  {
    eventCode: 'Enter',
    eng: {
      lower: 'Enter', upper: 'Enter', caps: 'Enter', shiftCaps: 'Enter',
    },
    rus: {
      lower: 'Enter', upper: 'Enter', caps: 'Enter', shiftCaps: 'Enter',
    },
  },
  {
    eventCode: 'ShiftLeft',
    eng: {
      lower: 'Shift', upper: 'Shift', caps: 'Shift', shiftCaps: 'Shift',
    },
    rus: {
      lower: 'Shift', upper: 'Shift', caps: 'Shift', shiftCaps: 'Shift',
    },
  },
  {
    eventCode: 'KeyZ',
    eng: {
      lower: 'z', upper: 'Z', caps: 'Z', shiftCaps: 'z',
    },
    rus: {
      lower: 'я', upper: 'Я', caps: 'Я', shiftCaps: 'я',
    },
  },
  {
    eventCode: 'KeyX',
    eng: {
      lower: 'x', upper: 'X', caps: 'X', shiftCaps: 'x',
    },
    rus: {
      lower: 'ч', upper: 'Ч', caps: 'Ч', shiftCaps: 'ч',
    },
  },
  {
    eventCode: 'KeyC',
    eng: {
      lower: 'c', upper: 'C', caps: 'C', shiftCaps: 'c',
    },
    rus: {
      lower: 'с', upper: 'С', caps: 'С', shiftCaps: 'с',
    },
  },
  {
    eventCode: 'KeyV',
    eng: {
      lower: 'v', upper: 'V', caps: 'V', shiftCaps: 'v',
    },
    rus: {
      lower: 'м', upper: 'М', caps: 'М', shiftCaps: 'м',
    },
  },
  {
    eventCode: 'KeyB',
    eng: {
      lower: 'b', upper: 'B', caps: 'B', shiftCaps: 'b',
    },
    rus: {
      lower: 'и', upper: 'И', caps: 'И', shiftCaps: 'и',
    },
  },
  {
    eventCode: 'KeyN',
    eng: {
      lower: 'n', upper: 'N', caps: 'N', shiftCaps: 'n',
    },
    rus: {
      lower: 'т', upper: 'Т', caps: 'Т', shiftCaps: 'т',
    },
  },
  {
    eventCode: 'KeyM',
    eng: {
      lower: 'm', upper: 'M', caps: 'M', shiftCaps: 'm',
    },
    rus: {
      lower: 'ь', upper: 'Ь', caps: 'Ь', shiftCaps: 'ь',
    },
  },
  {
    eventCode: 'Comma',
    eng: {
      lower: ',', upper: '<', caps: ',', shiftCaps: '<',
    },
    rus: {
      lower: 'б', upper: 'Б', caps: 'Б', shiftCaps: 'б',
    },
  },
  {
    eventCode: 'Period',
    eng: {
      lower: '.', upper: '>', caps: '.', shiftCaps: '>',
    },
    rus: {
      lower: 'ю', upper: 'Ю', caps: 'Ю', shiftCaps: 'ю',
    },
  },
  {
    eventCode: 'Slash',
    eng: {
      lower: '/', upper: '?', caps: '/', shiftCaps: '?',
    },
    rus: {
      lower: '.', upper: ',', caps: '.', shiftCaps: ',',
    },
  },
  {
    eventCode: 'ArrowUp',
    eng: {
      lower: '↑', upper: '↑', caps: '↑', shiftCaps: '↑',
    },
    rus: {
      lower: '↑', upper: '↑', caps: '↑', shiftCaps: '↑',
    },
  },
  {
    eventCode: 'ShiftRight',
    eng: {
      lower: 'Shift', upper: 'Shift', caps: 'Shift', shiftCaps: 'Shift',
    },
    rus: {
      lower: 'Shift', upper: 'Shift', caps: 'Shift', shiftCaps: 'Shift',
    },
  },
  {
    eventCode: 'ControlLeft',
    eng: {
      lower: 'Ctrl', upper: 'Ctrl', caps: 'Ctrl', shiftCaps: 'Ctrl',
    },
    rus: {
      lower: 'Ctrl', upper: 'Ctrl', caps: 'Ctrl', shiftCaps: 'Ctrl',
    },
  },
  {
    eventCode: 'MetaLeft',
    eng: {
      lower: 'Win', upper: 'Win', caps: 'Win', shiftCaps: 'Win',
    },
    rus: {
      lower: 'Win', upper: 'Win', caps: 'Win', shiftCaps: 'Win',
    },
  },
  {
    eventCode: 'AltLeft',
    eng: {
      lower: 'Alt', upper: 'Alt', caps: 'Alt', shiftCaps: 'Alt',
    },
    rus: {
      lower: 'Alt', upper: 'Alt', caps: 'Alt', shiftCaps: 'Alt',
    },
  },
  {
    eventCode: 'Space',
    eng: {
      lower: ' ', upper: ' ', caps: ' ', shiftCaps: ' ',
    },
    rus: {
      lower: ' ', upper: ' ', caps: ' ', shiftCaps: ' ',
    },
  },
  {
    eventCode: 'AltRight',
    eng: {
      lower: 'Alt', upper: 'Alt', caps: 'Alt', shiftCaps: 'Alt',
    },
    rus: {
      lower: 'Alt', upper: 'Alt', caps: 'Alt', shiftCaps: 'Alt',
    },
  },
  {
    eventCode: 'ArrowLeft',
    eng: {
      lower: '←', upper: '←', caps: '←', shiftCaps: '←',
    },
    rus: {
      lower: '←', upper: '←', caps: '←', shiftCaps: '←',
    },
  },
  {
    eventCode: 'ArrowDown',
    eng: {
      lower: '↓', upper: '↓', caps: '↓', shiftCaps: '↓',
    },
    rus: {
      lower: '↓', upper: '↓', caps: '↓', shiftCaps: '↓',
    },
  },
  {
    eventCode: 'ArrowRight',
    eng: {
      lower: '→', upper: '→', caps: '→', shiftCaps: '→',
    },
    rus: {
      lower: '→', upper: '→', caps: '→', shiftCaps: '→',
    },
  },
  {
    eventCode: 'ControlRight',
    eng: {
      lower: 'Ctrl', upper: 'Ctrl', caps: 'Ctrl', shiftCaps: 'Ctrl',
    },
    rus: {
      lower: 'Ctrl', upper: 'Ctrl', caps: 'Ctrl', shiftCaps: 'Ctrl',
    },
  },
];

export default keys;
