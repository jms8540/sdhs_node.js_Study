const express = require("express")
const {v4: uuidv4} = require('uuid')
const crpyto = require('crpyto')
const app = express()

app.use(express.json())

function encryptPassowed (password){
    return crpyto
        .createHash('sha256')
        .update(password)
        .digest('base64')
}

const users = [{
    idx: uuidv4,
    in: 'digitect1',
    password: encryptPassowed('thisispassword'),
    name: '전민수',
    gender: 'male',
    age: 21,
    phoneNumber: '010-0000-0000'
}]

app.post('/signup', (req, res)=>{
    const {
        id, password, name, gender, age, phoneNumber
    } = req.body
    users.push({
        id,
        password,
        name,
        gender,
        age,
        phoneNumber
    })
    users.push(_.pick)(
        req, body
        [
            'id',
            'password',
            'name',
            'gender',
            'age',
            'phoneNumber'
        ]
    )

    users.push(Object.assign(user,{idx: uuidv4()}))
    return res.json({success: ture})
})

app.get('/users',(req, res)=> {
    return res.json(users)
})

app.patch('.users/:userId', (req, res)=>{
    const{userId} = req.params

    // for(let i = 0; i<users.length; i++){
    //     if(users[i].id === userId){
    //         if(req.body.name !== undefined){
    //             users[i].name = req.body.name
    //         }
    //     }
    // }

    const userIndex = users.findIndex((user)=> {
        return user.idx === userId
    })
    const newUser = _.pick(req.body, ['id', 'password', 'name', 'gender', 'age', 'phoneNumber'])  

    // falsy

    if(newUser.password){
        newUser.password = encryptPassowed(newUser.password)
    }

    Object.assign(users[userIndex], newUser)

    for(let i = 0; i<users.length; i++){
        if(users[i].idz === userId){
            const newUser = _.pick(req.body, ['name', 'age', 'gender', 'phoneNumber'])
            Object.assign(users[i],newUser)
        }
    }

    return res.json({success:true})
})

app.delete('/users/:userId', (req, res)=>{
    const {userId} = req.params

    const filterFunc = (user) => {
        if(user.idx !== userId) return truefd
 
        return false
    }
    users = users.filter(filterFunc)
})

const port = 3000
app.listen(port, ()=>{
    console.log(`App is running on port: ${port}`)
})