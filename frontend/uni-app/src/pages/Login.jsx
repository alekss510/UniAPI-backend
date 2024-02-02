import { useState } from 'react';
import axios from "axios";
import useToken  from "../components/useToken.js"
import { useNavigate } from 'react-router';

export function Login  ()  {
    const navigate = useNavigate()
    const {token, setToken} = useToken();
    const [loginForm, setloginForm] = useState({
      email: "",
      password: ""
    })

    function logMeIn(event) {
      axios({
        method: "POST",
        url:"http://localhost:5000/token",
        data:{
          email: loginForm.email,
          password: loginForm.password
         }
      })
      .then((response) => {
        setToken(response.data.access_token)
        navigate("/auswahl")
      }).catch((error) => {
        if (error.response) {
          console.log(error.response)
          console.log(error.response.status)
          console.log(error.response.headers)
          }
      })

      setloginForm(({
        email: "",
        password: ""}))

      event.preventDefault()
    }

    function handleChange(event) { 
      const {value, name} = event.target
      setloginForm(prevNote => ({
          ...prevNote, [name]: value})
      )}


      return (
        <div style={styles.container}>
          <h1 style={styles.title}>Login</h1>
          <form className="login" style={styles.form}>
            <input
              onChange={handleChange}
              type="email"
              name="email"
              placeholder="Email"
              value={loginForm.email}
              style={styles.input}
            />
            <input
              onChange={handleChange}
              type="password"
              name="password"
              placeholder="Password"
              value={loginForm.password}
              style={styles.input}
            />
            <button onClick={logMeIn} style={styles.button}>
              Einloggen
            </button>
          </form>
        </div>
      );
};
    
    const styles = {
      container: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100vh',
      },
      title: {
        fontSize: '2rem',
        marginBottom: '1rem',
      },
      form: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        width: '300px',
      },
      input: {
        margin: '0.5rem 0',
        padding: '0.5rem',
        fontSize: '1rem',
      },
      button: {
        backgroundColor: '#4CAF50',
        color: 'white',
        padding: '0.5rem 1rem',
        fontSize: '1rem',
        cursor: 'pointer',
      },
    };
    
  