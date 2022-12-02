import './WorkoutListItem.css';

export default function WorkoutListItem({ workout, isSelected, setSelectedWorkout }) {
  return (
    <div
      className={`WorkoutListItem${isSelected ? ' selected' : ''}`}
      onClick={() => setSelectedWorkout(workout)}
    >
      <div>
        <div>Workout Id: <span className="smaller">{workout.workoutId}</span></div>
        <div className="smaller">{new Date(workout.createdAt).toLocaleDateString()}</div>
      </div>
      <div className="align-rt">
        <div className="smaller">{workout.totalQty} Item{workout.totalQty > 1 && 's'}</div>
      </div>
    </div>
  );
}
