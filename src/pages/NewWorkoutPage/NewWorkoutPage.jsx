import { useState, useEffect } from 'react';
import * as bodypartsAPI from '../../utilities/bodyparts-api'

export default function NewWorkoutPage() {
    const [ dailyGains, setDailyGains ]= useState([])

    useEffect(function() {
        console.log('NewWorkoutPage rendered')
    })

    useEffect(function() {
        async function getBodyparts() {
          const bodyparts = await bodypartsAPI.getAll();
          setDailyGains(bodyparts);
        }
        getBodyparts();
      }, []);

    useEffect(function() {
        console.log('dailygain change')
    }, [dailyGains])

    return (
        <>
            <h1>NewWorkoutPage</h1>
            <button onClick={setDailyGains}>Trigger Rerender</button>
        </>
    )
}