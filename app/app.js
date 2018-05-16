let array = [1,2,3,4,5,6]

function returnEven(array) {
  let newArray = []
  for (let i = 0; i < array.length; i++) {
    if ((array[i] % 2) === 0) {
      newArray.push(array[i])
    }
  }
  return newArray
}

let nameArray = [
  {
    Keith: 30,
    Alyssa: 26
  }
]

array.reduce(function(accum, current) {
  return accum * current;
})