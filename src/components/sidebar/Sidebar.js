// Sidebar component
import React from 'react'
import logo from '../../images/logo_hf.png'

const sidebar = () => {
    return (
        <div style={{ height:'1080px', width: '100%', background: 'black', textAlign: 'center'}}>
            <img src = {logo} alt = "logo" width = "50%" />
        </div>
    )
}

export default sidebar;