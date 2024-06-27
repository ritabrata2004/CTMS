import Players from "./Players";

const IndividualMatchesDetails = (match) => {
    console.log(match);

    return (
        <div>
           {/* return the macth details if match is not undefiened otherwise return match detils */}
            {match.match !== undefined && (
                <div>
                    <h1>
                        {/* compare the scores and wickets and declare the winners */}
                        {match.match.team1.score > match.match.team2.score ? match.match.team1.teamName : match.match.team2.teamName} won by {Math.abs(match.match.team1.points - match.match.team2.points)} runs
                    </h1>
                    <h2>{match.match.team1.teamName} vs {match.match.team2.teamName}</h2>
                    <h2>{match.match.date}</h2>
                    <h2>{match.match.venue}</h2>
                    <div className="flex">
                        <Players playersArray={match.match.team1.players} teamName={match.match.team1.teamName} />
                        <Players playersArray={match.match.team2.players} teamName={match.match.team2.teamName} />
                    </div>
                      
                </div>
            )}
        </div>
    )
}

export default IndividualMatchesDetails;