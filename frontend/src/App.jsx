import { useNavigate } from 'react-router-dom';
import './App.css'
import Teams from './components/Teams'
import { useEffect, useState } from 'react';
import { database } from './config/FirebaseConfig';
import ViewMatches from './components/ViewMatches';
function App() {
  const navigate = useNavigate();
  const [isGnerated, setIsGenerated] = useState(false);
  const [userEmail, setUserEmail] = useState("");
  const [isAdmin, setIsAdmin] = useState(false);


  useEffect(() => {
    database.onAuthStateChanged(user => {
        if (user) {
            setUserEmail(user.email);
        } else {
            setUserEmail(null);
        }
    });
}, [setUserEmail]);

useEffect(() => {
  if (userEmail) {
      fetch('http://localhost:8000/user/' + userEmail)
          .then(res => res.json())
          .then(data => {
              if (data.isAdmin) {
                  console.log(data.isAdmin);
                  setIsAdmin(true);
              }
          });
  }
}, [userEmail])

useEffect(() => {
  fetch('http://localhost:8000/matches')
      .then(res => res.json())
      .then(data => {
          if (data.length > 0) {
              setIsGenerated(true);
          }
      });
}, [setIsGenerated])


  return (
    <div className='pt-20'>

      {!isGnerated && !userEmail &&
        <div>
          <h1 className='w-9/12 margin-0-auto'>login to view details!</h1>
          <button
            className='m-3 p-3'
            onClick={() => {
              navigate('/login')
            }}
          >Login</button>
        </div>}


          {!isGnerated && isAdmin &&
            <div>
              <h1 className='w-9/12 margin-0-auto'>Matches are not generated yet! generate match to get started!</h1>
              <button
                className='m-3 p-3'
                onClick={() => {
                  navigate('/generate')
                }}
              >Gnerate Team</button>
            </div>}

            { !isGnerated && !isAdmin &&
            <div>
              <h1 className='w-9/12 margin-0-auto'>Match Schedules are not generated yet! Please wait for the admin to view the teams!</h1>
            </div>}

          {isGnerated &&
            <div className='flex teams'>
              <ViewMatches/>
            </div>}
        </div>
  )
}

      export default App
