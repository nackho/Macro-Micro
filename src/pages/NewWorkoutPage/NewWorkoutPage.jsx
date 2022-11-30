import { useState, useEffect } from 'react';

export default function NewWorkoutPage() {
    const [ dailyGains, setDailyGains ]= useState([])

    useEffect(function() {
        console.log('NewWorkoutPage rendered')
    })

    useEffect(function() {
        console.log('first render')
    }, [])

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