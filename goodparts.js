var stooge = {
    age: 1,
    'first-name': 'Jerome',
    'last-name': 'Howard',
}; //　_ だったらクオートいらん

console.log(stooge['first-name']); // exception
console.log(stooge.age); // good
console.log(stooge['age']) // bad

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

for (let i = 0; i < response.length; i++) {
    // generate post html
    const post = response[i];
    renderPlaceName(post.place && post.place.name);
}


var response = [post, post2, post3];


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

console.log(flight.departure.IATA);
console.log(flight.status && flight.status.hoge);


