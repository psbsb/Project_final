"use strict";
const TranslateDB = require('../models/translateDB');

var translateDB = new TranslateDB();

function addTranslate(request, respond) {
    var now = new Date();
    var translate = new translate(request.body.text);
    translateDB.addTranslate(comment, function (error, result) {
        if (error) {
            respond.json(error);
        }
        else {
            respond.json(result);
        }
    });
}
module.exports = {addTranslate};
