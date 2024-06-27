const express = require('express');
const mongoose = require('mongoose');
const app = express();
const port = 8000;
const cors = require('cors');
const Match = require('./db/MatchSchema');
const Team = require('./db/TeamSchema');
const User = require('./db/UserSchema');
const GeneratedTeam = require('./db/GeneratedTeams');
const MongoDBUrl = require('./db.config');

app.use(express.json());
app.use(cors());


async function connect() {
    await mongoose.connect(MongoDBUrl);
    console.log('Connected to database');
}

connect();

//user routes
app.post("/user/new", async(req, res) => {
    const email = req.body.email;
    const newUser = new User({email});
    console.log(newUser)
    try{
        await newUser.save();
        console.log("User created");
        res.json({
            message: "User created"
        })
    }
    catch(err){
        console.log(err.message);
        res.json({
            message: err.message
        })
    }
});

app.get('/user/:email', async(req, res) => {
    const email = req.params.email;
    const user = await User.findOne({
        email: email
    });
    console.log(user);
    res.send(user);
});


// match routes
app.get('/matches', async(req, res) => { //get the all matches
    const response = await Match.find({});
    res.send(response);
});

app.post('/matches', async(req, res) => {
    const matches = req.body.matches;
    matches.forEach(async(match) => {
        const newMatch = new Match(match);
        await newMatch.save();
    });
    res.send({
        message: "Matches saved"
    });
});

// team routes
app.get('/teams', async(req, res) => { // route to get all teams
    const response = await Team.find();
    console.log(response)
    res.send(response);
});

app.post('/team/new', async(req, res) => {
    const team = req.body;
    const newTeam = new Team(team);
    await newTeam.save();
    res.send(newTeam);
});

app.get('/generated/teams', async(req, res) => {
    const response = await GeneratedTeam.find();
    res.send(response);
});

app.post('/generated/teams', async(req, res) => {
    const teams = req.body.teams;
    teams.forEach(async(team) => {
        const newTeam = new GeneratedTeam(team);
        await newTeam.save();
    });
    res.send({
        message: "Teams saved"
    });
});




app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
}
);


