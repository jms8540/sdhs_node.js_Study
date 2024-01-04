const mongoose = require('mongoose')

const password = 'qSIYNOQ8Ot52Icdt'
const connectionString = `mongodb+srv://sdh220417:${password}@jms.jdev1hm.mongodb.net/?retryWrites=true&w=majority`

module.exports = async function () {
    await mongoose.connect(connectionString)
    console.log('connected');
}