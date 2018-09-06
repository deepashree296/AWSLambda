'use strict';

const co = require("co");
const Promise = require("bluebird")
const fs = Promise.promisifyAll(require("fs"));

var html;

function* loadhtml() {
    if(!html) {
        html =  yield fs.readFileAsync('static/index.html', 'utf-8')
    }
    return html;
}



module.exports.handler = co.wrap(function* (event, context, callback) {

    let html = yield loadhtml();
    const response = {

    statusCode: 200,
    body: html,
    headers: {
        'Content-Type': 'text/html; charset=UTF-8'
        }
    };

    callback(null, response);

});