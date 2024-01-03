const users = require('../../DB/users')

module.exports = {
    path: '/signin',
    method: 'post',
    handler: (req, res)=> {
        const {id, password} = req.body
        let success = false
    
        function findUserByIdAndPassword(){
            const user = users.find(user => {
                return user.id === id && user.password == encryptPassword(password)
            })
            return user
        }   
        
        const user = findUserByIdAndPassword()
        if(user2 !== undefined){
            return res.json(false)
        }    
        if(user !== undefined){
            success = true
            req.session.idx = user.idx
        }
    
        return res.json({success})
    }
}