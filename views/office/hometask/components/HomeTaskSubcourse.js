import HomeTaskSubcourseItem from "./HomeTaskSubcourseItem"

const HomeTaskSubcourse = ({
    subcourses,
    classes,
    admin = false
}) => {
    return (
        <div>
            <div className={classes.lisp__title}>Подкурсы на платформе</div>
            <div className={classes.lisp__subtitle}>Выберите подкурс для перехода в задания</div>
            {subcourses?.data.map((elem, idx) => (
                <HomeTaskSubcourseItem 
                    key={`sub${idx}`}
                    classes={classes}
                    elem={elem}
                    admin={admin}
                />
            ))}
        </div>
    )
}
export default HomeTaskSubcourse