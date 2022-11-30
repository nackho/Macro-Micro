import { useState, useEffect, useRef } from 'react';
import * as bodypartsAPI from '../../utilities/bodyparts-api'

export default function NewWorkoutPage() {
    const [ dailyGains, setDailyGains ]= useState([])
    const splitsRef = useRef([])

    useEffect(function() {
        async function getBodyparts() {
          const bodyparts = await bodypartsAPI.getAll();
          splitsRef.current = [...new Set(bodyparts.map(bodypart => bodypart.split.name))]
          setDailyGains(bodyparts);
        }
        getBodyparts();
      }, []);

    return (
        <>
            <h1>NewWorkoutPage</h1>
            <button onClick={setDailyGains}>Trigger Rerender</button>
        </>
    )
}