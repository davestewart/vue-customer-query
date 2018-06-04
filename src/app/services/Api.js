export default {
  post (path, data) {
    // mock call
    return new Promise(function (resolve, reject) {
      const action = Math.random() > 0.25 ? resolve : reject
      const timeout = (Math.random() * 500) + 500
      setTimeout(action, timeout)
    })
  }
}
