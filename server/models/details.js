const mongoose = require("mongoose");

// Connect to the database
const connectDb = async () => {
    try {
        await mongoose.connect(
            "mongodb+srv://infotaskganeshkumar:4qT7H4xPrbgA1r8q@cluster0.cjgi744.mongodb.net/your-database-name?retryWrites=true&w=majority",
            {
                useNewUrlParser: true,
                useUnifiedTopology: true,
            }
        );
        console.log('Connected to MongoDB');
    } catch (error) {
        console.error('Error connecting to MongoDB:', error);
    }
};
const detailSchema = new mongoose.Schema({
  fName:String,
  lName:String,
  place:String,
  Experience:Number,
  Image:String,
});

const Details = mongoose.model("Detail", detailSchema);

module.exports = { connectDb, Details };
