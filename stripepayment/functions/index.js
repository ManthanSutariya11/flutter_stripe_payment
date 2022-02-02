const functions = require("firebase-functions");
const stripePayment = require('stripe')(functions.config().stripe.secret_key);

exports.stripePaymentTest = functions.https.onRequest(async (req, res) => {
    const paymentIntent = await stripePayment.paymentIntents.create({
        amount: parseInt(req.body.amount),
        currency: req.body.currency
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