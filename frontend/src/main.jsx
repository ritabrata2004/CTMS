import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import { RecoilRoot } from 'recoil';
import NewTeam from './components/NewTeam.jsx';
import MatchesDetails from './components/MatchDetails.jsx';
import Login from './components/Login.jsx';
import GenerateTeam from './components/GenerateTeam.jsx';
import Teams from './components/Teams.jsx';
import SignUp from './components/SignUp.jsx';
import Navbar from './components/Navbar.jsx';
import ErrorPage from './components/ErrorPage.jsx';
import Thanks from './components/Thanks.jsx';
import ViewMatches from './components/ViewMatches.jsx';
import Stats from './components/Stats.jsx';
import Pointstable from './components/PointsTable.jsx';


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router>
      <RecoilRoot>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/" element={<Navbar />}>
            <Route path="matches" element={<MatchesDetails />} />
            <Route path="dashboard" element={<App />} />
            <Route path="team/new" element={<NewTeam />} />
            <Route path="generate" element={<GenerateTeam />} />
            <Route path="generated/team" element={<Teams />} />
            <Route path="thanks" element={<Thanks />} />
            <Route path='view/matches' element={<ViewMatches/>}/>
            <Route path='stats' element={<Stats/>}/>
            <Route path='points-table' element={<Pointstable/>}/>
            <Route path="*" element={<ErrorPage />} />
          </Route>
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </RecoilRoot>
    </Router>
  </React.StrictMode>,
)
