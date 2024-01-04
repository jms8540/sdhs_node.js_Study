const _ = require('lodash')
const User = require('../../DB/users.schema')

module.exports = {
    path: '/signup',
    method: 'post',
    handler: async (req, res) => {
        const user = _.pick(
            req.body,
            [
                'id',
                'password',
                'name',
                'age'
            ]
        )

        async function duplicatedUser() {
            return await User.findOne({id: user.id})
        }

        if (await duplicatedUser() === null) {
            await User.create(user)
            return res.json({ success: true })
        }
        return res.status(400).json({ success: false })

    }
}