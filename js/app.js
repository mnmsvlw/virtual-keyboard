import keys from './keys.js'

document.onkeydown = (event) => console.log(event)

let textareaText = ''
let textareaElem
let currentLocale = 'eng'
let currentCase = 'lower'
let caps = false

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
  textareaElem = document.querySelector('.textarea')
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
    const keyButton = createCustomElement('div', `keyboard__button ${key.eventCode}`)

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
  })

  document.addEventListener('keyup', (event) => {
    const button = document.querySelector(`.${event.code}`)
    button.classList.remove('keyboard__button_active')

    if (event.key === 'Shift' && !event.repeat) {
      currentCase = currentCase === 'lower' ? 'upper' : 'lower'
      setLocaleAndCase()
    }
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