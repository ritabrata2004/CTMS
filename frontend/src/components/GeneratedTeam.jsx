import { useRecoilState } from "recoil";
import { numberOfTeamsState } from "../store/NumberOfTeam";

const GeneratedTeam = () => {
    const [numberOfTeams, setNumberOfTeams] = useRecoilState(numberOfTeamsState);
    return(
        <h1>Number of teams to be generated {numberOfTeams}</h1>
    )
}

export default GeneratedTeam;