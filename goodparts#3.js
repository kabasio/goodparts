
const stooge = {
  first_name: 'James',
  last_name: 'Howrd',
};

const x = stooge;
x.nickname = 'Curly';
const nick = stooge.nickname;

console.log(nick);

// x と stoogeは同じオブジェクトを参照しているため nick の値は Curly になる。
// typeofのnullの戻り値は'object'なので、nullが値に入ってる時のチェックにtypeof演算子は使えない 

console.log(typeof 'こんにちは');
// 'こんにちは'のデータ型を文字列'string'で返してくれるよ。

const flight = {
  airline: 'Oceanic',
  number: 815,
  depature: {
    IATA: 'SYD',
    city: 'Sydney',
  },
  arrival: {
    IATA: 'LAX',
    time: '2004-09-23 10:42',
  },
};

console.log(typeof flight.airline); // string
console.log(typeof flight.arrival); // object
console.log(typeof flight.manifest); // undefined

if (typeof Object.create !== 'function') {
  Object.create = function (o) {
    const F = function () {};
    F.prototype = o;
    return new F();
  };
}
const anotherStooge = Object.create(stooge);
// Object.prototaype

anotherStooge.first_name = 'Harry';
anotherStooge.middle_name = 'moses';
anotherStooge.nickname = 'Moe';

stooge.profession = 'actor';

console.log(typeof flight.toString); // 

// 大文字で始まる関数 === constractor というらしい

console.log(anotherStooge.last_name); // 'Howrd'
console.log(anotherStooge.profession);// 'actor'

anotherStooge.hasOwnProperty('profession');
// 関数をつくると、nameの値に関数名が入ってるconstractorっていうオブジェクトがprototypeのなかにできる

/* const func = function() {
~~~~~
};

func.prototype = {
  constractor:{
    argument: null;
    caller: null;
    length: 1;
    name: func;
    __proto__:
  }
}
__proto__:Object

*/
console.log(flight.hasOwnProperty('flight')); //
