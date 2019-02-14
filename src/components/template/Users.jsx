import React from 'react'
import Main from '../template/Main'
import Register from '../template/Users/RegisterUser'

export default props =>
   
    <Main icon="home" title="Users" subtitle="Informations about users">
        <hr />
        <p>Dashboard with informations</p>
        <Register/>
    </Main> 
