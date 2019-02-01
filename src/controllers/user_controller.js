import User from '../models/user';

const updateUser = async (req, res, next) => {
    const { username, password, email } = req.body;

    User.findById(req.user.id).then((user) => {
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
