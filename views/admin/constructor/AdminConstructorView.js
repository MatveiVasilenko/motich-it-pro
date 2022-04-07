import React from 'react'
import classes from './../../../styles/views/admin/admin-constructor-view-styles.module.scss'
import SiteConstructor from './components/SiteConstructor'

const AdminConstructorView = ({
    config
}) => {
    return (
        <div>
            <SiteConstructor 
                classes={classes}
                config={config}
            />
        </div>
    )
}
export default AdminConstructorView