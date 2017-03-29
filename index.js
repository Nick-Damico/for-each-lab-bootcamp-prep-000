function iterativeLog(array) {
  array.forEach((element, index, array) => {
    console.log(`${index}: ${element}`)
  })
}

function iterate(callback) {
  const hobbies = [`snowboarding`, `hockey`, `hiking`, `climbing`];
  hobbies.forEach(callback);
  return hobbies
}

function doToArray(array, callback) {
  array.forEach(callback);
}
