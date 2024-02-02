import { useState } from "react";
import { useNavigate } from "react-router-dom";

export const Homebutton = () => {
 
    const navigate = useNavigate();
    const [isHovered, setIsHovered] = useState(false);


    function logMeOut() {
        navigate("/auswahl")
    }
    

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
      <button
        style={buttonStyle}
        onClick={logMeOut}
        onMouseOver={() => setIsHovered(true)}
        onMouseOut={() => setIsHovered(false)}
      >
        Zurück zur Auswahl
      </button>
    );
  };
  
  