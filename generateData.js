const { fake, random } = require('faker');
var faker = require('faker');

var database = { stocks: [], tags: []};


// using set to prevent duplicate tags, looping for 20 is typically enough for 15+ tags 
let tags = new Set(); 
for (let i = 0; i < 20; i++) {
    tags.add(faker.company.bsNoun()); 
}

database.tags = [...tags].map((tag, tagIndex) => {
    return {id: tagIndex + 1, name: tag};
}); 

for (let j = 1; j < 76; j++) {
    let name = faker.company.companyName(); 
    let price =  (Math.random() * 1500 + 30).toFixed(2); 
    let randomTag  = database.tags[Math.floor((Math.random() * database.tags.length))];
    let symbol  = name.substr(0, j % 2 ? 3 : 4).toUpperCase();

    database.stocks.push({
        name: name, 
        symbol: symbol,
        last_price: price,
        market_cap: Math.floor((Math.random() * 1000000000) + 1) * price,
        tag: randomTag
    });
}

console.log(JSON.stringify(database));