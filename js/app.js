import keys from './keys.js'

document.onkeydown = (event) => console.log(event)

let textareaText = ''
let textareaElem
let currentLocale = 'eng'
let currentCase = 'lower'
let caps = false
let lastInput
let ignoredKeys = ['Backspace', 'Tab', 'Delete', 'CapsLock', 'Enter', 'ShiftLeft', 'ShiftRight', 'ControlLeft', 'ControlRight', 'AltLeft', 'AltRight', 'ArrowUp', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'MetaLeft']

init()

function init() {
  const container = createCustomElement('div', 'container')
  const textareaWrapper = createCustomElement('div', 'textarea-wrapper')
  createTextareaWindow(textareaWrapper)
  const keyboard = createCustomElement('div', 'keyboard en low')
  createKeyboardButtons(keyboard)

  container.appendChild(textareaWrapper)
  container.appendChild(keyboard)

  document.body.appendChild(container)
  addListeners()
}

function createCustomElement(elem, customClassList, attributes = false) {
  const element = document.createElement(elem)

  element.classList = customClassList

  if (attributes) {
    for(let key of Object.keys(attributes)) {
      element.setAttribute(key, attributes[key])
    }
  }

  return element
}

function createKeyboardButtons(keyboardElem) {
  for (let key of keys) {
    let keyButton
    if (key.eventCode.startsWith('Key')) {
      keyButton = createCustomElement('div', `keyboard__button ${key.eventCode} key`)
    } else {
      keyButton = createCustomElement('div', `keyboard__button ${key.eventCode}`)
    }
    

    const engCase = createCustomElement('div', 'eng')
    const engLower = createCustomElement('div', 'lower')
    engLower.textContent = key.eng.lower
    engCase.appendChild(engLower)
    const engUpper = createCustomElement('div', 'upper')
    engUpper.textContent = key.eng.upper
    engCase.appendChild(engUpper)
    keyButton.appendChild(engCase)

    const rusCase = createCustomElement('div', 'rus')
    const rusLower = createCustomElement('div', 'lower')
    rusLower.textContent = key.rus.lower
    rusCase.appendChild(rusLower)
    const rusUpper = createCustomElement('div', 'upper')
    rusUpper.textContent = key.rus.upper
    rusCase.appendChild(rusUpper)
    keyButton.appendChild(rusCase)

    keyboardElem.appendChild(keyButton)
    keyButton.addEventListener('click', () => {
      textareaText += key.eng
      textareaElem.value = textareaText
    } )
  }
}

function createTextareaWindow(textareaWrapper) {
  const textareaHeader = createCustomElement('div', 'textarea-header')
  const textareaTitle = createCustomElement('div', 'textarea-header__title')
  textareaTitle.textContent = 'virtual-keyboard.txt - Windows 11'
  textareaHeader.appendChild(textareaTitle)
  const collapseIcon = createCustomElement('div', 'textarea-header__collapse')
  textareaHeader.appendChild(collapseIcon)
  const resizeIcon = createCustomElement('div', 'textarea-header__resize')
  textareaHeader.appendChild(resizeIcon)
  const closeIcon = createCustomElement('div', 'textarea-header__close')
  textareaHeader.appendChild(closeIcon)

  const textarea = createCustomElement('textarea', 'textarea', {
    rows: '10', cols: '85', placeholder: 'Нажмите Ctrl + Alt для смены языка...',
  })

  textareaWrapper.appendChild(textareaHeader)
  textareaWrapper.appendChild(textarea)
}

function addListeners() {
  const textarea = document.querySelector('.textarea')
  document.addEventListener('keydown', (event) => {
    const button = document.querySelector(`.${event.code}`)
    button.classList.add('keyboard__button_active')
    
    if (ignoredKeys.includes(event.code)) {
      
      if ((event.key === 'Alt' && event.ctrlKey) || (event.key === 'Ctrl' && event.altKey)) {
        currentLocale = currentLocale === 'eng' ? 'rus' : 'eng'
        console.log(currentLocale)
        setLocaleAndCase()
      } 
      
      if (event.key === 'Shift' && !event.repeat) {
        currentCase = currentCase === 'lower' ? 'upper' : 'lower'
        setLocaleAndCase()
      } 
      
      if (event.key === 'CapsLock' && !event.repeat) {
        caps = !caps
        currentCase = currentCase === 'lower' ? 'upper' : 'lower'
        setLocaleAndCase()
      }

      if (event.key == 'Backspace') {
        if (textareaElem.selectionStart === textareaElem.selectionEnd) {
          textareaText = textareaText.substring(0, textareaElem.selectionStart - 1) + textareaText.substring(textareaElem.selectionStart, textareaText.length)
        } else {
          textareaText = textareaText.substring(0, textareaElem.selectionStart) + textareaText.substring(textareaElem.selectionEnd, textareaText.length)
        }
        
      }

      if (event.key == 'Delete') {
        if (textareaElem.selectionStart === textareaElem.selectionEnd) {
        textareaText = textareaText.substring(0, textareaElem.selectionStart) + textareaText.substring(textareaElem.selectionStart + 1, textareaText.length)
        } else {
          textareaText = textareaText.substring(0, textareaElem.selectionStart) + textareaText.substring(textareaElem.selectionEnd, textareaText.length)
        }
      }

      if (event.key == 'Enter') {
        textareaText = textareaText.substring(0, textareaElem.selectionStart) + '\n' + textareaText.substring(textareaElem.selectionEnd + 1, textareaText.length)
      }

      if (event.key == 'Tab') {
        event.preventDefault()
        textareaText = textareaText.substring(0, textareaElem.selectionStart) + '    ' + textareaText.substring(textareaElem.selectionEnd + 1, textareaText.length)
        textareaElem.value = textareaText
      }
    
  } else {
    updateTextarea(event.code)
  }
  })

  document.addEventListener('keyup', (event) => {
    const button = document.querySelector(`.${event.code}`)
    button.classList.remove('keyboard__button_active')

    if (event.key === 'Shift' && !event.repeat) {
      currentCase = currentCase === 'lower' ? 'upper' : 'lower'
      setLocaleAndCase()
    }
  })

  textareaElem = document.querySelector('.textarea')
  textareaElem.tabIndex = -1
  textareaElem.addEventListener('input', event => {
    // event.preventDefault()
    // console.log(event)
    let index = textareaElem.selectionStart
    event.target.value = textareaText
    textareaElem.selectionStart = index
    textareaElem.selectionEnd = index
    console.dir(textareaElem)
    // event.data = lastInput
  })
}

function setLocaleAndCase() {
  const keyboard = document.querySelector('.keyboard')
  if (!caps) {
    keyboard.classList = `keyboard ${currentLocale.slice(0,2)} ${currentCase.slice(0,3)}`
  } else {
    keyboard.classList = `keyboard ${currentLocale.slice(0,2)} ${currentCase.slice(0,3)} caps`
  }
}

function updateTextarea(code) {
  const char = keys.find((item) => code === item.eventCode)
  // console.log(char)
  // // textareaElem.value = ''
  const index = textareaElem.selectionStart
  const endIndex = textareaElem.selectionEnd
  if (index === endIndex) {
    textareaText = textareaText.substring(0, index) + char[currentLocale][currentCase] + textareaText.substring(index, textareaText.length)
  } else {
    textareaText = textareaText.substring(0, index) + char[currentLocale][currentCase] + textareaText.substring(endIndex, textareaText.length)
  }
  console.log(textareaText)
  // textareaElem.value = textareaText
  // textareaElem.selectionStart = index
  // textareaElem.selectionEnd = index
}

