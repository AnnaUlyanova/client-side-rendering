var state = require('./state')
var wombleList = require('./templates/womble-list.hbs')

document.addEventListener('DOMContentLoaded', render)

function render () {
  var wombles = state.getState()
  var app = document.getElementById('app')
  app.innerHTML = wombleList({ wombles: wombles })
  bindEventListeners(app)
}

function bindEventListeners (elem) {
  var lis = elem.getElementsByTagName('li')
  for (var i = 0; i < lis.length; i++) {
    lis[i].addEventListener('click', function (e) {
      toggleWomble(e.target.parentNode)
    })
  }
}

function toggleWomble (elem) {
  var name = elem.getAttribute('data-name')
  var showingDetails = elem.getAttribute('data-details') === 'true'
  var updated = state.getState().map(function (womble) {
    if (womble.name === name) {
      womble.showingDetails = !showingDetails
    }
    return womble
  })
  state.setState(updated)
  render()
}
