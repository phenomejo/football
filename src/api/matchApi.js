import http from './http'
import moment from 'moment'

export default {
  getMatchList () {
    const dateFrom = moment().format('YYYY-MM-DD')
    const dateTo = moment().add(10, 'days').format('YYYY-MM-DD')
    return http.get(`/matches?dateFrom=${dateFrom}&dateTo=${dateTo}&competitions=2021,2015,2002,2019,2014,2001,2018&status=SCHEDULED,LIVE,IN_PLAY`).then((resp) => {
      return resp
    })
  }
}