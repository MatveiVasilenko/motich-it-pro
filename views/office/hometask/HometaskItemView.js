import HomeTaskSubcourse from './components/HomeTaskSubcourse';
import classes from './../../../styles/views/office/hometask-view.module.scss'
import stylesOffice from './../../../styles/layouts/office-layouts-styles.module.scss'
import { useRouter } from 'next/router';
import Back from './../../../widgets/ui/Back';

const HometaskItemView = ({
    subcourses
}) => {
    const router = useRouter()

    return (
        <div className={stylesOffice.containerOffice}>
            <div>
                <Back 
                    title="Вернуться к курсам"
                    onClick={() => router.push('/ru/office/hometask')}
                />
            </div>
            <HomeTaskSubcourse 
                subcourses={subcourses}
                classes={classes}
            />
        </div>
    )
}
export default HometaskItemView