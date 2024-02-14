import { ReactNode, useEffect, useState } from "react"
import { LaneProps } from "../types/LaneProps"
import { useDrop } from "react-dnd"
import { ModulCard } from "./ModulCard"
import { useLocation } from "react-router-dom"
import { useBackendData } from "../data/backend"



export const Lane = (props: LaneProps) => {

    const { data, fetchData, updateData} = useBackendData();

    const location = useLocation()
    const currentPath = location.pathname
    
    useEffect(() => {
      fetchData(currentPath)
    }, [data]);

     
    const[{canDrop, isOver}, drop] = useDrop({
        accept: 'modul',
        drop: (dragItem: {id : string}) => updateData(currentPath, dragItem.id, props.semester) ,
        collect: (monitor) => ({
            isOver: monitor.isOver(),
            canDrop: monitor.canDrop(),
        }),
    });

 
    return (
        <div  ref ={drop} style={{border: '1px solid black', width: `300px`, height: `100%`}}>
            <h2>{`${props.semester}. Semester`}</h2>
            
            <div  style={{display: "flex", flexDirection: 'column'}}>
                {
                    data && Array.isArray(data) && data
                    .filter(item => props.semester === item["Lane"])
                    .map(item => (<ModulCard key={item["Modulnummer"]} modulnummer={item["Modulnummer"]} modul={item["Modul"]} lane={item["Lane"]}/>))
                }
            </div>
                
        </div>
        )
}
  
    

   


