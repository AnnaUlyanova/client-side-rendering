var test = require('tape')
var wombleListTemplate = require('../src/templates/womble-list.hbs')

test('wombleList creates a list with two items', function (t) {
  var expected = 2
  var div = document.createElement('div')
  div.innerHTML = wombleListTemplate({
    wombles: [
      { name: 'Foo', email: 'foo@example.com' }, 
      { name: 'Bar', email: 'bar@example.com' }
    ]
  })
  var actual = div.getElementsByTagName('li').length
  t.equal(actual, expected)
  t.end()
})
