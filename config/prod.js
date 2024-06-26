//keys for production

module.exports = {
    googleClientID:process.env.GOOGLE_CLIENT_ID,
    googleClientSecret:process.env.GOOGLE_CLIENT_SECRET,
    mongoURI: process.env.MONGO_URI,
    cookieKey: process.env.COOKIE_KEY,
    stripePublishableKey: process.env.stripePublishableKey,
    stripeSecretKey: process.env.stripeSecretKey,
    sendGridKey: process.env.sendGridKey,
    redirectDomain: process.env.redirectDomain
}