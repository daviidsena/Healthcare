import React from 'react'
import { Link } from 'react-router-dom'


export default props =>

        <Link className='btn' to={props.link}>
              <i className={`icon fa fa-${props.icon}`}></i> 
              {props.title}
        </Link>