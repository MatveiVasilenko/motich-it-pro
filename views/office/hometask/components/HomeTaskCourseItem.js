import { useRouter } from 'next/router';
import { lang } from '../../../../project/data';
const HomeTaskCourseItem = ({
    elem,
    classes,
    admin
}) => {
    const router = useRouter()
    const goToSubcourse = () => {
        if (admin){
            router.push(`/${lang}/admin/hometask/${elem.id}`)
        } else {
            router.push(`/${lang}/office/hometask/${elem.id}`)
        }
    }
    return (
        <div onClick={goToSubcourse} className={classes.lisp__item}>
            <div>{elem.title}</div>
        </div>
    )
}
export default HomeTaskCourseItem