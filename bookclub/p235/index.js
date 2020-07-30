import './data'

document.addEventListener("DOMContentLoaded", () => {
  console.log('js is here')
  loadData()

  const loadData = () => {
    const main = document.getElementById('main')

    const refactoredData = (csvData) => {
      const lines = data.split("\n");
      let firstLine = true;
      const result = [];
      for (const line of lines) {
        if (firstLine) {
          firstLine = false;
          continue;
        }
        if (line.trim() === "") continue;
        const record = line.split(",");
        if (record[1].trim() === "India") {
          result.push({ city: record[0].trim(), phone: record[2].trim() });
        }
      }
      return result;
    }

    let renderedData = refactoredData()
    renderedData = refactoredData.map(d => {
      return (`
      <div class='office'>
      <h3>${d.office}</h3>
      <p>${d.country}</p>
      <p>${d.telephone}</p>
      </div>
      `)
    }).join('')

    main.innerHTML = renderedData
  }
})
