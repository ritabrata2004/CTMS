import { useEffect, useState } from "react";
import IndividualMatchesDetails from "./IndividualMatchesDetails";
import { useNavigate } from "react-router-dom";


const MatchesDetails = () => {
    const [teams, setTeams] = useState([]);
    const [matches, setMatches] = useState([]);
    const [selectedMatch, setSelectedMatch] = useState(matches[0]);
    const navigate = useNavigate();
    useEffect(() => {
        fetch("http://localhost:8000/generated/teams")
            .then((res) => res.json())
            .then((data) => {
                setTeams(data);
            });
    }, []);


    //matches should be each team playing with another team
    const generateMatches = () => {
        const temp = [];
      
        for (let i = 0; i < teams.length - 1; i++) {
            for (let j = i + 1; j < teams.length; j++) {
                let team1Copy = teams[i];
                let team2Copy = teams[j];
                
    
                // Generate random scores for each player in team 1
                let totalWickets = 10;
                team1Copy.players.forEach(player => {
                    player.score = Math.floor(Math.random() * 100);
                    console.log(player.score, player.playerName);
                    // randomly reduce wickets from total wickets
                    if (totalWickets > 1) {
                        player.wickets = Math.floor(Math.random() * 4);
                        totalWickets -= player.wickets;
                    } else {
                        player.wickets = 0;
                    }
                });
                
                // Generate random scores for each player in team 2
                totalWickets = 10;
                team2Copy.players.forEach(player => {
                    player.score = Math.floor(Math.random() * 100);
                    console.log(player.score, player.playerName);
                    if (totalWickets > 1) {
                        player.wickets = Math.floor(Math.random() * 4);
                        totalWickets -= player.wickets;
                    } else {
                        player.wickets = 0;
                    }
                });

                team1Copy.points = team1Copy.players.reduce((acc, player) => acc + player.score, 0);
                team2Copy.points = team2Copy.players.reduce((acc, player) => acc + player.score, 0);
                console.log(team1Copy, team2Copy);

                temp.push({
                    // pass a copy of team[i], don't pass by reference
                    team1: team1Copy,
                    team2: team2Copy,
                    time: new Date().getTime(),
                });
                
            }
        }
        // shuffle the matches if needed
        for (let i = temp.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * i);
            const temp1 = temp[i];
            temp[i] = temp[j];
            temp[j] = temp1;
        }
        // set the dates for the matches
        for (let i = 0; i < temp.length; i++) {
            temp[i].date = (new Date().getDay() + i)+"-"+(new Date().getMonth() + 1)+"-"+new Date().getFullYear();
        }
        
        setMatches(temp);
        setSelectedMatch(temp[0]);
    }
    
    const saveMatches = () => {
        fetch("http://localhost:8000/matches", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                matches: matches
            })
        })
        console.log("Matches saved successfully");
        navigate("/thanks")
    }



    return (
        <div className="container pt-5 flex ">
            <div className="pt-20">
                <div className="flex justify-around">
                    <button onClick={generateMatches}>Generate</button>
                    <button onClick={saveMatches}>Save</button>
                </div>
                {/* represent in a table format */}
                <table className="table border m-3">
                    <thead>
                        <tr className="border p-3 m-3">
                            <th className="p-3">Team 1</th>
                            <th className="p-3">Team 2</th>
                            <th className="p-3">Date</th>
                            <th className="p-3">Time</th>

                            <th className="p-3">
                                Details
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {matches.map((match, index) => (
                            <tr key={index}>
                                <td className="p-3">{match.team1.teamName}</td>
                                <td className="p-3">{match.team2.teamName}</td>
                                <td className="p-3">{match.date}</td>
                                <td className="p-3">{match.time}</td>

                                <td className="p-3">
                                    <button
                                        onClick={() => {
                                            setSelectedMatch(match);
                                        }}
                                    >View Details</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            <div>
                <IndividualMatchesDetails match={selectedMatch} />
            </div>
        </div>
    );
}

export default MatchesDetails;