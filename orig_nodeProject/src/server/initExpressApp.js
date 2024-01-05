const express = require('express')
const session = require('express-session')
const methodOverride = require('method-override')

module.exports = function (app) {
    app.set('trust proxy', 1) // trust first proxy
    app.use(session({
        secret: 'asjk)$#*t0q8hasd',
        cookie: { secure: false }
    }))
    app.use(express.json())
    app.use(express.urlencoded({ extended: true }))
    app.use(express.static('static'))
    app.use(methodOverride('_method'))
}