import { useRouter } from 'next/router';
import { lang } from '../../../../project/data';
const HomeTaskSubcourseItem = ({
    elem,
    classes,
    admin
}) => {
    const router = useRouter()
    const goToHometask = () => {
        if (admin) {
            router.push(`/${lang}/admin/hometask/lisp/${elem.course.id}`)
        } else {
            router.push(`/${lang}/office/hometask/lisp/${elem.course.id}`)
        }
    }
    return (
        <div onClick={goToHometask} className={classes.lisp__item}>
            <div>{elem.course.title}</div>
        </div>
    )
}
export default HomeTaskSubcourseItem