import { useState, useEffect } from "react";
import { useLocation } from "react-router";
import { Headline } from "./Headline";


export const HeadlineWrapper = () => {
    
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
            console.log(items)
        
          })
          .catch((error) => {
            console.error('Fehler beim Fetchen der Daten:', error);
          });
      }, []);

    const item = (Modulnummer: string) => {
        return items[Modulnummer as keyof typeof item]
    }
    
    return(
      <div>
        <Headline modulnummer={item("Modulnummer")} modul={item("Modul")}></Headline>
      </div>
    )
}