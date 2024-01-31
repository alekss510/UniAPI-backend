
import { ModulProps} from "../types/modul";
import Draggable from "react-draggable";


export const ModulCard = (props: ModulProps) => {
    const Draggable1 : any = Draggable
    
    return (
        <Draggable1>
          <div style = {{border: '1px solid #ccc', padding: '16px', margin: '16px', maxWidth: '300px', borderRadius: '8px', display: 'flex', flexDirection: 'column'}}>
            <div>
                {props.modulnummer}
            </div>
            <div>
                {props.modul}
            </div>
            <div>
                {props.doz}
            </div>
            </div>  
        </Draggable1>
        
    )    

}

  
