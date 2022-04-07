import React from 'react'
import Modal from '../../../../widgets/modal/Modal'
import TypeItem from './TypeItem'
import { lang } from './../../../../project/data';

const ChooseTypeModal = ({
    chooseTypeModal,
    setChooseTypeModal,
    classes,
    gridClasses,
    chooseTypeFunc,
    adminStyles
}) => {
    
    const types = [
        {
            id: 1,
            value: 'video',
            title: lang === 'ru' ? 'Видеоурок' : 'Відеоурок',
            works: true
        },
        {
            id: 1,
            value: 'test',
            title: lang === 'ru' ? 'Тест' : 'Тест',
            works: false
        }
    ]
    return (
        <div>
            <Modal
                showModal={chooseTypeModal}
                setShowModal={setChooseTypeModal}
                title={"Выбрать тип урока"}
            >
                <div className={classes.modalChooseType}>
                    {types.map((item, idx) => (
                        <TypeItem 
                            item={item}
                            idx={idx}
                            classes={classes}
                            chooseTypeFunc={chooseTypeFunc}
                            adminStyles={adminStyles}
                        />
                    ))}
                </div>
            </Modal>
        </div>
    )
}
export default ChooseTypeModal