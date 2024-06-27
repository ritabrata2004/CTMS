const Players = ({playersArray, teamName}) => {
    // represent the players in the table
    return (
        <div className="m-3">
            <h2>{teamName}</h2>
            <table className="table border">
                <thead>
                    <tr>
                        <th className="p-2">Player Name</th>
                        <th className="p-2">Position</th>
                        <th className="p-2">Score</th>
                        <th className="p-2">wickets</th>
                    </tr>
                </thead>
                <tbody className="border">
                    {playersArray.map((player) => (
                        <tr key={player.id}>
                            <td className="p-2">{player.playerName}</td>
                            <td className="p-2">{player.position}</td>
                            <td className="p-2">{player.score}</td>
                            <td className="p-2">{player.wickets}</td>
                        </tr>
                    ))}
                    <tr  className="border">
                        <td className="p-2">Total</td>
                        <td className="p-2"></td>
                        <td className="p-2">{playersArray.reduce((acc, player) => acc + player.score, 0)}</td>
                        <td className="p-2">{playersArray.reduce((acc, player) => acc + player.wickets, 0)}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
}

export default Players;