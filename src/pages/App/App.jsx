import { useState } from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import './App.css';
import { getUser } from '../../utilities/users-service'
import AuthPage from '../AuthPage/AuthPage'
import NewWorkoutPage from '../NewWorkoutPage/NewWorkoutPage'
import NewWeightPage from '../NewWeightPage/NewWeightPage'
// import WorkoutHistoryPage from '../WorkoutHistoryPage/WorkoutHistoryPage'
import WeightDetailsPage from '../WeightDetailsPage/WeightDetailsPage'
import NavBar from '../../components/NavBar/NavBar'

export default function App() {
  const [user, setUser] = useState(getUser())

  return (
    <main className="App">
      { user ? 
        <>
          <NavBar user={user} setUser={setUser} />
          <Routes>
            <Route path="/workout/new" element={<NewWorkoutPage user={user} setUser={setUser}/>} />
            {/* <Route path="/workout" element={<WorkoutHistoryPage />} /> */}
            <Route path="/weight/new" element={<NewWeightPage />} />
            <Route path="/weight" element={<WeightDetailsPage />} />
            <Route path="/*" element={<Navigate to="/workout/new" />} />
          </Routes>
        </>
        :
        <AuthPage setUser={setUser}/>
      }
    </main>
  );
}


