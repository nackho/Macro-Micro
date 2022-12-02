import { Link } from 'react-router-dom'
import * as userService from '../../utilities/users-service'

export default function NavBar({ user, setUser }) {

    function handleLogOut() {
        userService.logOut()
        setUser(null)
    }

    return (
        <nav>
            <Link to="/tracker">Stats</Link>
            &nbsp; | &nbsp;
            <Link to="/workout">Workouts</Link>
            &nbsp; | &nbsp;
            <Link to="/workout/new" state={null}>New Workout</Link>
            &nbsp; | &nbsp;
            <Link to="/weight">Weight</Link>
            &nbsp; | &nbsp;
            <Link to="/weight/new">New Weigh-in</Link>
            &nbsp; | &nbsp;
            Welcome, {user.name}
            &nbsp; | &nbsp;
            <Link to="" onClick={handleLogOut}>Log Out</Link>
        </nav>
    )
} 