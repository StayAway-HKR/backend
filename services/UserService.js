const User = require('../models/User.js');

module.exports = {
    fetchUserObject: async (data) => {
        return await User.findOne(data);
    },
    saveNewUser: async (data) => {
        const newUser = new User(data);
        await newUser.save();
    },
}