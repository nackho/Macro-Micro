import './DailyList.css';
import DailyListItem from '../DailyListItem/DailyListItem';

export default function DailyList({ dailyGains, handleAddToWorkout }) {
  const bodyparts = dailyGains.map(bodypart =>
    <DailyListItem
      key={bodypart._id}
      dailyGain={bodypart}
      handleAddToWorkout={handleAddToWorkout}
    />
  );
  return (
    <main className="DailyList">
      {bodyparts}
    </main>
  );
}