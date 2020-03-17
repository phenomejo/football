import { HTTP_REQ, HTTP_REQ_DONE } from '@/util/Constant'

export const httpReq = () => {
  return {
    type: HTTP_REQ
  }
}

export const httpReqDone = () => {
  return {
    type: HTTP_REQ_DONE,
  }
}