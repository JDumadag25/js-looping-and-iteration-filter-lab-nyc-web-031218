// Code your solution in this file
function findMatching (array, name) {
  return array.filter(function (driverName) {
    return driverName.toLowerCase() === name.toLowerCase()
  })
}

function fuzzyMatch(array, letter) {
  return array.filter(function(name) {
    return name.startsWith(letter)
  })
}

function matchName(array, name) {
  return array.filter(function(drivers) {
    return drivers.name === name
  })
}
