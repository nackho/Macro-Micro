import './WorkoutListItem.css';
import { Link, useNavigate } from 'react-router-dom';

export default function WorkoutListItem({ workout, isSelected, setSelectedWorkout, handleDeleteWorkout }) {

  const navigate = useNavigate();


  return (
    <div
      className={`WorkoutListItem${isSelected ? ' selected' : ''}`}
      onClick={() => setSelectedWorkout(workout)}
    >
      <div>
        <div>Split: <span className="smaller">{workout.workoutId}</span></div>
        <div className="smaller">{new Date(workout.createdAt).toLocaleDateString()}</div>
      </div>
      <div className="align-rt">
        <div className="smaller">{workout.totalQty} Muscle Group{workout.totalQty > 1 && 's'}</div>
      </div>
      <Link to="/workout/new" state={{ workout: workout }}>EDIT</Link>
      <button onClick={() => handleDeleteWorkout(workout._id)}>DELETE</button>
    </div>
  );
}
