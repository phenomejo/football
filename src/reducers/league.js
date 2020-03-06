import { SET_LEAGUE } from '@/util/Constant'

export const leagueList = (state = [], action) => {
  switch (action.type) {
    case SET_LEAGUE:
      return action.payload
    default:
      return state
  }
}
