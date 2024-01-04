const _ = require('lodash')
const express = require('express')
const app = express()
const moduleAlias = require('module-alias')

moduleAlias.addAliases({
    '@root' :__dirname,
    '@db' :__dirname+'/DB',
    '@routes' :__dirname+'/server/routes',
    '@lib' :__dirname+'/lib',
    '@server' :__dirname+'/server',
})

const signupRoute = require('@routes/users/signup')
const signinRoute = require('@routes/users/signin')
const usersmeRoute = require('@routes/users/usersme')
const usersRoute = require('@routes/users/users')
const updateUserRoute = require('@routes/users/updateUser')
const deleteUserRoute = require('@routes/users/deleteUser')

const createPosts = require('@routes/posts/createPost')

const dbConnect = require('@db/connect')
const initExpressApp = require('@server/initExpressApp')

async function bootstrap() {
    console.log('DB 접속 시도')
    await dbConnect()
    console.log('DB 접속 완료')

    initExpressApp(app)
    
    const routes = [
        signinRoute,
        signupRoute,
        usersmeRoute,
        usersRoute,
        updateUserRoute,
        deleteUserRoute,
        createPosts
    ]

    routes.forEach(route => {
        app[route.method](route.path, (req, res) => {
            route.handler(req, res)
                .catch((err) => {
                    console.error('Api Error', err)

                    const [statusCode, errorMessage] = err.message.split(':')

                    return res
                        .status(statusCode)
                        .json({
                            success: false,
                            message: errorMessage
                        })
                })
        })
    })

    const port = 3000
    app.listen(port, () => {
        console.log(`App is running on port: ${port}`)
    })
}
bootstrap()
    .catch(err => {
        console.error('에러 발생!', err)
    })

//npm i mongoose
//qSIYNOQ8Ot52Icdt


app.get('/users', (req, res) => {
    return res.json(users)
})



app.delete('/users/:userId', (req, res) => {
    const { userId } = req.params

    const filterFunc = (user) => {
        if (user.idx !== userId) return true
        return false
    }

    users = users.filter(filterFunc)

    return res.json({ success: true })
})


