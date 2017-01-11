module.exports = {
  getState: getState,
  setState: setState,
  getHeader: getHeader,
  updateWombles: updateWombles
}

var wombles = [{
    name: 'Orinocco',
    email: 'orinocco@wimbledoncommon.net',
    details: 'Tin cans',
    showingDetails: false
  }, {
    name: 'Tomsk',
    email: 'tomsk@wimbledoncommon.net',
    details: 'Plastic bags',
    showingDetails: false
  }, {
    name: 'Bungo',
    email: 'bungo@wimbledoncommon.net',
    details: 'Discarded wombat poop',
    showingDetails: false
  }]


var headers = [{
  title: 'homepage',
  subtitle: 'wombles list'
}, {
  title: 'about page',
  subtitle: 'learn about wombles'
}]

function getState () {
  vm = {
    wombles: wombles
  }
  return vm
}

function setState (state) {
  wombles = state
}

function getHeader () {
  return header
}

function updateWombles (newWombles) {
  wombles = newWombles
}
