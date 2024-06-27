import { Link } from "react-router-dom";

const Thanks = () => {
    return (
        <div>
            <h1>Thanks! Matches successfully gnerated.</h1>
            <h1>Matches are live now on 
                <br />
                <Link to="/view/matches">/view/matches</Link>
            </h1>
        </div>
    );
}

export default Thanks;