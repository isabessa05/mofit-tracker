import {useState} from 'react'
function SignUp({setUser}){
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("")
  
    function handleSubmit(e) {
      e.preventDefault();
      const newUser = {
        first_name: firstName,
        last_name: lastName,
        username: username,
        password: password,
    }
    console.log(newUser)
      fetch("/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newUser),
      }).then((r) => {
        if (r.ok) {
          r.json().then((user) => console.log(user));
        }
      });
    }

    return (
        <div>
          <form onSubmit={handleSubmit}>
            <h1>Sign Up</h1>
            <label htmlFor="firstname">First Name</label>
            <input
              type="text"
              id="firstname"
              autoComplete="off"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
            />
            <label htmlFor="lastname">Last Name</label>
            <input
              type="text"
              id="username"
              autoComplete="off"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
            />
            <label htmlFor="username">Username</label>
            <input
              type="text"
              id="username"
              autoComplete="off"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              autoComplete="current-password"
            />
            <button type="submit">Sign Up</button>
          </form>
        </div>
      )
}

export default SignUp;