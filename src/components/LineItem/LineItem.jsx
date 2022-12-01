import './LineItem.css';

export default function LineItem({ lineItem, isComplete, handleChangeQty }) {
  return (
    <div className="LineItem">
      <div className="flex-ctr-ctr flex-col">
        {/* <span className="align-ctr">{lineItem.bodypart.name}</span> */}
      </div>
      <div className="qty" style={{ justifyContent: isComplete && 'center' }}>
        <span>{lineItem.qty}</span>
        {!isComplete &&
          <button
            className="btn-xs"
            onClick={() => handleChangeQty(lineItem._id, lineItem.qty-1)}
          >X</button>
        }
        
      </div>
    </div>
  );
}