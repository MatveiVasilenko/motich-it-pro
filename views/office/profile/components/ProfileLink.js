import React, {
    useState, useRef
} from 'react'
import { NET } from './../../../../network';

const ProfileLink = ({
    classes,
    link
}) => {
    const [copySuccess, setCopySuccess] = useState('');
    const textAreaRef = useRef(null);
    function copyToClipboard(e) {
        console.log(textAreaRef.current.innerHTML)
        textAreaRef.current.select()
        document.execCommand('copy');
        // This is just personal preference.
        // I prefer to not show the whole text area selected.
        e.target.focus();
        setCopySuccess('Copied!');
    };

    return (
        <div className={classes.profileLink}>
            <div className={classes.profileLinkTitle}>Ваша реферальная ссылка</div>
            <input className={classes.profileLinkElem} ref={textAreaRef} value={`${NET.FRONT_URL}?refferal=${link}`}/>
            <div className={classes.profileLinkBtn} onClick={copyToClipboard}>Копировать ссылку</div>
        </div>
    )
}
export default ProfileLink