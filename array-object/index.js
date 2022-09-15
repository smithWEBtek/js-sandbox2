const arr = [
  [],
  [],
  { data: { pool: ['cat', 'bird', 'dog', 'ferret'] } },
  [],
  [],
  [],
  { data: { pool: ['fish', 'frog', 'lizard'] } }
]

let nextData;
let select = document.getElementById('select')

const getNextData = (array, index) => {
  array.forEach(item => {
    if (!item.length) {
      nextData = array.slice(index + 1).find(item => item.data)
      select.innerHTML = nextData.data.pool.map(item => `<option value="${item}">${item}</option>`);
    } else {
      select.innerHTML = ''
    }
  })
}

getNextData(arr, 1)

// write a function that:
// returns arr[3] as a result for getNextData(0)
// returns arr[3] as a result for getNextData(1)
// returns arr[3] as a result for getNextData(2)
// returns arr[6] as a result for getNextData(3)
// returns arr[6] as a result for getNextData(4)
// returns arr[6] as a result for getNextData(5)

// return then next array element that is an object.data.pool

module.exports(getNextData)
