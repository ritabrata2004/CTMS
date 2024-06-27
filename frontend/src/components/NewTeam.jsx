import { useState } from "react";

const NewTeam = () => {
    const [teamName, setTeamName] = useState('');
    const [MP, setMP] = useState(0);
    const [points, setPoints] = useState(0);
    const [players, setPlayers] = useState([]);
    const [playerName, setPlayerName] = useState('');
    const [position, setPosition] = useState('');

    const teamNameHandler = (e) => {
        setTeamName(e.target.value);
    }

    const MPHandler = (e) => {
        setMP(e.target.value);
    }

    const pointsHandler = (e) => {
        setPoints(e.target.value);
    }

    const addPlayer = () => {
        setPlayers([...players, { playerName, position}]);
    }

    const playerNameHandler = (e) => {
        setPlayerName(e.target.value);
    }

    const positionHandler = (e) => {
        setPosition(e.target.value);
    }


    return (
        <div className="flex">
            <div>
                <h1 className="m-2">{teamName}</h1>
                <p className="m-2">{MP} Matches Played</p>
                <p className="m-2">{points} Points</p>
                <h2 className="m-2">Players</h2>
                {players.map((player, index) => (
                    <div key={index} className="p-2 m-2 border"> 
                        <p className="m-2">{player.playerName}</p>
                        <p className="m-2">{player.position}</p>
                    </div>
                ))}

            </div>
            <div>
                <h3>New Team</h3>
                <br />
                <input type="text" placeholder="Team Name" value={teamName} onChange={teamNameHandler} className="m-3 p-3" />
                <br />
                <input type="number" placeholder="Matches Played" value={MP} onChange={MPHandler}
                    className="m-3 p-3" />
                <br />
                <input type="number" placeholder="Points" value={points} onChange={pointsHandler}
                    className="m-3 p-3" />
                <br />
                <h3>Player {players.length}</h3>
                <p>
                    {playerName}
                </p>
                <p>
                    {position}
                </p>
                <br />
                <input type="text" placeholder="Player Name" value={playerName} className="m-3 p-3" onChange={playerNameHandler}/>
                <br />
                <input type="text" placeholder="Position" value={position} className="m-3 p-3" onChange={positionHandler}/>
                <br />
                <button onClick={addPlayer} className="m-3 p-3">Add Player</button>
                {/* save */}
                <br />
                <button className="m-3 p-3">Save</button>
            </div>
        </div>
    );
}




export default NewTeam;