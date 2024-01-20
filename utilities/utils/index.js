const getFirstNames = function (list) {
  return list.map(eachPerson => {
    return eachPerson.firstName
  })
}

module.exports = getFirstNames
