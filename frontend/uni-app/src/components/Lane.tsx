import { useEffect, useRef, useState } from "react"
import { LaneProps } from "../types/LaneProps"




export const Lane = (props: LaneProps) => {
    let semester
    if (props.semester === 'Ablage'){
        semester = "Ablage"
    }
    else{
        semester = `${props.semester} .Semester`
    }
    
    return (
        <div style={{border: '1px solid black', width: `200px`, height: `700px`}}>
            <h2>{semester}</h2>
            <div style={{display: "flex", flexDirection: 'column'}}>
                {props.children}
            </div>
            
        </div>
    )
}