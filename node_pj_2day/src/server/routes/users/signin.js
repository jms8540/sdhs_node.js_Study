const User = require('@db/users.schema')
const encryptPassword = require('@lib/encryptPassword')

module.exports = {
    path: '/signin',
    method: 'post',
    handler: async (req, res)=> {
        const {id, password} = req.body

        async function findUserByIdAndPassword(){
            return await User.findOne({
                id, password: encryptPassword(password)
            })
        }   
        
        const user = await findUserByIdAndPassword()

        if(user === null){
            throw new Error('401: 아이디와 비번이 불일치.')
        }
        
        req.session._id = user._id

        return res.json({success: true})
    }
}