import User from '../models/user.js';
import bcrypt from 'bcryptjs';
import dotenv from 'dotenv'
import jwt from 'jsonwebtoken';

dotenv.config();
const SECRET_KEY = process.env.SECRET_KEY;


const register = async (req, res) => {
    try {
        const { name, email, password } = req.body;
        // Check if the user already exists
        const existingUser = await User.findOne({ email });
        if (existingUser) {
          throw new Error('User already exists');
        }

        const hashedPassword = await bcrypt.hash(password, 10);
        const newUser = new User({
          name,
          email,
          password: hashedPassword,
        });
    
        // Save the user to the database
        await newUser.save();
    
        res.status(201).json(newUser);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

const login = async (req, res) => {

    try {
      const { name, email, password } = req.body; // Unpack name, email, and password from req.body
  
      // Check if the user exists by email
      const user = await User.findOne({ email });
      if (!user) {
        return res.status(404).json({ success: false, message: 'User not found' });
      }
  
      const isPasswordValid = await bcrypt.compare(password, user.password);
      if (!isPasswordValid) {
        return res.status(401).json({ success: false, message: 'Invalid password' });
      }

      // User authenticated -> create a token
      var payload = { email: email }
      var options = { expiresIn: 86400 * 30 } // expires in 24 hours
      var token = jwt.sign(payload, SECRET_KEY, options);

      var out = {
        username: user.name,
        email: user.email,
        id: user.id,
        token: token
      };
      res.status(200).json(out);
  
    } catch (error) {
      console.error(error);
      return res.status(500).json({ success: false, message: 'Server error' });
    }
};

export default { register, login };