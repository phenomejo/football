import { HTTP_REQ, HTTP_REQ_DONE } from '@/util/Constant'

export const screen = (state = false, payload) => {
  switch (payload.type) {
    case HTTP_REQ:
      return true
    case HTTP_REQ_DONE:
      return false
    default:
      return state
  }
}