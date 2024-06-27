import { useEffect, useState } from "react";
import IndividualMatchesDetails from "./IndividualMatchesDetails";

const ViewMatches = () => {
    const [matches, setMatches] = useState([]);
    const [selectedMatch, setSelectedMatch] = useState(matches[0]);
   
    useEffect(() => {
        fetch("http://localhost:8000/matches")
            .then((res) => res.json())
            .then((data) => {
                setMatches(data);
            });
    }, []);


    return (
        <div className="container pt-5 flex ">
            <div className="pt-20">
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

export default ViewMatches;