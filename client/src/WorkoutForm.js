// client/src/components/App.js
import { useState, useEffect } from "react";

function WorkoutForm() {

  const [exercise, setExercise] = useState([])
  const [mood, setMood] = useState()
  const [duration, setDuration] = useState()
  const [exerciseName, setExerciseName] = useState()

  useEffect(() =>{
    fetch('/workout_types')
    .then(res=> res.json())
    .then(data =>
      setExercise(data))
  }, [])

  const handleChangeExercise = (event) =>{
    setExerciseName(event.target.value);
}

const handleChangeMood =(event) =>{
  setMood(event.target.value)
}

const handleChangeDuration = (event) =>{
  setDuration(event.target.value)
}

console.log(exerciseName)
console.log(mood)
console.log(duration)


function handleSubmit(e) {
    e.preventDefault();
    const workoutNew = {
      mood: mood,
      workout_type: exerciseName,
      user_id: 3,
      duration: duration
    }
    fetch('/workouts', {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
  },
  body: JSON.stringify(workoutNew)
});
  }

 return (
  <div>
   {/* workout form */}
   <h1>Add workout</h1>
   <form onSubmit={(e) => handleSubmit(e)}>
    <input type="text" name="name" onChange={handleChangeDuration} placeholder="duration in minutes"/>
    <select className="form-control" value={mood} onChange={handleChangeMood}>
      <option value=''>Mood</option>
      <option value='good'>Good</option>
      <option value='energized'>Energized</option>
      <option value='tired'>Tired</option>
      <option value='neutral'>Neutral</option>
      <option value='exhausted'>Exhausted</option>
    </select>
    <select className="form-control" value={exerciseName} onChange={handleChangeExercise}>
      <option value="">Select workout</option>

      {exercise.map(item => (
              <option value={item.name} key={item.id} >{item.name}</option>
    
              ))
              }

    </select>
  <button>Submit</button>
   </form>
  </div>
 )
}

export default WorkoutForm;