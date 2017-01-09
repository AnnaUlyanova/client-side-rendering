module.exports = {
  getState: getState,
  setState: setState
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

function getState () {
  return wombles
}

function setState (state) {
  wombles = state
}
