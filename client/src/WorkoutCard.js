import {useState, useEffect} from 'react'

function WorkoutCard ({workout}) {

    const [ePoem, setEPoem] = useState(false)
    const [exercise, setExercise] = useState([])
    const [mood, setMood] = useState()
    const [duration, setDuration] = useState()
    const [exerciseName, setExerciseName] = useState()
    function editPoem() {
        setEPoem(!ePoem)
    }

return (
          <div class="card">
          <div class="header">
          </div>
          <div class="container">
            <p>Duration: {workout.duration}</p>
            <p>Exercise: {workout.workout_type.name}</p>
            <p>Date: {workout.date}</p>
            <p>Mood: {workout.mood}</p>
          </div>
          <button onClick={editPoem}>Edit</button>
            {ePoem? <h1>Hello</h1>: null}
          <button>Delete</button>
        </div>
)
}

export default WorkoutCard