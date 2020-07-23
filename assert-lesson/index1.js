document.addEventListener('DOMContentLoaded', () => {
  // loadVariables()
})


let scenarioData = {
  primaryForce: 5,
  secondaryForce: 15,
  mass: 4, delay: 1
}

function distanceTravelled(scenario, time) {
  let result;
  console.log('result1: ', result)

  let acc = scenario.primaryForce / scenario.mass;
  console.log('acc: ', acc)

  let primaryTime = Math.min(time, scenario.delay);
  console.log('primaryTime: ', primaryTime)

  result = 0.5 * acc * primaryTime * primaryTime;
  console.log('result2: ', result)


  let secondaryTime = time - scenario.delay;
  console.log('secondaryTime: ', secondaryTime)

  if (secondaryTime > 0) {
    let primaryVelocity = acc * scenario.delay;
    acc = (scenario.primaryForce + scenario.secondaryForce) / scenario.mass;
    result += primaryVelocity * secondaryTime + 0.5 * acc * secondaryTime * secondaryTime;
    console.log('result3: ', result)
  }
  console.log('result4: ', result)
  return result;
}

distanceTravelled(scenarioData, Date.parse(new Date()))

///////////////////////////////////////////////////////////////////////
// class Organization {
//   constructor(data) {
//     this._name = data.name;
//     this._country = data.country;
//   }
//   get name() { return this._name; }
//   set name(aString) { this._name = aString; }
//   get country() { return this._country; }
//   set country(aCountryCode) { this._country = aCountryCode; }
// }
// const organization = new Organization({ name: "Acme Gooseberries", country: "GB" });

///////////////////////////////////////////////////////////////////////
class Organization {
  constructor(data) {
    this.name = data.name || data.title;
    this.country = data.country;
  }
}
  ///////////////////////////////////////////////////////////////////////
  // class Organization {
  //   constructor(data) {
  //     this.name = data.name;
  //     this.country = data.country;
  //   }
  // }

Organization.prototype.getTitle = function () {
  return this.name.toUpperCase()
}


const org1 = new Organization({ name: "Acme Gooseberries", country: "GB" });
console.log('org1: ', org1)

const org2 = new Organization({ name: "RoadRunner", country: "AU" });
console.log('org2: ', org2)

const org3 = new Organization({ title: "Coyote", country: "CA" });
console.log('org3: ', org3)

console.log('org1.getTitle(): ', org1.getTitle())
console.log('org2.getTitle(): ', org2.getTitle())
console.log('org3.getTitle(): ', org3.getTitle())
/////////////////////////////////////////////////////////////////////////