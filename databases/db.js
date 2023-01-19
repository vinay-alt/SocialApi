import mongoose from 'mongoose';

const Conn = async (u, p) => {
    const URL = `mongodb+srv://${u}:${p}@cluster0.tyn1a.mongodb.net/?retryWrites=true&w=majority    `;
    try {
        mongoose.set('strictQuery', true);
        await mongoose.connect(URL, { useNewUrlParser:true,  });
        console.log("database connected successfully");
    } catch (error) {
        console.log("Error in db.js : ", error)
    }
}

export default Conn;