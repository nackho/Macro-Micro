import './DailyList.css';
import DailyListItem from '../DailyListItem/DailyListItem';

export default function DailyList({ dailyGains }) {
  const bodyparts = dailyGains.map(bodypart =>
    <DailyListItem
      key={bodypart._id}
      dailyGain={bodypart}
    />
  );
  return (
    <main className="DailyList">
      {bodyparts}
    </main>
  );
}