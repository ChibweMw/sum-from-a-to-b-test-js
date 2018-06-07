
function sum(fromN, toN) {
  // Sum all the values from fromN up to toN
  console.log(fromN)
  if(fromN === toN) {
    return toN;
  }
  return toN + sum(fromN, toN - 1);
}

module.exports = sum;