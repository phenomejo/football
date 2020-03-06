import http from './http'

export default {
  getCompetitionList (params) {
    return http.get(`/competitions`, { params }).then((resp) => {
      return resp
    })
  },
  getStandings (id, params) {
    return http.get(`/competitions/${id}/standings`, { params }).then((resp) => {
      return resp
    })
  }
}