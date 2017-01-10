var request = require('superagent')

var url = 'http://localhost:3000/users'

module.exports = {
  getUsers: getUsers
}

function getUsers (callback) {
  request.get(url)
    .end(function (err, res) {
      if (err) {
        callback(err)
      } else {
        var users = res.body.users.map(function (user) {
          user.details = "assignment"
          user.showingDetails = false
          return user
        })
          callback(null, users)
      }
    })
}
