
const initialState = {
  text: '',
  size: 4,
  strength: 0,
  options: []
}

export default function filtersReducer (state = initialState, action) {
  switch (action.type) {
    case 'password/lengthFilterChanged': {
      const size = action.payload
      return {
        ...state,
        size
      }
    }
    case 'password/generateNewPassword' : {
      const lettersArray = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']
      const numbersArray = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
      const specialCharacters = ['!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '_', '+', '{', '}', '[', ']', ';', ':', ',', '<', '>', '.', '?', '/', '`', '~']
      const { text, size, options } = action.payload
      let passwordText
      let passwordStrength
      text.length !== 0 ? passwordText = '' : passwordText = text

      while (passwordText.length < size && options.length > 0) {
        const randomNumber = Math.random()
        if (randomNumber < 0.35) {
          if (options.includes('uppercase') && passwordText.length < size) {
            passwordText = passwordText + lettersArray[Math.floor(Math.random() * lettersArray.length)].toUpperCase()
          }
        } else if (randomNumber < 0.65) {
          if (options.includes('lowercase') && passwordText.length < size) {
            passwordText = passwordText + lettersArray[Math.floor(Math.random() * lettersArray.length)].toLowerCase()
          }
        } else if (randomNumber < 0.85) {
          if (options.includes('numbers') && passwordText.length < size) {
            passwordText = passwordText + numbersArray[Math.floor(Math.random() * numbersArray.length)]
          }
        } else if (options.includes('symbols') && passwordText.length < size) {
          passwordText = passwordText + specialCharacters[Math.floor(Math.random() * specialCharacters.length)]
        }
      }
      if (options.length > 0) {
        passwordStrength = size * 5.9375 + options.length * 1.25
      } else {
        passwordStrength = 0
      }
      return {
        ...state,
        text: passwordText,
        strength: passwordStrength
      }
    }
    case 'password/optionsChangePassword': {
      const { option, changeAction } = action.payload
      const { options } = state

      switch (changeAction) {
        case 'checked':{
          if (options.includes(option)) {
            return state
          }
          return {
            ...state,
            options: state.options.concat(option)
          }
        }
        case 'unchecked':{
          return {
            ...state,
            options: state.options.filter((options) => options !== option)
          }
        }
      }
    }
    default: return state
  }
}

export const lengthFilterChanged = (size) => {
  return {
    type: 'password/lengthFilterChanged',
    payload: size
  }
}

export const generatePassword = (text, size, options) => {
  return {
    type: 'password/generateNewPassword',
    payload: { text, size, options }
  }
}

export const optionsPassword = (option, changeAction) => {
  return {
    type: 'password/optionsChangePassword',
    payload: { option, changeAction }
  }
}

export const resetPassword = (text) => {
  return {
    type: 'password/resetPassword',
    payload: text
  }
}
