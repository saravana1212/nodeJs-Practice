const arrayOfNames = require('../country/state/city/index')
const getFirstNames = require('../utilities/utils/index')
console.log(arrayOfNames)
console.log(getFirstNames)

const getPeopleInCity = function (namesList) {
  return getFirstNames(namesList)
}
console.log(getPeopleInCity);
module.exports = getPeopleInCity
