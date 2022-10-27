// client/src/components/App.js
import { useState, useEffect } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import WorkoutForm from "./WorkoutForm";
import './card.css'
import NavBar from "./NavBar";
import Login from "./Login";
import WorkoutCard from "./WorkoutCard";
import SignUp from "./SignUp";

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
    fetch(`/workouts`)
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
      r.json().then((err) => console.log(err.errors));
    }
  })
}
//End of login function 


//start of workout function
function handleAddWorkout (workoutNew) {
fetch('/workouts', {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
  },
  body: JSON.stringify(workoutNew)
}).then(res => res.json())
.then(newWorkout => setAllWorkouts([...allWorkouts, newWorkout]));
}

//end of workout function
let workoutState 
let showWorkouts

if (user) {
   workoutState = allWorkouts.filter((item) => {
    return (item.user_id == user.id)})

  showWorkouts = workoutState.map((workout)=> {
  return <WorkoutCard workout={workout}/>})
 
}
    

console.log(showWorkouts)
  return (
    <BrowserRouter>
    <div>
      <NavBar handleLogOut={handleLogOut}/>
      {user? <h1>Welcome {user.first_name}</h1> : null}
      <Switch>
        <Route exact path="/newworkout">
          <WorkoutForm user={user} handleAddWorkout={handleAddWorkout}/>
        </Route>
        <Route exact path="/login">
          <Login handleLogIn={handleLogIn} errors ={errors}/>
        </Route>
        <Route exact path='/signup'>
         <SignUp setUser={setUser}/>
        </Route>
      </Switch>
      {user? <h1>{showWorkouts}</h1> : null}
    </div>
    </BrowserRouter>

  )
}

export default App;