import { useState, useEffect, useRef } from 'react';
import * as bodypartsAPI from '../../utilities/bodyparts-api';
import * as workoutsAPI from '../../utilities/workouts-api';
import './NewWorkoutPage.css';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import Logo from '../../components/Logo/Logo';
import DailyList from '../../components/DailyList/DailyList';
import SplitList from '../../components/SplitList/SplitList';
import WorkoutDetail from '../../components/WorkoutDetail/WorkoutDetail';
import UserLogOut from '../../components/UserLogOut/UserLogOut';

export default function NewWorkoutPage({ user, setUser }) {
    const [ dailyGains, setDailyGains ] = useState([])
    const [ cart, setCart ] = useState(null)
    const [ activeGroup, setActiveGroup ] = useState('')
    const splitsRef = useRef([])
    const navigate = useNavigate();
    const location = useLocation();

    const isExistingWorkout = location.state;
    let existingWorkoutId;
    if (isExistingWorkout) {
      existingWorkoutId = location.state.workout._id;
    }

    useEffect(function() {
        async function getBodyparts() {
          const bodyparts = await bodypartsAPI.getAll();
          splitsRef.current = [...new Set(bodyparts.map(bodypart => bodypart.split.name))]
          setDailyGains(bodyparts);
          setActiveGroup(splitsRef.current[0])
        }
        getBodyparts();
        async function getCart() {
          if(isExistingWorkout) {
            setCart(location.state.workout)
          } else {
            const cart = await workoutsAPI.getCart();
            setCart(cart)
          }
        };
        getCart();
    }, []);
    
    async function handleAddToWorkout(bodypartId) {
      const cart = isExistingWorkout ? 
      await workoutsAPI.addBodypartToWorkout(existingWorkoutId, bodypartId) : 
      await workoutsAPI.addBodypartToCart(bodypartId)
      setCart(cart)
    }

    async function handleChangeQty(bodypartId, newQty) {
      const updatedCart = isExistingWorkout ? 
      await workoutsAPI.setBodypartQtyInWorkout(existingWorkoutId, bodypartId, newQty) :
      await workoutsAPI.setBodypartQtyInCart(bodypartId, newQty);
      setCart(updatedCart);
    }

    async function handleCheckout() {
      if (isExistingWorkout) {
        await workoutsAPI.checkoutWorkout(existingWorkoutId);
      } else {
        await workoutsAPI.checkout();
      }
      navigate('/workout');
    }

    return (
      <main className="NewWorkoutPage">
        <aside>
          <Logo />
          <SplitList
            splits={splitsRef.current}
            activeGroup={activeGroup}
            setActiveGroup={setActiveGroup}
          />
          <Link to="/workout" className="button btn-sm">PREVIOUS WORKOUTS</Link>
          <UserLogOut user={user} setUser={setUser} />
        </aside>
        <DailyList
          dailyGains={dailyGains.filter(bodypart => bodypart.split.name === activeGroup)}
          handleAddToWorkout={handleAddToWorkout}
        />
        <WorkoutDetail
          workout={cart} 
          handleChangeQty={handleChangeQty} 
          handleCheckout={handleCheckout} 
        />
      </main>
    )
}