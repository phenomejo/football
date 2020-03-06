import competitionApi from '@/api/competitionApi'
import { SET_STANDING, SET_CURRENT_STANDING } from '@/util/Constant'

export const setStanding = (payload) => {
  return {
    type: SET_CURRENT_STANDING,
    payload
  }
}

const setStandingList = (payload) => {
  return {
    type: SET_STANDING,
    payload
  }
}

export const fecthStanding = (id) => {
  return async (dispatch) => {
    const resp = await competitionApi.getStandings(id)
    dispatch(setStanding(resp.standings))
    dispatch(setStandingList(resp))
  }
}