const Storage = {
  get (sname) {
    const data = localStorage.getItem(sname)
    return !data ? {} : JSON.parse(data)
  },
  set (sname, svalue) {
    localStorage.setItem(sname, JSON.stringify(svalue))
  },
  remove (sname) {
    localStorage.removeItem(sname)
  }
}

export default Storage
