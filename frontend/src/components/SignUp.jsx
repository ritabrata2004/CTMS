import { useEffect, useState } from "react";
import { database } from "../config/FirebaseConfig";
import { createUserWithEmailAndPassword } from 'firebase/auth'
import { useNavigate } from "react-router-dom";


const SignUp = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [user, setUser] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        database.onAuthStateChanged((user) => {
            setUser(user);
        });
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
    }, []);
    
    useEffect(() => {
        if (user) {
            navigate('/dashboard');
        }
    }
    , [user]);


    const handleSignUp = async (e) => {
        e.preventDefault();
        try {
             await createUserWithEmailAndPassword(database, email, password);
            
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
        <h1>Create Account</h1>
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
            <input
            type="password"
            placeholder="confirm password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            className="m-3 p-3"
            />
            <br />
            <button onClick={handleSignUp}>Create!</button>
        </div>
    );
    };

export default SignUp;