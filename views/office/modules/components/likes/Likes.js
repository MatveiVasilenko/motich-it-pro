import React, {
    useState, useEffect, useContext
} from 'react'
import ContextApp from '../../../../../context/App/ContextApp'
import { NET } from '../../../../../network';
import { getData } from './../../../../../common/utils';
import svgSprite from './../../../../../project/svg/svgSprite';

const Likes = ({
    classes,
    likes,
    idModule,
    setModuleData
}) => {
    const {stateApp} = useContext(ContextApp)
    const id = stateApp?.user?.id
    const [activeLike, setActiveLike] = useState(false)
    const [countLike, setCountLike] = useState(0)
    useEffect(() => {
        if (likes) {
            setCountLike(JSON.parse(likes))
        } else {
            setCountLike(0)
        }
    }, [likes])
    useEffect(() => {
        if (countLike) {
            const active = countLike.filter(el => el === id)
            if (active.length) {
                setActiveLike(true)
            } else {
                setActiveLike(false)
            }
        }
    }, [countLike])

    const clickFunc = async () => {
        const data = await getData(
            `${NET.BACK_URL}/modules/likes/${idModule}`,
            "POST",
            {
                idUser: id
            }
        )
        setModuleData(data.data)
    }
    return (
        <div>
            <div className={classes.likes} onClick={clickFunc}>
                <div className={activeLike ? [classes.likes__icon, classes.likes__icon_active].join(' ') : classes.likes__icon}>
                    {svgSprite('Like')}
                </div>
                <div className={classes.likes__number}>{countLike ? countLike.length : 0}</div>
            </div>
        </div>
    )
}
export default Likes