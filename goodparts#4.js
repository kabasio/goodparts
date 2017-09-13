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
  increment(inc) {
    this.value += typeof inc === 'number' ? inc : 1;
    console.log(this.value);
  },
};

myObject.increment();

console.log(myObject.value);// 1

const sum = add(3, 4);

console.log(sum); // 7

myObject.double = function () {
//  const that = this;

  const helper = () => {
    this.value = add(this.value, this.value);
  };

  helper();
};

// helperは単品で実行されてるので、thisはグローバルオブジェクトを見に行ってしまう。
// それを回避するのがアロー関数

console.log('before double');
console.log(myObject.value);
myObject.double();
// result undefined
console.log('after double');
console.log(myObject.value);

