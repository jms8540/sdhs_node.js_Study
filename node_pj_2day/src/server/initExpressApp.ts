import express from 'express'
import session from 'express-session'
import methodOverride from 'method-override'

export function initExpressApp (app: express.Application): void {
    app.set('trust proxy', 1) // trust first proxy
    app.use(session({
        secret: 'ageert3r234!@!',
        cookie: {secure: false}
    }))
    app.use(express.json())
    app.use(express.urlencoded({extended: true}))
    app.use(express.static('static'))
    app.use(methodOverride('_method'))
}