import React from 'react'

const FirstBlock = ({ classes, DATA}) => {
    
   const teacher = DATA.teachers
     return (
        <div className={classes.contactInfoFirst}>
            <div className={classes.contactInfoTitle}>Преподаватели</div>
            <div className={classes.contactTeachersBlock}>
                {teacher.map((elem) => (
                    <div className={classes.contactTeachers}>{elem.name}</div>
                ))}
            </div>
        </div>
    )
}

export default FirstBlock