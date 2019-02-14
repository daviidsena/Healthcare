import React from 'react'
import './css/Main.css'
import Header from './Header'

export default props =>

    <React.Fragment>
        <Header {...props}/>
        <main className="content">
               {props.children}
        </main>
    </React.Fragment>