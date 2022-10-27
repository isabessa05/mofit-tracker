import {useState, useEffect} from 'react'

function Login({handleLogIn, errors}) {
    const [user, setUser] = useState("")
    const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
 
  const allErrors = errors.map((err) => (
    <h1 key={err}>{err}</h1>
  ))

  function handleSubmitLogIn(e) {
    e.preventDefault();
    const userLog = {
      username: username,
      password: password
    }
    handleLogIn(userLog)
  }



    return (
        <div>
        <form onSubmit={handleSubmitLogIn}>
          <h1>Login</h1>
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
            autoComplete="current-password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button type="submit">Login</button>
        </form>
            {errors? allErrors : null }
          <h1>Welcome {user.first_name}</h1>
      </div>
    )
}


export default Login