import { useNavigate } from 'react-router-dom';
import useToken from '../data/useToken'; 
import axios from 'axios';
import { useState } from 'react';


export const LogoutButton = () => {
  const { removeToken } = useToken(); 
  const navigate = useNavigate();
  const [isHovered, setIsHovered] = useState(false);

  
  function logMeOut() {
    axios({
      method: "POST",
      url:"http://localhost:5000/logout",
    })
    .then((response) => {
       removeToken()
       navigate("/")
    }).catch((error) => {
      if (error.response) {
        console.log(error.response)
        console.log(error.response.status)
        console.log(error.response.headers)
        }
    })}
    
    const buttonStyle: React.CSSProperties = {
        position: 'fixed',
        top: '10px',
        left: '10px',
        padding: '15px',
        backgroundColor: isHovered ? '#5DADE2' : '#3498db', 
        color: '#000',
        border: 'none',
        borderRadius: '8px',
        cursor: 'pointer',
        fontSize: '16px',
        transition: 'background-color 0.3s ease', 
    };

  return (
    <button style={buttonStyle} onClick={logMeOut} 
        onMouseOver={() => setIsHovered(true)}
        onMouseOut={() => setIsHovered(false)}
    >
      Logout
    </button>
  );
};


