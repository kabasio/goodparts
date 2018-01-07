/* console.log(add(3, 5));

 const myObject = {
  value: 0,
  increment: function(inc) {
    const added = typeof inc === 'number' ? inc : 1;
    console.log(added);// 3
    console.log(this.value);
    this.value = this.value + added;
  },
};

myObject.double = function () {
//  const that = this;
  const helper = () => {
    this.value = add(this.value, this.value);
  };
  helper();
};

// helperは単品で実行されてるので、thisはグローバルオブジェクトを見に行ってしまう。
// それを回避するのがアロー関数
/* 
console.log('before double');
console.log(myObject.value);
myObject.double();
// result undefined
console.log('after double');
console.log(myObject.value);


// memo 19日はこのプロトタイプのところから
const Quo = function (str) {
  this.status = str;
};

console.log(Quo.status);// undefined

Quo.prototype.get_status = function () {
  return this.status;
};

const myQuo = new Quo('confused');

console.log(myQuo.get_status()); // confused 

const closet = 'pants';

if (closet === 'belt') {
  console.log('beltあるよ');
} else if (closet === 'pants') {
  console.log('pantsあるよ');
} else {
  console.log('pantsとbelt以外はあるかも…');
} */

// 2017/11/22

function add(a, b) {
  return a + b; //returnが来たら　関数の実行が終わる
}

add(3, 5); // 引数の書き方間違えた 

const myObject = {
  value: 0,
  increment: function (inc) {
    this.value += typeof inc === 'number' ? inc : 1;
    //this.value = this.value + typeof inc === 'number' ? inc : 1; と同じ
  },
};

myObject.increment();
console.log(myObject.value);

myObject.increment(2); // ちゃんと増える
console.log(myObject.value);

// ▼内部関数から、外部関数と同じthisをとってくる

function add(a, b) {
  return a + b; //returnが来たら　関数の実行が終わる
}

myObject.double = function() {
  const that = this; 

  const helper = function() {
    that.value = add(that.value,that.value); //myObjectのvalueにアクセスできている
  };

  helper(); //実行時コンテキスト ( XXX.xxx )がないとthisはグローバルになる
}

myObject.double(); // myObject.valueの値がnのとき、2nが入る
console.log(myObject.value);


const sum = add(3, 4);
console.log(sum);

// コンストラクタ呼び出しパターン

const Quo = function(str) {
  this.status = str;
}; // 文字列を引数に取り、受け取った文字列をQuo.statusに格納する

Quo.prototype.get_status = function() {
  return this.status;
}; // Quoのprototypeプロパティにget_statusメソッドを持たせることで、Quoのインスタンスで利用可能にする

const myQuo = new Quo('confused'); // Quoのインスタンスを生成する new演算子がついている関数をコンストラクタと呼ばれる
console.log(myQuo.status); //confusedが出力される

// apply 呼び出しパターン

const array = [3, 4]; 
const Sum = add.apply(null, array); // thisにnullが入る? addは引数に3,4を取って実行される
console.log(Sum); //7

const statusObject = {
  status: 'A-OK',
};

const status = Quo.prototype.get_status.apply(statusObject); 
console.log(status); // A-OK

const SUM = function () {
  let i, SUM = 0; //空の変数i SUMを初期化
  for (i = 0; i < arguments.length; i += 1) {
      SUM += arguments[i];
  } // argumentの配列に含まれる数値をSUMに足していく
  return SUM; // SUMの値を返す
};

console.log(SUM(4, 8, 15, 16, 23, 42)); // 108

// p37 例外

const plus = function(a,b) {
  if (typeof a !== 'number' || typeof b !=='number') {
    throw {
      name: 'TypeError',
      message:'add needs number',
    };
  }
  return a + b;
};

const try_it = function () {
  try {
    plus('seven');
  } catch (e) {
      console.log(e.name + ':' + e.message);
  }
};
try_it(); 

// p38 変数型の拡張

Function.prototype.method = function (name, func) {
  this.prototype[name] = func;
  return this;
};

console.log(plus.method); //[Function]

console.log( -10 / 3); //-3.3333333333...

Number.method('integer', function() {
  return Math[this < 0 ? 'ceil' : 'floor'](this);
});

console.log((-10.5).integer());

console.log((-10 / 3).integer());

// 再帰

const hanoi = function (disc, src, aux, dst) {
  if (disc > 0) {
    hanoi (disc - 1, src, dst, aux);
    console.log('Move disc' + disc + 'from' + src + 'to' + dst);
    hanoi(disc - 1, aux, src, dst);
  }
};

hanoi(3, 'Src','Aux', 'Dst');
