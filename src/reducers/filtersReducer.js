
const initialState = {
  text: '',
  size: 4,
  strength: 10,
  filters: []
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
      const { text, size } = action.payload
      let passwordText
      const passwordStrength = size * 2.5
      text.length !== 0 ? passwordText = '' : passwordText = text
      for (let i = 0; i < size; i++) {
        passwordText = passwordText + lettersArray[Math.floor(Math.random() * lettersArray.length)]
      }
      console.log(passwordText)
      return {
        ...state,
        text: passwordText,
        strength: passwordStrength
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

export const generatePassword = (text, size) => {
  return {
    type: 'password/generateNewPassword',
    payload: { text, size }
  }
}

export const resetPassword = (text) => {
  return {
    type: 'password/resetPassword',
    payload: text
  }
}
