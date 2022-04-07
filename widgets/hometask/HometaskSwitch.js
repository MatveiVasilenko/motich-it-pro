import LinkHome from "./modules/LinkHome"

const HometaskSwitch = ({
    homeData,
    answerData,
    setAnswerData,
    setHomeData,
    classes,
    stylesOffice
}) => {
    const {
        type
    } = homeData
    const config = {
        ...homeData,
        answerData,
        setAnswerData,
        stylesOffice,
        classes
    }
    switch (type) {
        case 'link': 
            return <LinkHome {...config}/>
        default:
            return <div>Похоже, дз нет;)</div>
    }
}
export default HometaskSwitch