const express = require("express");
const route = express();
const stripetest = require('stripe')("YOUR_SECRET_KEY");



route.get('/', async (req, res) => {
    const paymentIntent = await stripetest.paymentIntents.create({
        amount: parseInt(req.query.amount),
        currency: req.query.currency,
    }, function (error, paymentIntent) {
        if (error != null) {
            console.log(error);
            res.json({ "error": error });
        } else {
            res.json({
                paymentIntent: paymentIntent.client_secret,
                paymentIntentData: paymentIntent,
                amount: req.body.amount,
                currency: req.body.currency
            });
        }
    });
});


module.exports = route;