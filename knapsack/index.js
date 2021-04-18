document.addEventListener('DOMContentLoaded', () => {
  console.log('index.js loaded ...')
  listenForLoadKnapsack()
})

let items = [
  { a: { value: 10, weight: 3 } },
  { b: { value: 6, weight: 8 } },
  { c: { value: 3, weight: 3 } }
]

let maxWeightDiv = document.getElementById('max-weight-div')
let itemsDiv = document.getElementById('items-div')
let valueDiv = document.getElementById('value-div')
let weightDiv = document.getElementById('weight-div')

const listenForLoadKnapsack = () => {
  let totalValue = 0
  let totalWeight = 0
  let maxWeight = 0
  
  itemsDiv.value = []
  valueDiv.value = 0
  weightDiv.value = 0

  let submit = document.getElementById('calculate-ideal-items')
  submit.addEventListener('click', () => {
    maxWeight = parseInt(document.querySelector('#max-weight').value)
    console.log('form max weight entered: ', maxWeight)
    loadKnapsack(maxWeight, totalValue, totalWeight)
    maxWeight = parseInt(document.querySelector('#max-weight').value = '')
  })
}

const loadKnapsack = (wt, totalValue, totalWeight) => {
  let sortedItems = items.sort((a, b) => a.weight > b.weight ? 1 : -1)
  let knapsackItems = []
  
  for (let i = 0; i < sortedItems.length; i++) {
    let key = Object.keys(sortedItems[i])[0]

    if ((totalWeight + sortedItems[i][key].weight) <= wt) {
      totalWeight += sortedItems[i][key].weight
      totalValue += sortedItems[i][key].value
      knapsackItems.push(key)
    }
  }
  loadResults(wt, knapsackItems, totalValue, totalWeight)
}

const loadResults = (maxWeightEnetered, knapsackItems, totalValue, totalWeight) => {
  maxWeightDiv.innerText = maxWeightEnetered
  itemsDiv.innerText = knapsackItems.join(' ')
  valueDiv.innerText = totalValue
  weightDiv.innerText = totalWeight
}
