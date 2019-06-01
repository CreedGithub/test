let assert = require('chai').assert
let app = require('../script');

let offers = [
    {
        article_id: 1,
        buy: 2, // 2 buy
        discount: -1 // 1 offer
    },
    {
        article_id: 3,
        buy: 3, // 3 buy
        discount: -1 // 1 offer
    }
];

let cart = [
    {
        article_id: 1,
        quantity: 4
    },
    {
        article_id: 2,
        quantity: 3
    },
    {
        article_id: 3,
        quantity: 5
    }
];

describe('App', function () {
    describe('Calculation price', function () {
        it('should work', function () {    
            assert.equal(app.calculationPrice(cart, offers), 5.1);
        });
        
        it('should work', function () {
            let offers = [
                {
                    article_id: 1,
                    buy: 3, // 2 buy
                    discount: -1 // 1 offer
                },
                {
                    article_id: 3,
                    buy: 3, // 3 buy
                    discount: -1 // 1 offer
                }
            ];
            let result =  Math.round(app.calculationPrice(cart, offers) * 100) / 100;
            assert.equal(result, 5.3);
        });

        it('should work', function () {  
            let cart = [
                {
                    article_id: 1,
                    quantity: 2
                },
                {
                    article_id: 2,
                    quantity: 3
                },
                {
                    article_id: 3,
                    quantity: 5
                }
            ];  
            assert.equal(app.calculationPrice(cart, offers), 4.9);
        });

    });
});
