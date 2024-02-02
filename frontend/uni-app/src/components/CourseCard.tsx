import { useState } from "react";
import { CourseProps } from "../types/CourseProps"
import { useNavigate } from "react-router";





export const CourseCard = (props: CourseProps) => {
    const navigate = useNavigate();
    
    const [isHovered, setIsHovered] = useState(false);

    const handleMouseEnter = () => {
      setIsHovered(true);
    };
  
    const handleMouseLeave = () => {
      setIsHovered(false);
    };

    
    const handleClick: React.MouseEventHandler<HTMLDivElement> = (event) => {
        navigate(`/${props.name}`)
    }


    return (
        <div 
        onMouseEnter={handleMouseEnter} 
        onMouseLeave={handleMouseLeave} 
        onClick={handleClick} 
        style = {{
            backgroundColor: isHovered ? 'lightblue' : 'lightgrey', 
            border: '1px solid #ccc', 
            padding: '16px', 
            margin: '16px', 
            maxWidth: '300px', 
            borderRadius: '8px', 
            display: 'flex', 
            flexDirection: 'column'
        }}>
            <h2>
                {props.name}
            </h2>
        </div>
    )



}