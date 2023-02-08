import filtersReducer from './filtersReducer'

export default function rootReducer (state = {}, action) {
  return {
    password: filtersReducer(state.password, action)
  }
}
