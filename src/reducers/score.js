import { SET_SCORE, SET_CURRENT_SCORE } from '@/util/Constant'

export const score = (state = [], action) => {
  switch (action.type) {
    case SET_CURRENT_SCORE:
      return action.payload
    default:
      return state
  }
}

export const scoreList = (state = [], action) => {
  switch (action.type) {
    case SET_SCORE:
      return [...state, action.payload]
    default:
      return state
  }
}
