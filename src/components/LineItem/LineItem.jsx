import './LineItem.css';

export default function LineItem({ lineItem, isComplete }) {
  return (
    <div className="LineItem">
      <div className="flex-ctr-ctr flex-col">
        <span className="align-ctr">{lineItem.bodypart.name}</span>
      </div>
      <div className="qty" style={{ justifyContent: isComplete && 'center' }}>
        {!isComplete &&
          <button
            className="btn-xs"
            onClick={() => alert('clicked')}
          >−</button>
        }
        <span>{lineItem.qty}</span>
        {!isComplete &&
          <button
            className="btn-xs"
            onClick={() => alert('clicked')}
          >+</button>
        }
      </div>
    </div>
  );
}