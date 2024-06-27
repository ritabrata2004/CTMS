import { useEffect, useState } from "react";
import { database } from "../config/FirebaseConfig";
import { signInWithEmailAndPassword } from 'firebase/auth'
import { useNavigate } from "react-router-dom";


const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [user, setUser] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        database.onAuthStateChanged((user) => {
            setUser({
                email: user.email,
                isAdmin: false
            });
        });
    }, []);
    

    
    useEffect(() => {
        console.log(user);
        if (user !== null) {
            navigate('/dashboard');
        }
    });




    const handleSignIn = async (e) => {
        e.preventDefault();
        try {
             await signInWithEmailAndPassword(database, email, password);
            
            //save as a user in mongoDB
            fetch('http://localhost:8000/user/new', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    email: email
                })
            });
            console.log("User successfully logged in")
        } catch (err) {
       console.log(err);
        }
    }
    
    return (
        <div>
        <h1>Login</h1>
        
            <input
            type="email"
            placeholder="Username"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="m-3 p-3"
            />
            <br />
            <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="m-3 p-3"
            />
            <br />
            <button onClick={handleSignIn}>Sign In</button>
        </div>
    );
    };

export default Login;