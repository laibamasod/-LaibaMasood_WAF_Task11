const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");


const app = express();

app.use(express.json());
app.use(cors());

const mongoString =
  "mongodb+srv://laibamasoodd:MnuueCzB5KwV7MSE@cluster1.nzmhecm.mongodb.net/cv";
mongoose
  .connect(mongoString, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .catch((err) => console.error("MongoDB connection error", err));
const db = mongoose.connection;

db.once("open", () => {
  console.log("DB connected");
});

// Schema and Model

const UserSchema = new mongoose.Schema({
  name: String,
  address: String,
  email:String,
  number: String,

});
const User = mongoose.model("userdata", UserSchema);



// Routes

app.get("/getUser", async (req, res) => {
  
  try {
    const user= await User.find();
    res.send(user);
  }catch (error) {
    res.status(500).send(error);
  }
  
});


app.post("/createUser", async (req, res) => {
  try {
    const user = new User(req.body);
    await user.save();
    res.send(user);
  } catch (error) {
    res.status(500).send(error);
  }
});





app.listen(8080, () => {
  console.log("Server running on port 8080");
});
