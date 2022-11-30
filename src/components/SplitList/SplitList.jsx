import './SplitList.css';

export default function SplitList({ splits, activeGroup, setActiveGroup }) {
  const groups = splits.map(group =>
    <li
      key={group}
      className={group === activeGroup ? 'active' : ''}
      onClick={() => setActiveGroup(group)}
    >
      {group}
    </li>
  );
  return (
    <ul className="SplitList">
      {groups}
    </ul>
  );
}