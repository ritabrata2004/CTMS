const mongoose = require('mongoose');
const Match = require('./db/MatchSchema');
const Team = require('./db/TeamSchema');
const MongoDBUrl = require('./db.config');


async function connect() {
    await mongoose.connect(MongoDBUrl)
    console.log('Connected to database');
}

connect();


const generateRandomNumber = () => {
    return Math.floor(Math.random() * 101);
}

const matches = [
    {
        id: 1,
        date: '2021-09-01',
        time: '19:00',
        venue: 'Mumbai',
        team1: 'MI',
        team2: 'CSK',
        team1Platers:[
            {
                id: 1,
                playerName: 'Lionel Messi',
                position: 'Forward',
                score: generateRandomNumber(),
                wickets: 5
            },
            {
                id: 2,
                playerName: 'Gerard Pique',
                position: 'Defender',
                score: generateRandomNumber(),
                wickets: 1
            },
            {
                id: 3,
                playerName: 'Frenkie de Jong',
                position: 'Midfielder',
                score: generateRandomNumber(),
                wickets: 0
            },
            {
                id: 4,
                playerName: 'Marc-André ter Stegen',
                position: 'Goalkeeper',
                score: generateRandomNumber(),
                wickets: 0
            }
        ],
        team2Platers:[
            {
                id: 1,
                playerName: 'Cristiano Ronaldo',
                position: 'Forward',
                score: generateRandomNumber(),
                wickets: 0
            },
            {
                id: 2,
                playerName: 'Sergio Ramos',
                position: 'Defender',
                score: generateRandomNumber(),
                wickets: 1
            },
            {
                id: 3,
                playerName: 'Luka Modric',
                position: 'Midfielder',
                score: generateRandomNumber(),
                wickets: 0
            },
            {
                id: 4,
                playerName: 'Thibaut Courtois',
                position: 'Goalkeeper',
                score: generateRandomNumber(),
                wickets: 0
            }
        ]
    },
    {
        id: 2,
        date: '2021-09-02',
        time: '19:00',
        venue: 'Chennai',
        team1: 'RCB',
        team2: 'KKR',
        team1Platers: [
            {
                id: 1,
                playerName: 'Lionel Messi',
                position: 'Forward',
                score: generateRandomNumber(),
                wickets: 0
            },
            {
                id: 2,
                playerName: 'Gerard Pique',
                position: 'Defender',
                score: generateRandomNumber(),
                wickets: 1
            },
            {
                id: 3,
                playerName: 'Frenkie de Jong',
                position: 'Midfielder',
                score: generateRandomNumber(),
                wickets: 0
            },
            {
                id: 4,
                playerName: 'Marc-André ter Stegen',
                position: 'Goalkeeper',
                score: generateRandomNumber(),
                wickets: 0
            }
        ],
        team2Platers: [
            {
                id: 1,
                playerName: 'Cristiano Ronaldo',
                position: 'Forward',
                score: generateRandomNumber(),
                wickets: 0
            },
            {
                id: 2,
                playerName: 'Sergio Ramos',
                position: 'Defender',
                score: generateRandomNumber(),
                wickets: 1
            },
            {
                id: 3,
                playerName: 'Luka Modric',
                position: 'Midfielder',
                score: generateRandomNumber(),
                wickets: 0
            },
            {
                id: 4,
                playerName: 'Thibaut Courtois',
                position: 'Goalkeeper',
                score: generateRandomNumber(),
                wickets: 0
            }
        ]
    },
    {
        id: 3,
        date: '2021-09-03',
        time: '19:00',
        venue: 'Delhi',
        team1: 'DC',
        team2: 'PBKS',
        team1Platers: [
            {
                id: 1,
                playerName: 'Lionel Messi',
                position: 'Forward',
                score: generateRandomNumber(),
                wickets: 0
            },
            {
                id: 2,
                playerName: 'Gerard Pique',
                position: 'Defender',
                score: generateRandomNumber(),
                wickets: 1
            },
            {
                id: 3,
                playerName: 'Frenkie de Jong',
                position: 'Midfielder',
                score: generateRandomNumber(),
                wickets: 0
            },
            {
                id: 4,
                playerName: 'Marc-André ter Stegen',
                position: 'Goalkeeper',
                score: generateRandomNumber(),
                wickets: 0
            }
        ],
        team2Platers: [
            {
                id: 1,
                playerName: 'Cristiano Ronaldo',
                position: 'Forward',
                score: generateRandomNumber(),
                wickets: 0
            },
            {
                id: 2,
                playerName: 'Sergio Ramos',
                position: 'Defender',
                score: generateRandomNumber(),
                wickets: 1
            },
            {
                id: 3,
                playerName: 'Luka Modric',
                position: 'Midfielder',
                score: generateRandomNumber(),
                wickets: 0
            },
            {
                id: 4,
                playerName: 'Thibaut Courtois',
                position: 'Goalkeeper',
                score: generateRandomNumber(),
                wickets: 0
            }
        ]
    },
    {
        id: 4,
        date: '2021-09-04',
        time: '19:00',
        venue: 'Kolkata',
        team1: 'RR',
        team2: 'SRH',
        team1Platers: [
            {
                id: 1,
                playerName: 'Lionel Messi',
                position: 'Forward',
                score: generateRandomNumber(),
                wickets: 0
            },
            {
                id: 2,
                playerName: 'Gerard Pique',
                position: 'Defender',
                score: generateRandomNumber(),
                wickets: 1
            },
            {
                id: 3,
                playerName: 'Frenkie de Jong',
                position: 'Midfielder',
                score: generateRandomNumber(),
                wickets: 0
            },
            {
                id: 4,
                playerName: 'Marc-André ter Stegen',
                position: 'Goalkeeper',
                score: generateRandomNumber(),
                wickets: 0
            }
        ],
        team2Platers: [
            {
                id: 1,
                playerName: 'Cristiano Ronaldo',
                position: 'Forward',
                score: generateRandomNumber(),
                wickets: 0
            },
            {
                id: 2,
                playerName: 'Sergio Ramos',
                position: 'Defender',
                score: generateRandomNumber(),
                wickets: 1
            },
            {
                id: 3,
                playerName: 'Luka Modric',
                position: 'Midfielder',
                score: generateRandomNumber(),
                wickets: 0
            },
            {
                id: 4,
                playerName: 'Thibaut Courtois',
                position: 'Goalkeeper',
                score: generateRandomNumber(),
                wickets: 0
            }
        ]
    }
]

const teams = [
    {
        id: 1,
        teamName: 'RCB',
        coach: "Rahul",
        captain: "Captain",
        MP: 0,
        points: 0,
        players: [
            { id: 1, playerName: 'Cristiano Ronaldo', position: 'Batsman' },
            { id: 2, playerName: 'Sergio Ramos', position: 'Bowler' },
            { id: 3, playerName: 'Luka Modric', position: 'Wicket Keeper' },
            { id: 4, playerName: 'Thibaut Courtois', position: 'All Rounder' },
            { id: 5, playerName: 'Krish Gell', position: 'All Rounder' },
            { id: 6, playerName: 'Virat Kohli', position: 'Batsman' },
            { id: 7, playerName: 'Maxwell', position: 'All Rounder' },
            { id: 8, playerName: 'Rohit Sharma', position: 'Batsman' },
            { id: 9, playerName: 'Bumrah', position: 'Bowler' },
            { id: 10, playerName: 'Pandiya', position: 'All Rounder' }
        ]
    },
    {
        id: 2,
        teamName: 'CSK',
        coach: "Stephen",
        captain: "Dhoni",
        MP: 0,
        points: 0,
        players: [
            { id: 11, playerName: 'Sachin Tendulkar', position: 'Batsman' },
            { id: 12, playerName: 'Zaheer Khan', position: 'Bowler' },
            { id: 13, playerName: 'MS Dhoni', position: 'Wicket Keeper' },
            { id: 14, playerName: 'Yuvraj Singh', position: 'All Rounder' },
            { id: 15, playerName: 'Harbhajan Singh', position: 'All Rounder' },
            { id: 16, playerName: 'Ravindra Jadeja', position: 'All Rounder' },
            { id: 17, playerName: 'Shane Watson', position: 'All Rounder' },
            { id: 18, playerName: 'Suresh Raina', position: 'Batsman' },
            { id: 19, playerName: 'Jasprit Bumrah', position: 'Bowler' },
            { id: 20, playerName: 'Deepak Chahar', position: 'Bowler' }
        ]
    },
   
    {
        id: 3,
        teamName: 'KKR',
        coach: "Brendon",
        captain: "Andre Russell",
        MP: 0,
        points: 0,
        players: [
            { id: 21, playerName: 'Chris Gayle', position: 'Batsman' },
            { id: 22, playerName: 'Sunil Narine', position: 'All Rounder' },
            { id: 23, playerName: 'Dinesh Karthik', position: 'Wicket Keeper' },
            { id: 24, playerName: 'Andre Russell', position: 'All Rounder' },
            { id: 25, playerName: 'Pat Cummins', position: 'Bowler' },
            { id: 26, playerName: 'Shubman Gill', position: 'Batsman' },
            { id: 27, playerName: 'Eoin Morgan', position: 'Batsman' },
            { id: 28, playerName: 'Kuldeep Yadav', position: 'Bowler' },
            { id: 29, playerName: 'Lockie Ferguson', position: 'Bowler' },
            { id: 30, playerName: 'Nitish Rana', position: 'Batsman' }
        ]
    },
    {
        id: 4,
        teamName: 'DC',
        coach: "Ricky",
        captain: "Rishabh Pant",
        MP: 0,
        points: 0,
        players: [
            { id: 31, playerName: 'David Warner', position: 'Batsman' },
            { id: 32, playerName: 'Kagiso Rabada', position: 'Bowler' },
            { id: 33, playerName: 'Rishabh Pant', position: 'Wicket Keeper' },
            { id: 34, playerName: 'Marcus Stoinis', position: 'All Rounder' },
            { id: 35, playerName: 'Shreyas Iyer', position: 'Batsman' },
            { id: 36, playerName: 'Shikhar Dhawan', position: 'Batsman' },
            { id: 37, playerName: 'Ajinkya Rahane', position: 'Batsman' },
            { id: 38, playerName: 'Ravichandran Ashwin', position: 'Bowler' },
            { id: 39, playerName: 'Shimron Hetmyer', position: 'Batsman' },
            { id: 40, playerName: 'Anrich Nortje', position: 'Bowler' }
        ]
    },
    
    {
        id: 5,
        teamName: 'SRH',
        coach: "Trevor",
        captain: "Manish Pandey",
        MP: 0,
        points: 0,
        players: [
            { id: 41, playerName: 'Kane Williamson', position: 'Batsman' },
            { id: 42, playerName: 'Rashid Khan', position: 'Bowler' },
            { id: 43, playerName: 'Jonny Bairstow', position: 'Wicket Keeper' },
            { id: 44, playerName: 'Jason Holder', position: 'All Rounder' },
            { id: 45, playerName: 'David Warner', position: 'Batsman' },
            { id: 46, playerName: 'Bhuvneshwar Kumar', position: 'Bowler' },
            { id: 47, playerName: 'Mohammad Nabi', position: 'All Rounder' },
            { id: 48, playerName: 'Manish Pandey', position: 'Batsman' },
            { id: 49, playerName: 'T Natarajan', position: 'Bowler' },
            { id: 50, playerName: 'Wriddhiman Saha', position: 'Wicket Keeper' }
        ]
    },
    {
        id: 6,
        teamName: 'KXIP',
        coach: "Anil",
        captain: "Glenn Maxwell",
        MP: 0,
        points: 0,
        players: [
            { id: 51, playerName: 'KL Rahul', position: 'Batsman' },
            { id: 52, playerName: 'Chris Gayle', position: 'Batsman' },
            { id: 53, playerName: 'Nicholas Pooran', position: 'Wicket Keeper' },
            { id: 54, playerName: 'Mohammed Shami', position: 'Bowler' },
            { id: 55, playerName: 'Ravichandran Ashwin', position: 'Bowler' },
            { id: 56, playerName: 'Mayank Agarwal', position: 'Batsman' },
            { id: 57, playerName: 'Glenn Maxwell', position: 'All Rounder' },
            { id: 58, playerName: 'Sheldon Cottrell', position: 'Bowler' },
            { id: 59, playerName: 'Jimmy Neesham', position: 'All Rounder' },
            { id: 60, playerName: 'Murugan Ashwin', position: 'Bowler' }
        ]
    },
    {
        id: 7,
        teamName: 'RR',
        coach: "Kumar",
        captain: "Jofra Archer",
        MP: 0,
        points: 0,
        players: [
            { id: 61, playerName: 'Sanju Samson', position: 'Batsman' },
            { id: 62, playerName: 'Ben Stokes', position: 'All Rounder' },
            { id: 63, playerName: 'Jos Buttler', position: 'Wicket Keeper' },
            { id: 64, playerName: 'Steve Smith', position: 'Batsman' },
            { id: 65, playerName: 'Rahul Tewatia', position: 'All Rounder' },
            { id: 66, playerName: 'Jofra Archer', position: 'Bowler' },
            { id: 67, playerName: 'Jaydev Unadkat', position: 'Bowler' },
            { id: 68, playerName: 'Shreyas Gopal', position: 'Bowler' },
            { id: 69, playerName: 'Robin Uthappa', position: 'Batsman' },
            { id: 70, playerName: 'Andrew Tye', position: 'Bowler' }
        ]
    },
    {
        id: 8,
        teamName: 'PBKS',
        coach: "Andy",
        captain: "Mohammed Shami",
        MP: 0,
        points: 0,
        players: [
            { id: 71, playerName: 'Mayank Agarwal', position: 'Batsman' },
            { id: 72, playerName: 'KL Rahul', position: 'Batsman' },
            { id: 73, playerName: 'Chris Gayle', position: 'Batsman' },
            { id: 74, playerName: 'Nicholas Pooran', position: 'Wicket Keeper' },
            { id: 75, playerName: 'Mohammed Shami', position: 'Bowler' },
            { id: 76, playerName: 'Ravi Bishnoi', position: 'Bowler' },
            { id: 77, playerName: 'Arshdeep Singh', position: 'Bowler' },
            { id: 78, playerName: 'Deepak Hooda', position: 'All Rounder' },
            { id: 79, playerName: 'Shahrukh Khan', position: 'All Rounder' },
            { id: 80, playerName: 'Moises Henriques', position: 'All Rounder' }
        ]
    },
    // Add 14 more teams here...
    {
        id: 9,
        teamName: 'DC',
        coach: "Ricky",
        captain: "Anrich Nortje",
        MP: 0,
        points: 0,
        players: [
            { id: 81, playerName: 'Shreyas Iyer', position: 'Batsman' },
            { id: 82, playerName: 'Rishabh Pant', position: 'Wicket Keeper' },
            { id: 83, playerName: 'Kagiso Rabada', position: 'Bowler' },
            { id: 84, playerName: 'Axar Patel', position: 'All Rounder' },
            { id: 85, playerName: 'Prithvi Shaw', position: 'Batsman' },
            { id: 86, playerName: 'Shikhar Dhawan', position: 'Batsman' },
            { id: 87, playerName: 'Ishant Sharma', position: 'Bowler' },
            { id: 88, playerName: 'Ravichandran Ashwin', position: 'Bowler' },
            { id: 89, playerName: 'Ajinkya Rahane', position: 'Batsman' },
            { id: 90, playerName: 'Anrich Nortje', position: 'Bowler' }
        ]
    },
    {
        id: 10,
        teamName: 'KKR',
        coach: "Brendon",
        captain: "Eoin Morgan",
        MP: 0,
        points: 0,
        players: [
            { id: 91, playerName: 'Andre Russell', position: 'All Rounder' },
            { id: 92, playerName: 'Shubman Gill', position: 'Batsman' },
            { id: 93, playerName: 'Dinesh Karthik', position: 'Wicket Keeper' },
            { id: 94, playerName: 'Pat Cummins', position: 'Bowler' },
            { id: 95, playerName: 'Sunil Narine', position: 'All Rounder' },
            { id: 96, playerName: 'Lockie Ferguson', position: 'Bowler' },
            { id: 97, playerName: 'Eoin Morgan', position: 'Batsman' },
            { id: 98, playerName: 'Nitish Rana', position: 'Batsman' },
            { id: 99, playerName: 'Kuldeep Yadav', position: 'Bowler' },
            { id: 100, playerName: 'Varun Chakravarthy', position: 'Bowler' }
        ]
    },
    {
        id: 11,
        teamName: 'SRH',
        coach: "Trevor",
        captain: "Kane Williamson",
        MP: 0,
        points: 0,
        players: [
            { id: 101, playerName: 'Kane Williamson', position: 'Batsman' },
            { id: 102, playerName: 'Rashid Khan', position: 'Bowler' },
            { id: 103, playerName: 'Jonny Bairstow', position: 'Wicket Keeper' },
            { id: 104, playerName: 'Jason Holder', position: 'All Rounder' },
            { id: 105, playerName: 'David Warner', position: 'Batsman' },
            { id: 106, playerName: 'Bhuvneshwar Kumar', position: 'Bowler' },
            { id: 107, playerName: 'Mohammad Nabi', position: 'All Rounder' },
            { id: 108, playerName: 'Manish Pandey', position: 'Batsman' },
            { id: 109, playerName: 'T Natarajan', position: 'Bowler' },
            { id: 110, playerName: 'Wriddhiman Saha', position: 'Wicket Keeper' }
        ]
    },
    {
        id: 12,
        teamName: 'MI',
        coach: "Mahela",
        captain: "Vivian Richards",
        MP: 0,
        points: 0,
        players: [
            { id: 111, playerName: 'Vivian Richards', position: 'Batsman' },
            { id: 112, playerName: 'Malcolm Marshall', position: 'Bowler' },
            { id: 113, playerName: 'Adam Gilchrist', position: 'Wicket Keeper' },
            { id: 114, playerName: 'Jacques Kallis', position: 'All Rounder' },
            { id: 115, playerName: 'Brian Lara', position: 'Batsman' },
            { id: 116, playerName: 'Wasim Akram', position: 'Bowler' },
            { id: 117, playerName: 'AB de Villiers', position: 'All Rounder' },
            { id: 118, playerName: 'Imran Khan', position: 'All Rounder' },
            { id: 119, playerName: 'Lasith Malinga', position: 'Bowler' },
            { id: 120, playerName: 'Ravichandran Ashwin', position: 'Bowler' }
        ]
    },
    {
        id: 13,
        teamName: 'RR',
        coach: "Kumar",
        captain: "Sanju Samson",
        MP: 0,
        points: 0,
        players: [
            { id: 121, playerName: 'Sanju Samson', position: 'Batsman' },
            { id: 122, playerName: 'Ben Stokes', position: 'All Rounder' },
            { id: 123, playerName: 'Jos Buttler', position: 'Wicket Keeper' },
            { id: 124, playerName: 'Steve Smith', position: 'Batsman' },
            { id: 125, playerName: 'Rahul Tewatia', position: 'All Rounder' },
            { id: 126, playerName: 'Jofra Archer', position: 'Bowler' },
            { id: 127, playerName: 'Jaydev Unadkat', position: 'Bowler' },
            { id: 128, playerName: 'Shreyas Gopal', position: 'Bowler' },
            { id: 129, playerName: 'Robin Uthappa', position: 'Batsman' },
            { id: 130, playerName: 'Andrew Tye', position: 'Bowler' }
        ]
    },
    {
        id: 14,
        teamName: 'PBKS',
        coach: "Andy",
        captain: "Mayank Agarwal",
        MP: 0,
        points: 0,
        players: [
            { id: 131, playerName: 'Mayank Agarwal', position: 'Batsman' },
            { id: 132, playerName: 'KL Rahul', position: 'Batsman' },
            { id: 133, playerName: 'Chris Gayle', position: 'Batsman' },
            { id: 134, playerName: 'Nicholas Pooran', position: 'Wicket Keeper' },
            { id: 135, playerName: 'Mohammed Shami', position: 'Bowler' },
            { id: 136, playerName: 'Ravi Bishnoi', position: 'Bowler' },
            { id: 137, playerName: 'Arshdeep Singh', position: 'Bowler' },
            { id: 138, playerName: 'Deepak Hooda', position: 'All Rounder' },
            { id: 139, playerName: 'Shahrukh Khan', position: 'All Rounder' },
            { id: 140, playerName: 'Moises Henriques', position: 'All Rounder' }
        ]
    },
    // Add 10 more teams here...
    {
        id: 15,
        teamName: 'DC',
        coach: "Ricky",
        captain: "Shreyas Iyer",
        MP: 0,
        points: 0,
        players: [
            { id: 141, playerName: 'Shreyas Iyer', position: 'Batsman' },
            { id: 142, playerName: 'Rishabh Pant', position: 'Wicket Keeper' },
            { id: 143, playerName: 'Kagiso Rabada', position: 'Bowler' },
            { id: 144, playerName: 'Axar Patel', position: 'All Rounder' },
            { id: 145, playerName: 'Prithvi Shaw', position: 'Batsman' },
            { id: 146, playerName: 'Shikhar Dhawan', position: 'Batsman' },
            { id: 147, playerName: 'Ishant Sharma', position: 'Bowler' },
            { id: 148, playerName: 'Ravichandran Ashwin', position: 'Bowler' },
            { id: 149, playerName: 'Ajinkya Rahane', position: 'Batsman' },
            { id: 150, playerName: 'Anrich Nortje', position: 'Bowler' }
        ]
    },
    {
        id: 16,
        teamName: 'KKR',
        coach: "Brendon",
        captain: "Shubman Gill",
        MP: 0,
        points: 0,
        players: [
            { id: 151, playerName: 'Andre Russell', position: 'All Rounder' },
            { id: 152, playerName: 'Shubman Gill', position: 'Batsman' },
            { id: 153, playerName: 'Dinesh Karthik', position: 'Wicket Keeper' },
            { id: 154, playerName: 'Pat Cummins', position: 'Bowler' },
            { id: 155, playerName: 'Sunil Narine', position: 'All Rounder' },
            { id: 156, playerName: 'Lockie Ferguson', position: 'Bowler' },
            { id: 157, playerName: 'Eoin Morgan', position: 'Batsman' },
            { id: 158, playerName: 'Nitish Rana', position: 'Batsman' },
            { id: 159, playerName: 'Kuldeep Yadav', position: 'Bowler' },
            { id: 160, playerName: 'Varun Chakravarthy', position: 'Bowler' }
        ]
    },
   
    {
        id: 17,
        teamName: 'SRH',
        coach: "Trevor",
        captain: "Kane Williamson",
        MP: 0,
        points: 0,
        players: [
            { id: 161, playerName: 'Kane Williamson', position: 'Batsman' },
            { id: 162, playerName: 'Rashid Khan', position: 'Bowler' },
            { id: 163, playerName: 'Jonny Bairstow', position: 'Wicket Keeper' },
            { id: 164, playerName: 'Jason Holder', position: 'All Rounder' },
            { id: 165, playerName: 'David Warner', position: 'Batsman' },
            { id: 166, playerName: 'Bhuvneshwar Kumar', position: 'Bowler' },
            { id: 167, playerName: 'Mohammad Nabi', position: 'All Rounder' },
            { id: 168, playerName: 'Manish Pandey', position: 'Batsman' },
            { id: 169, playerName: 'T Natarajan', position: 'Bowler' },
            { id: 170, playerName: 'Wriddhiman Saha', position: 'Wicket Keeper' }
        ]
    },
    {
        id: 18,
        teamName: 'MI',
        coach: "Mahela",
        captain: "Vivian Richards",
        MP: 0,
        points: 0,
        players: [
            { id: 171, playerName: 'Vivian Richards', position: 'Batsman' },
            { id: 172, playerName: 'Malcolm Marshall', position: 'Bowler' },
            { id: 173, playerName: 'Adam Gilchrist', position: 'Wicket Keeper' },
            { id: 174, playerName: 'Jacques Kallis', position: 'All Rounder' },
            { id: 175, playerName: 'Brian Lara', position: 'Batsman' },
            { id: 176, playerName: 'Wasim Akram', position: 'Bowler' },
            { id: 177, playerName: 'AB de Villiers', position: 'All Rounder' },
            { id: 178, playerName: 'Imran Khan', position: 'All Rounder' },
            { id: 179, playerName: 'Lasith Malinga', position: 'Bowler' },
            { id: 180, playerName: 'Ravichandran Ashwin', position: 'Bowler' }
        ]
    },
   
    {
        id: 19,
        teamName: 'RR',
        coach: "Kumar",
        captain: "Sanju",
        MP: 0,
        points: 0,
        players: [
            { id: 181, playerName: 'Sanju Samson', position: 'Batsman' },
            { id: 182, playerName: 'Ben Stokes', position: 'All Rounder' },
            { id: 183, playerName: 'Jos Buttler', position: 'Wicket Keeper' },
            { id: 184, playerName: 'Steve Smith', position: 'Batsman' },
            { id: 185, playerName: 'Rahul Tewatia', position: 'All Rounder' },
            { id: 186, playerName: 'Jofra Archer', position: 'Bowler' },
            { id: 187, playerName: 'Jaydev Unadkat', position: 'Bowler' },
            { id: 188, playerName: 'Shreyas Gopal', position: 'Bowler' },
            { id: 189, playerName: 'Robin Uthappa', position: 'Batsman' },
            { id: 190, playerName: 'Andrew Tye', position: 'Bowler' }
        ]
    },
    {
        id: 20,
        teamName: 'PBKS',
        coach: "Andy",
        captain: "Mayank",
        MP: 0,
        points: 0,
        players: [
            { id: 191, playerName: 'Mayank Agarwal', position: 'Batsman' },
            { id: 192, playerName: 'KL Rahul', position: 'Batsman' },
            { id: 193, playerName: 'Chris Gayle', position: 'Batsman' },
            { id: 194, playerName: 'Nicholas Pooran', position: 'Wicket Keeper' },
            { id: 195, playerName: 'Mohammed Shami', position: 'Bowler' },
            { id: 196, playerName: 'Ravi Bishnoi', position: 'Bowler' },
            { id: 197, playerName: 'Arshdeep Singh', position: 'Bowler' },
            { id: 198, playerName: 'Deepak Hooda', position: 'All Rounder' },
            { id: 199, playerName: 'Shahrukh Khan', position: 'All Rounder' },
            { id: 200, playerName: 'Moises Henriques', position: 'All Rounder' }
        ]
    }
   
];

console.log(teams);

//save the matches to the database
// matches.forEach((match) => {
//     new Match(match).save();
//     console.log('Match saved to database');
// });


// save the teams to the database
teams.forEach((team) => {
    new Team(team).save();
    console.log('Team saved to database');
});