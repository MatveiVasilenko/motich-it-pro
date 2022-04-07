import React from 'react'
import svgSprite from '../../../../../project/svg/svgSprite'
import { useRouter } from 'next/router';

const BlockVideo = ({
    classes,
    stylesOffice
}) => {
    const router = useRouter()
    const goToHome = () => {
        router.push('/ru/office')
    }
    return (
        <div className={classes.blockVideo}>
            {svgSprite('AuthPassword', {
                fill: '#c4c4c4',
                width: '50px'
            })}
            <div className={classes.blockVideo__title}>Чтобы посмотреть видеоурок необходимо оплатить подписку</div>
            <div>
                <div>
                    <button onClick={goToHome} className={stylesOffice.btn}>Оплатить</button>
                </div>
            </div>
        </div>
    )
}
export default BlockVideo