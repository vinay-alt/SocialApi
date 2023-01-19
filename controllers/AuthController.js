import User from '../models/User.js';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken'
import dotenv from 'dotenv';
import Token from '../models/token.js'

dotenv.config();

export const Auth = async (req, res) => {
    let user = await User.findOne({ email: req.body.email });
    if (!user) {
        return res.status(400).json({msg:"Email does not exist"});
    }
    try {
        let match = await bcrypt.compare(req.body.password, user.password);
        if (match) {
            const accessToken = jwt.sign(user.toJSON(), process.env.ACCESS_SECRET_KEY, {expiresIn: '15m'});
            const refreshToken = jwt.sign(user.toJSON(), process.env.REFRESH_SECRET_KEY);
            const newToken = new Token({token: refreshToken});
            await newToken.save();
            console.log(newToken);
            return res.status(200).json({ 
                accessToken: accessToken,
                refreshToken: refreshToken,
                name: user.name,
                username: user.username
            });
        } else {
            return res.status(400).json({msg: "Password does not match"});
        }
    } catch (error) {
        return res.status(500).json({msg: "Error while logging in"});
    }
}