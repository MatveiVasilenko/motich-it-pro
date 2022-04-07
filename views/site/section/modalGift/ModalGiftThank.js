
const ModalGiftThank = ({
    styles,
    setShowModalGiftThank
}) => {
    return (
        <div className={styles.modalGift}>
            <div className={styles.modalGiftBody}>
                <div className={styles.modalGift__title}>Круто!</div>
                <div className={styles.modalGift__text}>Совсем скоро Вы получите свой чеклист и научитесь создавать крутые резюме!</div>
                <div>
                    <button 
                        onClick={() => setShowModalGiftThank(false)}
                        className={styles.modalGift__btn}>Окей</button>
                </div>
            </div>
        </div>
    )
}
export default ModalGiftThank