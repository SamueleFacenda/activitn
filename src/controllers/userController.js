import User from '../models/user.js';

const createUser = async (req, res) => {
    const user = new User(req.body);
    try {
        await user.save();
        res.status(201).json(user);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

const getAllUsers = async (req, res) => {
    const users = await User.find();
    res.json(users);
};
export default { createUser, getAllUsers };