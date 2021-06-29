function generateArray(length) {
  console.log(length);
  let a = Array.from({ length }, () => Math.floor(Math.random() * 9));
  return a;
}

module.exports = {
  generateArray,
};
