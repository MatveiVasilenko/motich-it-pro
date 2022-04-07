import React from 'react'
import { useRouter } from 'next/router';
import classes from './../../styles/widgets/ui/link-styles.module.scss'

const FooterLink = ({
    title,
    link,
    type
}) => {
    const router = useRouter()
    const handleLink = () => {
        if (type === 'export') {
            window.open(link, '_blank')
        } else {
            router.push(link)
        }
    }
    return (
        <div 
            className={classes.footerLink}
            onClick={handleLink}
            >{title}</div>
    )
}
export default FooterLink