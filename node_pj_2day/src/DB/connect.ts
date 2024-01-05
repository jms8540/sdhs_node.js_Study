import mongoose from 'mongoose'

const id: string = 'wjsalstn1031'
const password = 'qSIYNOQ8Ot52Icdt'
const connectionString = `mongodb+srv://sdh220417:${password}@jms.jdev1hm.mongodb.net/?retryWrites=true&w=majority`

export async function connectDB (): Promise<void> {
    await mongoose.connect(connectionString)
    console.log('connected!');
}