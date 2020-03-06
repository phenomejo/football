import { combineReducers } from 'redux'
import { leagueList } from './league'
import { standing, standingList } from './standing'
import { matchList } from './match'

const reducers = combineReducers({
  leagueList,
  standing,
  standingList,
  matchList
})

export default reducers
