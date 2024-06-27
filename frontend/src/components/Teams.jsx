import { useEffect, useState } from "react";
import { useRecoilState } from "recoil";
import { numberOfTeamsState } from "../store/NumberOfTeam";
import IndividualTeam from "./IndividualTeam";
import { useNavigate } from "react-router-dom";


const Teams = () => {
const [teams, setTeams] = useState([]);
const [numberOfTeams, setNumberOfTeams] = useRecoilState(numberOfTeamsState);
const [selectedTeam, setSelectedTeam] = useState(teams[0]);
const navigate = useNavigate();

// fetch the teams from the backend and randomly sleect numberOfTeams number of teams
    useEffect(() => {
        fetch("http://localhost:8000/teams")
            .then((res) => res.json())
            .then((data) => {
                const randomTeams = data.sort(() => Math.random() - Math.random()).slice(0, numberOfTeams);
                console.log(randomTeams);
                setTeams(randomTeams);
                setSelectedTeam(randomTeams[0]);
            });
    }, []);


    const generate = ()=>{
        fetch("http://localhost:8000/teams")
            .then((res) => res.json())
            .then((data) => {
                const randomTeams = data.sort(() => Math.random() - Math.random()).slice(0, numberOfTeams);
                console.log(randomTeams);
                setTeams(randomTeams);
            });
    }

    const confirm = ()=>{
       fetch("http://localhost:8000/generated/teams",{
              method: 'POST',
              headers: {
                'Content-Type': 'application/json'
              },
              body: JSON.stringify({
                teams: teams
              })
       })
       navigate('/matches');
    }


//    sort the teams by points
    teams.sort((a, b) => b.points - a.points);


    return (
        <div className="snap-x h-100 pt-20">
            <input type="text" value={numberOfTeams} 
            onChange={(e)=>{
                setNumberOfTeams(e.target.value);
            }}
            className="p-3 m-3"
            />
            <button className="m-3" onClick={generate}>Generate Again</button>
            <button className="m-3" onClick={confirm}>Confirm and Proceed</button>
        <div className="container flex teams items-start">
                    <IndividualTeam team={selectedTeam} className="w-6/12"/>
            <table className="table border m-3 self-start">
                <thead>
                    <tr>
                        <th className="p-5">Team Name</th>
                        <th className="pl-20 pr-20"> Details</th>
                    </tr>
                </thead>
                <tbody>
                    {teams.map((team) => (
                        <tr key={team.id} className="border">
                            <td className="p-5">{team.teamName}</td>
                            <td className="p-5">
                                <button className="btn btn-primary" onClick={()=>{
                                    setSelectedTeam(team);
                                }}>
                                    View Details
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
        </div>
    );
}


export default Teams;