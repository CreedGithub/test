let articles = [
    {
        id: 1,
        name: "Apple",
        price: 0.2
    },
    {
        id: 2,
        name: "Orange",
        price: 0.5
    },
    {
        id: 3,
        name: "Watermelon",
        price: 0.8
    }];

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

let applyPromotion = (article, quantity) => {
    let findOffer = offers.find(val => val.article_id === article.id);
    if (undefined === findOffer) {
        return quantity * article.price;
    }
    let rest = quantity % findOffer.buy;
    // number of times the discount is applied
    let discountApplied = Math.floor(quantity / findOffer.buy);
    // replaces quantity purchased by quantity with discount
    let discountQuantity = discountApplied * (findOffer.buy + findOffer.discount) + rest;

    return discountQuantity * article.price;
};

let calculationPrice = () => {
    let price = 0;
    cart.forEach(el => {
        let article = articles.find(v => v.id === el.article_id);
        price += applyPromotion(article, el.quantity);
    })
    return price;
};
console.log(calculationPrice());