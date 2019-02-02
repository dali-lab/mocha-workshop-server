import User from '../models/user';

const updateUser = (userId, info) => {
    const { username = null, password = null, email = null } = info;
    console.log(userId);

    return User.findOne({ _id: userId }).then((user) => {
        if (username) {
            user.username = username;
        }
        if (password) {
            user.password = password;
        }
        if (email) {
            user.email = email;
        }

        return user.save();
    });
};

const UserController = { updateUser };

export default UserController;
