import { SET_STANDING, SET_CURRENT_STANDING } from '@/util/Constant'

export const standing = (state = [], action) => {
  switch (action.type) {
    case SET_CURRENT_STANDING:
      return action.payload
    default:
      return state
  }
}

export const standingList = (state = [], action) => {
  switch (action.type) {
    case SET_STANDING:
      return [...state, action.payload]
    default:
      return state
  }
}
