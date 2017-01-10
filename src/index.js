var api = require('./api')
var state = require('./state')

var appPage = require ('./templates/app.hbs')
var wombleList = require('./templates/womble-list.hbs')
var headerList = require('./templates/header.hbs')

document.addEventListener('DOMContentLoaded', getData)

function getData() {
  api.getUsers(function(err, wombles) {
    if(err) {
      console.log(err)
    }
    state.updateWombles(wombles)
    render()
  })
}

function render () {
  var vm = state.getState()
   var app = document.getElementById('app')
   app.innerHTML = appPage(vm)
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
  state.updateWombles(updated)
  render()
}
//
// function renderHeader (header) {
//   var header = state.getHeader()
//   var appHeader = document.getElementById('header')
//   appHeader.innerHTML = headerList({ header: header })
// }
