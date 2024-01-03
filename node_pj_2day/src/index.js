const _ = require('lodash')
const { v4: uuidv4 } = require('uuid')
const crypto = require('crypto')
const express = require('express')
const app = express()

app.use(express.json())

function encryptPassword (password) {
    return crypto
        .createHash('sha256')
        .update(password + '#0g830T8Ha)*fdH9312R{}')
        .digest('base64')
}

let users = [{
    idx: uuidv4(),
    id: 'digitect1',
    password: encryptPassword('thisispassword'),
    name: '홍길동',
    gender: 'male',
    age: 21,
    phoneNumber: '010-0000-0000'
}]

app.post('/signup', (req, res) => {
    const user = _.pick(
        req.body,
        [
            'id',
            'password',
            'name',
            'gender',
            'age',
            'phoneNumber'
        ]
    )

    users.push(Object.assign(user, { idx: uuidv4() }))

    return res.json({ success: true })
})

app.post('/signin', (req, res)=> {
    const {id, password} = req.body
    let success = false

    function isUserByIdAndPassword(){
        const user = users.find(user =>{
            return user.id === id && user.password == encryptPassword(password)
        })
        return user !== undefined
    }    
    
    if(isUserByIdAndPassword){
        success = true
    }

    return res.json({success})
})

app.get('/users', (req, res) => {
    return res.json(users)
})

app.patch('/users/:userId', (req, res) => {
    const { userId } = req.params
    const body = req.body

    // for (let i = 0; i < users.length; i++) {
    //     if (users[i].id === userId) {
    //         if (req.body.name !== undefined) {
    //             users[i].name = req.body.name
    //         }
    //     }
    // }

    // for (let i = 0; i < users.length; i++) {
    //     if (users[i].id === userId) {
    //         const newUser = _.pick(req.body, ['name', 'age', 'gender', 'phoneNumber'])
    //         Object.assign(users[i], newUser)
    //     }
    // }

    const userIndex = users.findIndex((user) => {
        return user.idx === userId
    })
    const newUser = _.pick(req.body, ['id', 'password', 'name', 'age', 'gender', 'phoneNumber'])

    // falsy

    if (newUser.password) {
        newUser.password = encryptPassword(newUser.password)
    }

    Object.assign(users[userIndex], newUser)

    return res.json({ success: true })
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

const port = 3000
app.listen(port, () => {
    console.log(`App is running on port: ${port}`)
})

