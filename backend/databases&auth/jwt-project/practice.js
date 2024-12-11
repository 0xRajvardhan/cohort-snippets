const express = require('express');
const mongoose = require('mongoose');
const app = express();

app.use(express.json());
mongoose.connect("mongodb+srv://<admin>:<password>@cohort-2.1nevx.mongodb.net/?retryWrites=true&w=majority&appName=Cohort-2")

const User = mongoose.model('Users', { name: String, email: String, password: String });

app.post('/signup', async (req, res) => {
    const username = req.body.username;
    const password = req.body.password;
    const name = req.body.name;

    const existingUser = await User.findOne({email:username})
    if(existingUser){
        return res.status(400).send("Username already exists");
    }
    
    const user = new User({
        name: name,
        email:username,
        password:password
    });
    User.save();
    res.json({
        "msg": "User successfully created"
    })
})

app.listen(3000);