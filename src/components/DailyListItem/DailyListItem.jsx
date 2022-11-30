import './DailyListItem.css';

export default function DailyListItem({ dailyGain }) {
  return (
    <div className="DailyListItem">
      <div className="name">{dailyGain.name}</div>
        <button className="btn-sm" onClick={() => console.log('clicked')}>
          ADD
        </button>
    </div>
  );
}