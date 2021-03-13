import { createStore } from 'redux'
import { SET_PAGE } from './actionTypes'

const initialState = {
  page: 'HOME'
}

const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case SET_PAGE:
      return { ...state, page: payload }
    default:
      return state
  }
}

const store = createStore(reducer)

export default store
