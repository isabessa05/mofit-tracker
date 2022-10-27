// client/src/components/App.js
import { useState, useEffect } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import WorkoutForm from "./WorkoutForm";
import './card.css'
import NavBar from "./NavBar";
import Login from "./Login";

function App() {
  const [user, setUser] = useState(null)
  const [allWorkouts, setAllWorkouts] = useState([])
  const [errors, setErrors] = useState([]); 
  
//Calling user if logged in 
  useEffect(() => {
    fetch("/me").then((response) => {
      if (response.ok) {
        response.json().then((user) => setUser(user));
      }
    });
  }, []);

//End of user calling


// Showing all workout data
  useEffect(() => {
    fetch(`/workouts/${user.id}`)
      .then(res => res.json())
      .then(data =>
        setAllWorkouts(data))
  }, [])
// End of showing data

//Log Out Function
  function handleLogOut() {
    fetch("/logout", {
      method: "DELETE",
    });
    setUser(null)
    alert("You are logged out!")
  }

//End of Log out function


//start of Log In Function

function handleLogIn(userLog){
  fetch('/login', {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(userLog),
  }).then((r) => {
    if (r.ok) {
      r.json()
      .then((userData) => setUser(userData))
    
    }
    else {
      r.json().then((err) => setErrors(err.errors));
    }
  })
}
//End of login function 


  const workoutState = allWorkouts.map((workout) => {
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
        <button>Edit</button>
        <button>Delete</button>
      </div>
    )

  })


  return (
    <BrowserRouter>
    <div>
      <NavBar handleLogOut={handleLogOut}/>
      {user? <h1>Welcome {user.first_name}</h1> : null}
      <Switch>
        <Route exact path="/newworkout">
          <WorkoutForm />
        </Route>
        <Route exact path="/login">
          <Login handleLogIn={handleLogIn(userLog)}/>
        </Route>
      </Switch>
      {workoutState}
    </div>
    </BrowserRouter>

  )
}

export default App;