const User = require('../models/User.js');

module.exports = {
    addUser: async () => {
        const user = new User({
            email: "emilHansen@hotmail.ok",
            userName: "Mongozilla",
            password: "hkr1234"

        });
        user.save();
    },
    fetchUser: async (_id) => {
        const user = await User.findOne({ _id: _id });
        return user;
    }

}