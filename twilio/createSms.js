require("dotenv").config();
const { accountSid, authToken, fromNumber } = require("../config/config");
const twilioClient = require("twilio")(accountSid, authToken);

const createSms = (phone, message, res) => {
  twilioClient.messages
    .create({
      body: message,
      from: fromNumber,
      to: phone,
    })
    .then((message) => {
      console.log(
        `A SMS was sent to ${phone}, with message SID ${message.sid}.`
      );
      res.status(200).send({
        message: `message sent to ${phone}, with message SID ${message.sid}.`,
      });
    })
    .catch((err) => {
      console.log(err);
    });
};

module.exports = createSms;
