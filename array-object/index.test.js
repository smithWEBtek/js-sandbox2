const getNextData = require('./index')
const jsdom = require('jest-environment-jsdom');

const DEFAULT_HTML = '<html><body></body></html>';

global.document = jsdom.jsdom(DEFAULT_HTML);

global.window = document.defaultView;
global.navigator = window.navigator;
global.localStorage = window.localStorage;

const select = jest.fn()
const arr1 = [
  [],
  [],
  { data: { pool: ['cat', 'bird', 'dog', 'ferret'] } },
  [],
  [],
  [],
  { data: { pool: ['fish', 'frog', 'lizard'] } }
]

it('returns expected data array', () => {
  const testData = getNextData(arr1, 2)
  expect(testData.data.pool[0]).toEqual('cat')
})
