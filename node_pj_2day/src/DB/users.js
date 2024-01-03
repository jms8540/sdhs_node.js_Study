const encryptPassword = require("../lib/encryptPassword")
const { v4: uuidv4 } = require('uuid')

module.exports = [{
    idx: uuidv4(),
    id: 'digitech1',
    password: encryptPassword('thisispassword'),
    name: '전민수',
    age: 19,
    phonNumber: '010-0000-0000'
}]



