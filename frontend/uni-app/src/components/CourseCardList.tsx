import { CourseCard } from "./CourseCard"



export const CourseCardList = () => {
    const courses: string[] = ["20inb", "20inm", "20mib", "20mim"]

    return (
        <div style={{display: "flex"}}>
            {courses.map((cours => <CourseCard key={cours} name={cours}/> ))}
        </div>
    )
}