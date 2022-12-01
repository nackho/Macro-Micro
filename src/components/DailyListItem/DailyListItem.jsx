import './DailyListItem.css';

export default function DailyListItem({ dailyGain, handleAddToWorkout }) {
  return (
    <div className="DailyListItem">
      <div className="name">{dailyGain.name}</div>
        <button className="btn-sm" onClick={() => handleAddToWorkout(dailyGain._id)}>
          ADD
        </button>
    </div>
  );
}