var stooge = {
    age: 1,
    'first-name': 'Jerome',
    'last-name': 'Howard',
}; //　_ だったらクオートいらん

stooge['middle-name'] = 'Lester';
stooge.nickname = 'Curly';
stooge['first-name'] = 'Kabashima';

console.log(stooge['first-name']); // exception
console.log(stooge.age); // good
console.log(stooge['age']) // bad

console.log(stooge.nickname);
console.log(stooge['middle-name']);

var response = [
    {
        id: 'osaifoihweksafj',
        imgPath: 'https://path.to.img/xxxxxxxxx',
        place: {
            name: '一風堂 ...',
            geo: '13204789078324',
        },
        comments: [],
    },
    {
        id: 'uiqpwerhk;hasdf',
        imgPath: 'https://path.to.img/xxxxxxxxx',
        place: null,
        comments: [],
    },
];

/*
for (let i = 0; i < response.length; i++) {
    // generate post html
    const post = response[i];
    renderPlaceName(post.place && post.place.name);
}
*/

//var response = [post, post2, post3];

var flight = {
    airline: 'Oceanic',//文字列
    number: 815,//数字
    departure: {
        IATA: 'SYD',
        time: '2004-09-22 14:55',
        city: 'Los Angeles'
    },//オブジェクト
    arrival: {
        IATA: 'LAX',
        time: '200409-23 10:42',
        city: 'Los Angeles'
    }//オブジェクト
};

flight.equipment = {
    model:'Boeing 777'
};

flight.status = 'overdue';

console.log(flight.departure.IATA);
console.log(flight.status && flight.status.hoge);
console.log(flight.status);

//undefinedに対してさらにそのプロパティを取得しようとすると
//TypeErrorが起きてしまうため、　＆＆演算子を使ってそれを防ぐ
//→最初にfalseが返されると、そのあとを見に行かなくなるから

//関数・配列・オブジェクトは参照渡し(メモリの番地を教えるよ)

const shiobject =function(o){
    const F = function(){}
    F.prototype = o; //__proto__に入る
    return new F();
};


const obj = {
    name:'shiori'
};

console.log(obj.name);

if(obj.__proto__ == Object.prototype){
    console.log('trueです');
};

const ary = [1];
if (ary.__proto__ == Array.prototype) {
    console.log('trueだにゃ');
}

if (Array.prototype.__proto__ == Object.prototype) {
    console.log('trueだにゃ');
}

const num = 1;
if (num.__proto__ == Number.prototype) {
    console.log('trueでごわす');
}