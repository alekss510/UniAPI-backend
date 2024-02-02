
import { ModulProps } from "../types/modul";

export const Headline = (props: ModulProps) => {
    
    
    return (
        <div>
            <h1>
                {props.modul} -- {props.modulnummer} 
            </h1>
        </div>
    );
}
