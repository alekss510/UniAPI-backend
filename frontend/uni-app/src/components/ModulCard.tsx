
import { useDrag } from "react-dnd";
import { ModulProps} from "../types/modul";
import { useLocation} from "react-router-dom";
import { useState } from "react";
import { Trash } from "react-bootstrap-icons"
import { useBackendData } from "../data/backend";


export const ModulCard = (props: ModulProps) => {
    const location = useLocation()
    const currentpath = location.pathname
    const [isHovered, setIsHovered] = useState(false);
    const {deleteData} = useBackendData();
   
    
    const handleMouseEnter = () => {
      setIsHovered(true);
    }
  
    const handleMouseLeave = () => {
      setIsHovered(false);
    }
    
    
    const deleteClick: React.MouseEventHandler<SVGElement> = async (event) => {
        
        deleteData(currentpath, props.modulnummer)
        
    }
   

    const [{ isDragging}, drag] = useDrag(() => ({
        type: 'modul',
        item: {id: props.modulnummer},
        collect: (monitor) => ({
            isDragging: !!monitor.isDragging()
        })
    }))
    

  

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



