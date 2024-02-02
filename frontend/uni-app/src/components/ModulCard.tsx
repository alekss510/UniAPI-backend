
import { useDrag } from "react-dnd";
import { ModulProps} from "../types/modul";
import { useLocation, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { Trash } from "react-bootstrap-icons"


export const ModulCard = (props: ModulProps) => {
    const navigate = useNavigate()
    const location = useLocation()
    const [isHovered, setIsHovered] = useState(false);

    const handleMouseEnter = () => {
      setIsHovered(true);
    };
  
    const handleMouseLeave = () => {
      setIsHovered(false);
    };
    
    
    const currentpath = location.pathname

    const [{ isDragging}, drag] = useDrag(() => ({
        type: 'modul',
        item: {id: props.modulnummer},
        collect: (monitor) => ({
            isDragging: !!monitor.isDragging()
        })
    }))
    

    const deleteClick: React.MouseEventHandler<SVGElement> = async (event) => {
        
        
        await fetch(`http://localhost:5000/${currentpath}/${props.modulnummer}`, {
            method: 'DELETE',  
        })

        window.location.reload()
        
    }

    return (
        <div 
            ref={drag}
            
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
            <div>
                <div>
                    {props.modulnummer}
                </div>
                <div>
                    {props.modul}
                </div>
            </div>
            <div >
                <Trash size={35} 
                onMouseEnter={handleMouseEnter} 
                onMouseLeave={handleMouseLeave} 
                onClick={deleteClick} />
            </div>
            
        </div>  
        
        
    )    

}



