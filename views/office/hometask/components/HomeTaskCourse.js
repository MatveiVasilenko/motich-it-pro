import HomeTaskCourseItem from './HomeTaskCourseItem';
const HomeTaskCourse = ({
    courses,
    classes,
    admin = false
}) => {
    return (
        <div>
            <div className={classes.lisp__title}>Курсы на платформе</div>
            <div className={classes.lisp__subtitle}>Выберите курс для перехода в подкурсы</div>
            {courses.map((elem, idx) => (
                <HomeTaskCourseItem 
                    key={`course${idx}`}
                    elem={elem}
                    classes={classes}
                    admin={admin}
                />
            ))}
        </div>
    )
}
export default HomeTaskCourse