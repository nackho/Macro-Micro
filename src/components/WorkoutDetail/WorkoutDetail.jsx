import './WorkoutDetail.css';
import LineItem from '../LineItem/LineItem';

// Used to display the details of any order, including the cart (unpaid order)
export default function WorkoutDetail({ workout, handleChangeQty, handleCheckout }) {
  if (!workout) return null;

  const lineItems = workout.lineItems.map(bodypart =>
    <LineItem
      lineItem={bodypart}
      isComplete={workout.isComplete}
      handleChangeQty={handleChangeQty}
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
                  onClick={handleCheckout}
                  disabled={!lineItems.length}
                >GOOD WORK</button>
              }
              <span>{workout.totalQty}</span>
            </section>
          </>
          :
          <div className="hungry">Choo Choo, All aboard the GAIN TRAIN</div>
        }
      </div>
    </div>
  );
}