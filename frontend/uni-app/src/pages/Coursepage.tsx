import { Lane } from "../components/Lane"
import { DndProvider, useDrop} from "react-dnd"
import { HTML5Backend } from "react-dnd-html5-backend"
import { CreateModulButton } from "../components/CreateModulButton"
import { useLocation } from "react-router-dom"
import { Homebutton } from "../components/Homebutton"
import { ModulProps } from "../types/modul"






export const Coursepage = () => {
    const location = useLocation()

    const currentPath = location.pathname.substring(1)

    const headingStyle: React.CSSProperties = {
      fontSize: '24px',
      fontWeight: 'bold',
      color: '#333', 
    };

 
    if (currentPath === "20inb" || currentPath === "20mib"){
      return(
        <div>
          <div>
            <h1 style={headingStyle}>
              Kurs: {currentPath}  
            </h1>
            <div>
              <Homebutton/>  
            </div>     
          </div>
          <div>
            <DndProvider backend={HTML5Backend}>
              <div  style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-around' }}>
              <Lane semester={"1"} />
              <Lane semester={"2"} />
              <Lane semester={"3"} />
              <Lane semester={"4"} />
              <Lane semester={"5"} />
              <Lane semester={"6"} />
              <CreateModulButton/>
              </div>
            </DndProvider>
          </div>
        </div>
        
      )
    }
    else{
      return(
        <div>
          <div>
            <h1 style={headingStyle}>
              Kurs: {currentPath}  
            </h1>
            <div>
              <Homebutton/>  
            </div>     
          </div>
          <div>
            <DndProvider backend={HTML5Backend}>
              <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-around' }}>
              <Lane semester={"1"} />
              <Lane semester={"2"} />
              <Lane semester={"3"} />
              <Lane semester={"4"} />
              <CreateModulButton/>
              </div>
            </DndProvider>
          </div>
        </div>
        
      )
    }

   
}


