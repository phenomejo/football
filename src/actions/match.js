import matchApi from '@/api/matchApi'
import { SET_MATCH } from '@/util/Constant'

export const setMatchList = (payload) => {
  return {
    type: SET_MATCH,
    payload
  }
}

export const fetchMath = () => {
  return async (dispatch) => {
    const resp = await matchApi.getMatchList()
    dispatch(setMatchList(resp.matches))
  }
}