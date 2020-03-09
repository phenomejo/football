import competitionApi from '@/api/competitionApi'
import { SET_SCORE, SET_CURRENT_SCORE } from '@/util/Constant'

export const setScore = (payload) => {
  return {
    type: SET_CURRENT_SCORE,
    payload
  }
}

const setScoreList = (payload) => {
  return {
    type: SET_SCORE,
    payload
  }
}

export const fecthScore = (id) => {
  return async (dispatch) => {
    const resp = await competitionApi.getScorers(id)
    dispatch(setScore(resp.scorers))
    dispatch(setScoreList(resp))
  }
}