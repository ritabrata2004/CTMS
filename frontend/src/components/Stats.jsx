import { useEffect, useState } from "react";

const Stats = ()=>{
    const [matches, setMatches] = useState([]);
    const [allPlayerMap, setAllPlayerMap] = useState({});
    const [top5ByWickets, setTop5ByWickets] = useState([]);

   
    useEffect(() => {
        fetch("http://localhost:8000/matches")
            .then((res) => res.json())
            .then((data) => {
                setMatches(data);
                let playersMap = {};
                data.map((match) => {
                    match.team1.players.map((player) => {
                        if (playersMap[player.playerName]) {
                            playersMap[player.playerName] += player.score;
                        } else {
                            playersMap[player.playerName] = player.score;
                        }
                    });
                    match.team2.players.map((player) => {
                        if (playersMap[player.playerName]) {
                            playersMap[player.playerName] += player.score;
                        } else {
                            playersMap[player.playerName] = player.score;
                        }
                    });
                });
                setAllPlayerMap(playersMap);
                
                // get the top 5 players by score
                const top5Players = Object.keys(playersMap).sort((a, b) => playersMap[b] - playersMap[a]).slice(0, 5);
                const top5PlayersMap = {};
                top5Players.forEach(player => {
                    top5PlayersMap[player] = playersMap[player];
                });
                setAllPlayerMap(top5PlayersMap);

                playersMap = {};
                data.map((match) => {
                    match.team1.players.map((player) => {
                        if (playersMap[player.playerName]) {
                            playersMap[player.playerName] += player.wickets;
                        } else {
                            playersMap[player.playerName] = player.wickets;
                        }
                    });
                    match.team2.players.map((player) => {
                        if (playersMap[player.playerName]) {
                            playersMap[player.playerName] += player.wickets;
                        } else {
                            playersMap[player.playerName] = player.wickets;
                        }
                    });
                });

                const top5PlayersByWickets = Object.keys(playersMap).sort((a, b) => playersMap[b] - playersMap[a]).slice(0, 5);
                const top5PlayersByWicketsMap = {};
                top5PlayersByWickets.forEach(player => {
                    top5PlayersByWicketsMap[player] = playersMap[player];
                });
                setTop5ByWickets(top5PlayersByWicketsMap);

            });
    }, []);

    
    

    return (
        <div>
            <div className="container pt-5 flex justify-center">
            <div className="pt-20 flex">
                {/* represent players vs score table */}
                <table className="table border m-3">
                    <thead>
                        <tr className="border p-3 m-3">
                            <th className="p-3">Player</th>
                            <th className="p-3">Score</th>
                        </tr>
                    </thead>
                    <tbody>
                        {Object.keys(allPlayerMap).map((player, index) => (
                            <tr key={index}>
                                <td className="p-3">{player}</td>
                                <td className="p-3">{allPlayerMap[player]}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
                
                <table className="table border m-3">
                    <thead>
                        <tr className="border p-3 m-3">
                            <th className="p-3">Player</th>
                            <th className="p-3">Wickets</th>
                        </tr>
                    </thead>
                    <tbody>
                        {Object.keys(top5ByWickets).map((player, index) => (
                            <tr key={index}>
                                <td className="p-3">{player}</td>
                                <td className="p-3">{top5ByWickets[player]}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
                
            </div>
            <div>
            </div>
        </div>
        </div>
    )
}

export default Stats;