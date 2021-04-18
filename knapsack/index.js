document.addEventListener('DOMContentLoaded', () => {
  console.log('index.js loaded ...')
  loadKnapsack2()
  loadResults()
})

let knapsackItems = []
let items = [
  { a: { value: 10, weight: 3 } },
  { b: { value: 6, weight: 8 } },
  { c: { value: 3, weight: 3 } }
]

let totalValue = 0
let totalWeight = 0
let maxWeight = 8
let answerDiv = document.getElementById('answer-div')
let valueDiv = document.getElementById('value-div')

const loadKnapsack1 = () => {
  let sortedItems = items.sort((a, b) => a.value < b.value ? -1 : 1)
  for (let item of sortedItems) {
    let key = Object.keys(item)[0]
    if ((totalWeight += item[key].weight) <= maxWeight) {
      totalWeight += item[key].weight
      totalValue += item[key].value
      console.log('totalWeight: ', totalWeight)
      console.log('totalValue: ', totalValue)
      knapsackItems.push(key)
    }
  }
}

const loadKnapsack2 = () => {
  let sortedItems = items.sort((a, b) => a.value < b.value ? -1 : 1)
  for (let i = 0; i < sortedItems.length; i++) {
    let key = Object.keys(sortedItems[i])[0]

    if ((totalWeight += sortedItems[i][key].weight) <= maxWeight) {
      totalWeight += sortedItems[i][key].weight
      totalValue += sortedItems[i][key].value
      console.log('totalWeight: ', totalWeight)
      console.log('totalValue: ', totalValue)
      knapsackItems.push(key)
    }
  }
}

const loadResults = () => {
  answerDiv.innerText = knapsackItems
  valueDiv.innerText = totalValue
}
  