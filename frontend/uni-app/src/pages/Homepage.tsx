
import { CourseCardList } from "../components/CourseCardList"
import { LogoutButton } from "../components/Logoutbutton"



export const Homepage = () => {
    
    
    return(
        <div>
            <LogoutButton/>
            <div
            style={{
                display: "flex",
                justifyContent: 'center',
                alignItems: 'center',
                minHeight: '100vh',
            }}
        >
            
            <CourseCardList/>
            
           
        </div>
        </div>
        
    ) 
}