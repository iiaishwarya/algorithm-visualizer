function generateArray(length) {
  const array = [];
  let i = 0;
  while (i < length) {
    let item = randomIntFromInterval(5, 500);
    if (!array.includes(item)) {
      array.push(item);
      i += 1;
    }
  }
  return array;
}

function randomIntFromInterval(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

module.exports = {
  generateArray,
};
