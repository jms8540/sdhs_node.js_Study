import User from '../DB/users.schema'

export default async function (id: string): Promise<boolean>{
    const user = await User.findOne({id})
    return user !== null
}