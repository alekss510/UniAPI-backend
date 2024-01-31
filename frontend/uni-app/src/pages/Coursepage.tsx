import { Lane } from "../components/Lane"
import { ModulCard } from "../components/ModulCard"


export const Coursepage = () => {
    return(
        <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-around'}}>
            <Lane semester={"Ablage"}>
                <ModulCard modulnummer={"1"} modul={""} />
                <ModulCard modulnummer={"2"} modul={""} />
            </Lane>
            <Lane semester={"1"}>
                <ModulCard modulnummer={"3"} modul={""}/>
                <ModulCard modulnummer={"4"} modul={""}/>
            </Lane>
            <Lane semester={"2"}>
                <ModulCard modulnummer={"5"} modul={""}/>
                <ModulCard modulnummer={"6"} modul={""}/>
            </Lane>
            <Lane semester ={"3"}>
                <ModulCard modulnummer={"7"} modul={""}/>
                <ModulCard modulnummer={"8"} modul={""}/>
            </Lane>
            <Lane semester= {"4"}>
                <ModulCard modulnummer={"9"} modul={""}/>
                <ModulCard modulnummer={"10"} modul={""}/>
            </Lane>
            <Lane semester= {"5"}>
                <ModulCard modulnummer={"11"} modul={""}/>
                <ModulCard modulnummer={"12"} modul={""}/>
            </Lane>
        </div>
        
       
    ) 
}