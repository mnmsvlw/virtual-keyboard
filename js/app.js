import keys from './keys.js'

document.onkeydown = (event) => console.log(event)

init()

function init() {
  const container = createCustomElement('div', 'container')
  const textareaWrapper = createCustomElement('div', 'textarea-wrapper')
  createTextareaWindow(textareaWrapper)
  const keyboard = createCustomElement('div', 'keyboard')
  createKeyboardButtons(keyboard)

  container.appendChild(textareaWrapper)
  container.appendChild(keyboard)

  document.body.appendChild(container)
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
    keyButton.textContent = key.eng
    keyboardElem.appendChild(keyButton)
  }
}

function createTextareaWindow(textareaWrapper) {
  const textareaHeader = createCustomElement('div', 'textarea-header')
  const collapseIcon = createCustomElement('div', 'textarea-header__collapse')
  textareaHeader.appendChild(collapseIcon)
  const resizeIcon = createCustomElement('div', 'textarea-header__resize')
  textareaHeader.appendChild(resizeIcon)
  const closeIcon = createCustomElement('div', 'textarea-header__close')
  textareaHeader.appendChild(closeIcon)

  const textarea = createCustomElement('textarea', 'textarea', {rows: '10', cols: '85'})

  textareaWrapper.appendChild(textareaHeader)
  textareaWrapper.appendChild(textarea)
}