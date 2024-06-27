import { useState } from "react";
import { useRecoilState } from "recoil";
import { numberOfTeamsState } from "../store/NumberOfTeam";
import { useNavigate } from "react-router-dom";

const GenerateTeam = () => {
    const [numberOfTeams, setNumberOfTeams] = useRecoilState(numberOfTeamsState);
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const onChangeHandler = (e) => {
        if(e.target.value < 2 || e.target.value > 10) {
            setNumberOfTeams(e.target.value);
            setError('Number of Teams should be between 2 and 10');
            return;
        }
        setNumberOfTeams(e.target.value);
        setError('');
    }
    
    const generateTeamHandler = () => {
        if(numberOfTeams < 2 || numberOfTeams > 10) {
            setError('Number of Teams should be between 2 and 10');
            return;
        }
        navigate('/generated/team');
    };

    return (
        <div>
            <h1>Generate Team</h1>
            <p>How many teams to generate</p>
            <input
                type="number"
                placeholder="Number of Teams"
                value={numberOfTeams}
                onChange={onChangeHandler}
                className="m-3 p-3"
            />
            <br />
            <button onClick={generateTeamHandler}>Generate Team</button>
            {error && <p>{error}</p>}
        </div>
    );
};


export default GenerateTeam;