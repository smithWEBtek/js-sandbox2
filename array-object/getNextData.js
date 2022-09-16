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
