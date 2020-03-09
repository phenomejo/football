import { combineReducers } from 'redux'
import { leagueList } from './league'
import { standing, standingList } from './standing'
import { matchList } from './match'
import { score, scoreList } from './score'

const reducers = combineReducers({
  leagueList,
  standing,
  standingList,
  matchList,
  score,
  scoreList
})

export default reducers
