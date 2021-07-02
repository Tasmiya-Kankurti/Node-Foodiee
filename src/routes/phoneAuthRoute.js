const express = require('express')
const router = express.Router()
const config = require('../../config/')

const client = require("twilio")(config.accountSID, config.authToken)

router.get('/login',(req, res) => {
    client
        .verify
        .services(config.serviceID)
        .verifications
        .create({
            to: `+91${req.query.mobnumber}`,
            channel: req.query.channel
        }).then((data) => {
            res.status(200).send(data)
        }).catch((error) => {
            res.status(500).send({
                error: {
                    message: error.message
                }
            })
        })
})

router.get('/verify', (req, res) => {
    client
        .verify
        .services(config.serviceID)
        .verificationChecks
        .create({
            to: `+91${req.query.mobnumber}`,
            code: req.query.code
        }).then((data) => {
            res.status(200).send(data)
        }).catch((error) => {
            res.status(500).send({
                error: {
                    message: error.message
                }
            })
        })
})

module.exports = router