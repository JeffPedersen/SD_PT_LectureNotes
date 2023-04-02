const express = require('express');
const app = express();
const PORT = 4003;
const log = console.log;
const cookieParser = require('cookie-parser');
const db = require("./db.json");

app.use(cookieParser());
// ^ provides us access to the middleware so that we can see what cookies are stored.

// Build a route(GET) to see/test/create a cookie http://localhost:4003/
app.get("/", (req, res) => {
    //log(req.cookies);

    // Setting some cookie data for our GET response
    res.cookie("cart", [
        {"item":'milk', "price":1.79}, 
        {"item":'cheese', "price": 2.99},
        {"item":'dog food', "price": 8.98}
    ]);
    
    // Set cookie data for our GET request
    const check = req.cookies;
    // log(check);
    // log(check.cart);

    let offer;

    check.cart.every((obj) => {
        // filter each item in db and compare if price is lower than in cart
        offer = db.filter((dbItem) => {
            dbItem.item == obj.item && db.item.price < obj.price; 
        });

        if(offer) {
            res.send({
                offer: `Our ${offer[0].item} is ${offer[0].price}!`,
                cookies: check
            })
        } else {
            res.send({
                cookies: check,
            });
    
        }
    });
    log(offer);

    // .every runs a function for each item in an array
    res.send(check.cart);
});

app.listen(PORT, log(`Server is running on port ${PORT}`));
