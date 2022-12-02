import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import * as workoutsAPI from '../../utilities/workouts-api';
import './WorkoutHistoryPage.css';
import Logo from '../../components/Logo/Logo';
import UserLogOut from '../../components/UserLogOut/UserLogOut';
import WorkoutDetail from '../../components/WorkoutDetail/WorkoutDetail';
import WorkoutList from '../../components/WorkoutList/WorkoutList';

export default function WorkoutHistoryPage({ user, setUser }) {
  const [workouts, setWorkouts] = useState([]);
  const [selectedWorkout, setSelectedWorkout] = useState(null);

  useEffect(function() {
    async function getWorkouts() {
      const workouts = await workoutsAPI.getAllForUser();
      setWorkouts(workouts);
      setSelectedWorkout(workouts[0]);
    }
    getWorkouts();
  }, []);
  
  async function handleDeleteWorkout(workoutId) {
    await workoutsAPI.deleteWorkout(workoutId);
    const updateWorkouts = workouts.filter( workout => workout.id != workoutId)
    setWorkouts(updateWorkouts);
  }
  

  return (
    <main className="WorkoutHistoryPage">
      <aside>
        <Logo />
        <Link to="/workout/new" state={null} className="button btn-sm">NEW WORKOUT</Link>
        {/* <UserLogOut user={user} setUser={setUser} /> */}
      </aside>
      <WorkoutList
        workouts={workouts}
        selectedWorkout={selectedWorkout}
        setSelectedWorkout={setSelectedWorkout}
        handleDeleteWorkout={handleDeleteWorkout}
      />
      <WorkoutDetail workout={selectedWorkout} />
    </main>
  );
}