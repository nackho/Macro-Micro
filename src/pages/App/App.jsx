import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import './App.css';
import { getUser } from '../../utilities/users-service'
import AuthPage from '../AuthPage/AuthPage'
import NewWorkoutPage from '../NewWorkoutPage/NewWorkoutPage'
import NewWeightPage from '../NewWeightPage/NewWeightPage'
import WorkoutDetailsPage from '../WorkoutDetailsPage/WorkoutDetailsPage'
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
            <Route path="/workout" element={<WorkoutDetailsPage />} />
            <Route path="/weight/new" element={<NewWeightPage />} />
            <Route path="/weight" element={<WeightDetailsPage />} />
          </Routes>
        </>
        :
        <AuthPage setUser={setUser}/>
      }
    </main>
  );
}


