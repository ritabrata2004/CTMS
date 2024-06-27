import { useEffect, useState } from "react";

const Pointstable = () => {
    const [matches, setMatches] = useState([]);
    const [teams, setTeams] = useState([]);


    useEffect(() => {
        fetch("http://localhost:8000/matches")
            .then((res) => res.json())
            .then((data) => {
                setMatches(data);
            });

        fetch("http://localhost:8000/generated/teams")
            .then((res) => res.json())
            .then((data) => {
                setTeams(data);
            });
    }, []);

    useEffect(() => {   
        matches.map((match) => {
            if (match.team1.score > match.team2.score) {
                console.log("hello")
                teams.map((team) => {
                    if (team.teamName === match.team1.teamName) {
                        team.finalScore += 2;
                    }
                })
            } else {
                console.log("hello")
                teams.map((team) => {
                    if (team.teamName === match.team2.teamName) {
                        team.finalScore += 2;
                    }
                })
            }
        })
        teams.sort((a, b) => b.finalScore - a.finalScore);
    })

    return (
        <div className="flex flex-col justify-center items-center">
        <h1 className="">
            Points Table
            </h1>
        <table className="table border m-3">
            <thead className="border p-3 m-3">
                <tr>
                    <th className="p-3 border">Team Name</th>
                    <th className="p-3 border">Score</th>
                </tr>
            </thead>
            <tbody>
                {teams.map((team, index) => {
                    return (
                        <tr key={index} className="border p-3">
                            <td className="border p-3">{team.teamName}</td>
                            <td className="p-3">{team.finalScore}</td>
                        </tr>
                    )
                })}
            </tbody>
        </table>
        </div>
    )

}

export default Pointstable;