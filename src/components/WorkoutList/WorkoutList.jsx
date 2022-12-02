import WorkoutListItem from '../WorkoutListItem/WorkoutListItem';
import './WorkoutList.css';

export default function WorkoutList({ workouts, selectedWorkout, setSelectedWorkout, handleDeleteWorkout }) {
  const workoutListItems = workouts.map(w =>
    <WorkoutListItem
      workout={w}
      isSelected={w === selectedWorkout}
      setSelectedWorkout={setSelectedWorkout}
      handleDeleteWorkout={handleDeleteWorkout}
      key={w._id}
    />
  );
  return (
    <main className="WorkoutList">
      {workoutListItems}
    </main>
  );
}