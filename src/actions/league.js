import competitionApi from '@/api/competitionApi'
import { LEAGUE_ID, SET_LEAGUE } from '@/util/Constant'

export const setLeagueList = (payload) => {
  return {
    type: SET_LEAGUE,
    payload
  }
}

export const fetchComposition = () => {
  return async (dispatch) => {
    const resp = await competitionApi.getCompetitionList({ plan: 'TIER_ONE' })
    dispatch(setLeagueList(resp.competitions.filter(v => LEAGUE_ID.includes(v.id))))
  }
}

