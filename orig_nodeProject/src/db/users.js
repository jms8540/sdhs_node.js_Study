const { v4: uuidv4 } = require('uuid')
const encryptPassword = require('../lib/encryptPassword')

module.exports = [{
    idx: uuidv4(),
    id: 'digitech1',
    password: encryptPassword('thisispassword'),
    name: '홍길동',
    gender: 'male',
    age: 21,
    phoneNumber: '010-0000-0000'
}]