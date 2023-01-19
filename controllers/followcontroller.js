import Follow from '../models/follow.js';


// export const follow = (req, res) => {
//     console.log(req.params.id);
//     try {

//     }
// }


export const follow = async (req, res) => {
    let user
    try {

        const followdata = new Follow();
        await newToken.save();
        console.log(newToken);
        return res.status(200).json({ 
            accessToken: accessToken,
            refreshToken: refreshToken,
            name: user.name,
            username: user.username
        });
    } catch (error) {
        return res.status(500).json({msg: "Error while logging in"});
    }
}