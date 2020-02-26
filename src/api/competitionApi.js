import http from './http'

export default {
  getCompetitionList (params) {
    return http.get(`/competitions`, { params }).then((resp) => {
      return resp
    })
  }
}