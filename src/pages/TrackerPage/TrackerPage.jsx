import CalendarQuad from "../../components/CalenderQuad/CalendarQuad";
import WeightChangeQuad from "../../components/WeightChangeQuad/WeightChangeQuad";
import WeightCurrentQuad from "../../components/WeightCurrentQuad/WeightCurrentQuad";
import WorkoutRecQuad from "../../components/WorkoutRecQuad/WorkoutRecQuad";
import "./TrackerPage.css"

export default function TrackerPage() {
    return(
        <main className="Tracker">
            <div className="grid">
                <div className="tl"><CalendarQuad /></div>
                <div className="tr"><WorkoutRecQuad /></div>
                <div className="bl"><WeightChangeQuad /></div>
                <div className="br"><WeightCurrentQuad /></div>
            </div>
        </main>
    )
}