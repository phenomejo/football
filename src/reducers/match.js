import { SET_MATCH } from '@/util/Constant'
import moment from 'moment'

const setGroupNameByLeague = (league) => {
  let groupName = ''
  let arr = []
  league.forEach((v) => {
    groupName = v.competition.name
    if (!arr[groupName]) {
      arr[groupName] = []
    }

    arr[groupName].push(v)
  })

  return arr
}

const setDataObject = (data) => {
  let temp_1 = []
  let temp_2 = []
  let result = []
  for (let index in data) {
    temp_2 = []
    temp_1 = setGroupNameByLeague(data[index])
    for (let idx in temp_1) {
      temp_2.push({ leagueName: idx, league: temp_1[idx] })
    }
    result.push({ date: index, match: temp_2  })
  }

  return result
}

const setGroupByDate = (data) => {
  let groupName = ''
  let arr = []
  data.forEach(v => {
    groupName = moment(v.utcDate).format('DD/MM/YYYY')
    if (!arr[groupName]) {
      arr[groupName] = []
    }

    arr[groupName].push(v)
  })

  return setDataObject(arr)
}

export const matchList = (state = [], action) => {
  switch (action.type) {
    case SET_MATCH:
      return setGroupByDate(action.payload)
    default:
      return state
  }
}