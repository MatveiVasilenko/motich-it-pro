import React from 'react'
import { getData } from '../../../../common/utils'
import { NET } from '../../../../network'

const CoursesSliderItem = ({
    styles,
    course,
    idx,
    counter,
    setModulesData
}) => {
    const swapCourse = async () => {
        const data = await getData(`${NET.BACK_URL}/courses/${course?.id}?modules=1`)
        setModulesData(data)
    }
    return (
        <div className={styles.courses__slider__item} onClick={swapCourse}>
            <img src={`${NET.FRONT_URL}/storage/image${course?.img.substring(6,40)}`}/>
            <div onClick={swapCourse} className={styles.courses__slider__btn}>Подробнее о курсе</div>
        </div>
    )
}
export default CoursesSliderItem