// server.js
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
app.use(express.json());
app.use(cors());

// Connect to MongoDB
mongoose.connect('mongodb+srv://rafayrepo:<CGknAtFtTwQLBxdA>@studentlist.yl5ty.mongodb.net/?retryWrites=true&w=majority&appName=studentlist', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(() => console.log("MongoDB connected"))
  .catch(err => console.error(err));

// Define a schema and model
const UserSchema = new mongoose.Schema({ name: String, email: String });
const User = mongoose.model('User', UserSchema);

// API endpoint to fetch data
app.get('/users', async (req, res) => {
    const users = await User.find();
    res.json(users);
});

// Start the server
app.listen(5000, () => console.log('Server running on port 5000'));
