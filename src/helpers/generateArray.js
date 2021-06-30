function generateArray(length) {
  const array = [];
  for (let i = 0; i < length; i++) {
    array.push(randomIntFromInterval(5, 730));
  }
  return array;
}

function randomIntFromInterval(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

module.exports = {
  generateArray,
};
