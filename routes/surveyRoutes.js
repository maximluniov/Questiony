const _ = require('lodash');
const { Path } = require('path-parser');
const { URL } = require('url')
const mongoose = require('mongoose');
const requireLogin = require('../middlewares/requireLogin')
const requireCredits = require('../middlewares/requireCredits')
const surveyTemplate = require('../services/emailTemplates/surveyTemplate')
const Survey = mongoose.model('surveys');
const Mailer = require('../services/Mailer')

module.exports = (app) => {

    app.get('/api/surveys', requireLogin, async (req, res) => {
        const surveys = await Survey.find({
            _author: req.user.id
        }).select({recipients:false})
        res.send(surveys);
    });

    app.get('/api/surveys/:surveyId/:choise', (req, res) => {
        res.send("Thanks for voting")
    })


    app.post('/api/surveys/webhooks', (req, res) => {
        
        const p = new Path('/api/surveys/:surveyId/:choise');   
        const events = req.body.map(({ email, url }) => {
            const match = p.test(new URL(url).pathname);
            if (match) {
                return { email, surveyId: match.surveyId, choise: match.choise };
            }
        });


        _.chain(events)
            .compact().uniqBy("email", "surveyId")
            .each(({ surveyId, email, choise }) => {
                Survey.updateOne({
                    _id: surveyId,
                    recipients: {
                        $elemMatch: { email: email, responded: false }
                    }
                }, {
                    $inc: { [choise]: 1 },
                    $set: { 'recipients.$.responded': true },
                    lastResponded: new Date()
                }).exec()
            })
            .value();


        res.send({})


    })


    app.post('/api/surveys', requireLogin, requireCredits, async (req, res) => {
        const { title, subject, body, recipients } = req.body;

        const survey = new Survey({
            title,
            subject,
            body,
            recipients: recipients.split(',').map(email => ({ email: email.trim() })),
            _author: req.user.id,
            dateSent: Date.now()
        })

        const mailer = new Mailer(survey, surveyTemplate(survey));
        try {
            await mailer.send();
            await survey.save();
            req.user.credits--;
            const user = await req.user.save();
            res.send(user);
        }
        catch (err) {
            res.status(422).send(err);
        }
    });
};