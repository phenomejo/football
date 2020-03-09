import http from './http'

export default {
  getMatchList (params) {
    params = { ...params, 'competitions': '2021,2015,2002,2019,2014,2001,2018' }
    return http.get(`/matches`, { params }).then((resp) => {
      return resp
    })
  }
}