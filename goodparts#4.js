const add = function (a, b) {
  return a + b;
};

console.log(add(3, 5));

/* const myObject = {
  value: 0,
  increment: function(inc) {
    const added = typeof inc === 'number' ? inc : 1;
    console.log(added);// 3
    console.log(this.value);
    this.value = this.value + added;
  },
};

myObject.increment(3);
console.log(myObject.value); // 1
*/

const myObject = {
  value: 0,
  increment: (inc) => {
    this.value += typeof inc === 'number' ? inc : 1;
    console.log(this.value);
  },
};

myObject.increment();

console.log(myObject.value);// 1
