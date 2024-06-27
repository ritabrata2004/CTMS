const IndividualTeam = ({ team }) => {

    return (
        team && (
            <div className="flex">
                <div>
                <h1>{team.teamName}</h1>
                <h3>Coach: {team.coach}</h3>
                <h3>Captain: {team.captain}</h3>
                <h3>Matches Played: {team.MP}</h3>
                <h3>Points: {team.points}</h3>
                <h3>Players</h3>
                </div>
                <table className="table border m-3">
                    <thead>
                        <tr>
                            <th className="p-5">Player Name</th>
                            <th className="p-5">Role</th>
                        </tr>
                    </thead>
                    <tbody>
                        {team.players.map((player) => (
                            <tr key={player.id} className="border">
                                <td className="p-5">{player.playerName}</td>
                                <td className="p-5">{player.position}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        )
    );
}

export default IndividualTeam;