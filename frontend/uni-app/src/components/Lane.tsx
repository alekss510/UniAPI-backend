import { ReactNode, useEffect, useState } from "react"
import { LaneProps } from "../types/LaneProps"
import { useDrop } from "react-dnd"
import { ModulCard } from "./ModulCard"
import { useLocation } from "react-router-dom"






export const Lane = (props: LaneProps) => {
    const [items, setItems] = useState([])
    const location = useLocation()

    const currentPath = location.pathname


    
    useEffect(() => {
        fetch(`http://localhost:5000/${currentPath}`)
          .then((res) => {
            if (!res.ok) {
              throw new Error(`Network response was not ok: ${res.status}`);
            }
            return res.json();
          })
          .then((resJson) => {
            setItems(resJson);
        
          })
          .catch((error) => {
            console.error('Fehler beim Fetchen der Daten:', error);
          });
      }, []);


    const[{canDrop, isOver}, drop] = useDrop({
        accept: 'modul',
        drop: (modul: ReactNode) => addItemToLane(modul),
        collect: (monitor) => ({
            isOver: monitor.isOver(),
            canDrop: monitor.canDrop(),
        }),
    });

   
    const addItemToLane = (modul: ReactNode) => {
        
        console.log(modul)        
    }
        
    
 
    return (
        <div ref ={drop} style={{border: '1px solid black', width: `300px`, height: `100%`}}>
            <h2>{props.semester}</h2>
            
            <div  style={{display: "flex", flexDirection: 'column'}}>
                {
                    items
                    .filter(item => props.semester === item["Lane"])
                    .map(item => (<ModulCard key={item["Modulnummer"]} modulnummer={item["Modulnummer"]} modul={item["Modul"]} />))
                }
            </div>
                
        </div>
        )
}
  
    

   


//children={items.map((item) => <ModulCard key={item["Modulnummer"]} modulnummer={item["Modulnummer"]} modul={item["Modul"]}

//{items.map((item => <ModulCard key={item["Modulnummer"]} modulnummer={item["Modulnummer"]} modul={item["Modul"]}/>))}