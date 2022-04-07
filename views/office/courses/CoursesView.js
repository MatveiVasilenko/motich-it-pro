import React, {
    useState, useContext, useEffect
} from 'react'
import { useRouter } from 'next/router';
import classes from './../../../styles/views/course-view-styles.module.scss'
import stylesOffice from './../../../styles/layouts/office-layouts-styles.module.scss'
import CourseItem from './components/Courseitem';

const CoursesView = ({
    courses,
}) => {
    const router = useRouter()

    const parentCourse = courses.filter((el) => el.course_id === null)
    const [coursesData, setCoursesData] = useState(parentCourse)

    const handleCourses = (id) => {
        router.push(`/ru/office/modules?course_id=${id}`)        
    }
    return (
        <div className={stylesOffice.containerOffice}>
            <div className={classes.courseWrapper}>
                <div className={classes.courseTitle}>Премиум-Курсы</div>
                {
                    coursesData && coursesData.filter(el => el.premium).map((el, idx) => (
                        <>
                            <CourseItem 
                                classes={classes}
                                stylesOffice={stylesOffice}
                                el={el}
                                key={`courses${idx}`}
                                handleCourses={handleCourses}
                            />
                        </>
                    ))
                }
                <div className={classes.courseTitle}>Курсы</div>
                {
                    coursesData && coursesData.filter(el => !el.premium).map((el, idx) => (
                        <>
                            <CourseItem 
                                classes={classes}
                                stylesOffice={stylesOffice}
                                el={el}
                                key={`courses${idx}`}
                                handleCourses={handleCourses}
                            />
                        </>
                    ))
                }
            </div>
        </div>
    )
}
export default CoursesView