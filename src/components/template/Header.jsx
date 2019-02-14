import React from 'react'
import './css/Header.css'

export default props => 

    <header className="header">
        <i className={`fa fa-${props.icon}`}> <i className="title">{`${props.title}`}</i> </i>
        <i className="sub text-muted">{props.subtitle}</i>
    </header>