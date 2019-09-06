const fs = require('fs');
const path = require('path');
const utilPath = require('../util/path');
const p = path.join(utilPath, 'data', 'products.json');

const getProductsFromFile = (returnData) => {
    fs.readFile(p, (err, fileContent) => {
        if (err) {
            return returnData([]);
        }
        returnData(JSON.parse(fileContent));
    })
}

module.exports = class Product {
    constructor(title, imageURL, price, description) {
        this.title = title;
        this.imageURL = imageURL;
        this.price = price;
        this.description = description;
    }

    save() {
        getProductsFromFile(returnData => {
            returnData.push(this);
            fs.writeFile(p, JSON.stringify(returnData), (err) => {
                console.log(err);
            });
        });
    }

    static fetchAll(returnData) {
        getProductsFromFile(returnData);
    }
}