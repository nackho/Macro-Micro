import './WorkoutDetail.css';
import LineItem from '../LineItem/LineItem';

// Used to display the details of any order, including the cart (unpaid order)
export default function WorkoutDetail({ workout }) {
  if (!workout) return null;

  const lineItems = workout.lineItems.map(bodypart =>
    <LineItem
      lineItem={bodypart}
      isComplete={workout.isComplete}
      key={bodypart._id}
    />
  );

  return (
    <div className="WorkoutDetail">
      <div className="section-heading">
        {workout.isComplete ?
          <span>WORKOUT <span className="smaller">{workout.workoutId}</span></span>
          :
          <span>NEW WORKOUT</span>
        }
        <span>{new Date(workout.updatedAt).toLocaleDateString()}</span>
      </div>
      <div className="line-item-container flex-ctr-ctr flex-col scroll-y">
        {lineItems.length ?
          <>
            {lineItems}
            <section className="total">
              {workout.isComplete ?
                <span className="right">TOTAL&nbsp;&nbsp;</span>
                :
                <button
                  className="btn-sm"
                  onClick={() => alert('clicked')}
                  disabled={!lineItems.length}
                >SUBMIT</button>
              }
              <span>{workout.totalQty}</span>
              <span className="right">${workout.workoutTotal.toFixed(2)}</span>
            </section>
          </>
          :
          <div className="hungry">Hungry?</div>
        }
      </div>
    </div>
  );
}