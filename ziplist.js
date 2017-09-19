function zipList(a, b) {
  const array = [];
  for (let x = 0; x < a.length; x++) {
    array.push(a[x]);
    array.push(b[x]);
  }
  return array;
}

function zipListTheSimpleWay(a, b) {
  return _.flatten(_.zip(a, b));
}
const a = [1, 2, 3];
const b = ['a', 'b', 'c'];
console.log(zipList(a, b));
console.log(zipListTheSimpleWay(a, b));

